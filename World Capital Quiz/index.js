import express from "express";
import bodyParser from "body-parser";
import  pg from "pg";


const app = express();
const port = 3000;

let quiz= [] ;
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database:"World",
  password:"neoray123",
  port:9977,

});
db.connect();
db.query("SELECT * FROM capitals",(err,res)=>
  {
  if(err)
  {
    console.error("ERROR exeuting query",err.stack);
  }
  else
  {
    quiz=res.rows;
  }
  db.end();
});

let totalCorrect = 0;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentQuestion = {};

// GET home page
app.get("/", async (req, res) => {
  totalCorrect = 0;
  await nextQuestion();
  console.log(currentQuestion,"lol");
  res.render("index.ejs", { question: currentQuestion });
});

// POST a new post
app.post("/submit", async (req, res) => {
  let answer = req.body.answer.trim();
  let isCorrect = false;
  if (currentQuestion.capital.toLowerCase() === answer.toLowerCase()) {
    totalCorrect++;
    console.log(totalCorrect);
    isCorrect = true;
  }

  await nextQuestion();
  res.render("index.ejs", {
    question: currentQuestion,
    wasCorrect: isCorrect,
    totalScore: totalCorrect,
  });
});

async function nextQuestion() {
  const randomCountry = quiz.pop();
  //[Math.floor(Math.random() * quiz.length)];
  currentQuestion = randomCountry;
}

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
