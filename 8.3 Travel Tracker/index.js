import express from "express";
import bodyParser from "body-parser";
import  pg from "pg";
const app = express();
const port = 3001;






app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database:"World",
    password:"neoray123",
    port:9977,
  
  });
  db.connect();
  let countries = [];
  const resolt = await db.query("SELECT country_code FROM visited_countries");

 
  resolt.rows.forEach((country)=>
      {
        countries.push(country.country_code);
      }
  );
  console.log(typeof (JSON.stringify( countries)));
  
  
  db.end();
  res.render("index.ejs",{countries:countries,total:countries.length});
 
});


app.post("/add", async (req, res) => {
  const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database:"World",
    password:"neoray123",
    port:9977,
  
  });
  db.connect();
  console.log(typeof req.body.country,req.body.country,"llllll");
  const resolt = await db.query(
    "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%' "
    ,[req.body.country.trim().toLowerCase()]
  );
 if (resolt.rows.length !==0)
  {
    await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)",[resolt.rows[0].country_code]);
    console.log("Added");
  }
  db.end();
  res.redirect("/");
 
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});