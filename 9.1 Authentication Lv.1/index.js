import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database:"secrets",
    password:"neoray123",
    port:9977,
  
  });
  db.connect();

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username
  const password = req.body.password
  try{
    await db.query("INSERT INTO users (email,password) VALUES ($1,$2)",[email,password]);
    res.render("secrets.ejs");

  }
  catch(err)
  {
    console.log(err);
    res.render("register.ejs",{msg:"Authentication failed. The email address is probably already in use."});

  }
 
});

app.post("/login", async (req, res) => {

  const email = req.body.username
  const password = req.body.password
  try{
    if((await db.query("SELECT email FROM  users WHERE email = $1 AND password = $2  ",[email,password])).rows.length > 0)
    {
        res.render("secrets.ejs");
    }
    else{
      res.render("login.ejs",{msg:"Authentication failed. Username or password is incorrect."});
    }
  }
  catch(err)
  {
    console.log(err);
    res.render("login.ejs",{ msg: "Something went wrong. Please try again later."});

  }

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
