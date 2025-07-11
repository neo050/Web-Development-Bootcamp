import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
const saltRounds = 10;

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "neoray123",
  port: 9977,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

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
  const email = req.body.username;
  const password = req.body.password;

  try {
    const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (checkResult.rows.length > 0) {
      res.send("Email already exists. Try logging in.");
    } else {
      //Password Hasing
      bcrypt.hash(password,saltRounds,async (err,hash)=>
      {
        if (err)
        {
          console.log("Error hashing password:" , err);
        }
        else{
            const result = await db.query(
            "INSERT INTO users (email, password) VALUES ($1, $2)",
            [email, hash]
            );

        }
      });
   
      res.render("secrets.ejs");
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/login", async (req, res) => {
  const email = req.body.username;
  const loginPassword = req.body.password;

  try {

      const result = await db.query("SELECT * FROM users WHERE email = $1", [
        email,
      ]);
      if (result.rows.length > 0) 
      {
         console.log(result);
        const user = result.rows[0];
        const storedHashedPassword = user.password;
        bcrypt.compare(loginPassword,storedHashedPassword,(err,result)=>
        {
          if(err)
          {
            console.log("Error comparing passwords",err);
          }
          else
          {
            if(result)
            {
             
              res.render("secrets.ejs");
            }
            else
            {
              res.send("Incorrect Password");

            }

          }
        });
      } 
     else 
     {
        res.send("User not found");
     }
      
    } 
  catch (err)
  {
      console.log(err);
  }

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
