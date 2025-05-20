import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database:"World",
  password:"neoray123",
  port:9977,

});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentUserId = 1;

let users = [
  { id: 1, name: "Angela", color: "teal" },
  { id: 2, name: "Jack", color: "powderblue" },
];
async function checkVisisted() {
  const result = await db.query("SELECT country_code FROM visited_countries WHERE user_id = $1",[currentUserId]);
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}
app.get("/", async (req, res) => {
  const countries = await checkVisisted();
  res.render("index.ejs", {
    countries: countries,
    total: countries.length,
    users: (await db.query("SELECT * FROM users")).rows,
    color: (await db.query("SELECT color FROM users WHERE id =$1",[currentUserId])).rows[0].color,
  });
});
app.post("/add", async (req, res) => {
  const input = req.body["country"];

  try {
    const result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
      [input.toLowerCase()]
    );

    const data = result.rows[0];
    const countryCode = data.country_code;
    try {
      await db.query(
        "INSERT INTO visited_countries (user_id , country_code) VALUES ($1,$2)",
        [currentUserId,countryCode]
      );
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
});
app.post("/user", async (req, res) => {
  if(req.body["user"]){
    currentUserId = req.body["user"];
    res.redirect("/");
  }
  else
  {
    res.render("new.ejs")
  }



});

app.post("/new", async (req, res) => {
  //Hint: The RETURNING keyword can return the data that was inserted.
  //https://www.postgresql.org/docs/current/dml-returning.html
  if(req.body["name"])
    {
      let color =req.body["color"];
      if(!color)
      {
        color = "teal";
      }
      try {
        await db.query(
          "INSERT INTO users (name , color) VALUES ($1,$2)",
          [req.body["name"],color]
        );
        
      } catch (err) {
        console.log(err);
      }
    }
    res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  
});
