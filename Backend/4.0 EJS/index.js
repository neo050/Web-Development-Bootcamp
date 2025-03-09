//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming


import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

let daytype="weekend";
let adv ="time to enjoy!";

app.get("/", (req, res) => {

  const day =new Date().getDay();
  console.log(day);
  if(day>=4)
  {
    
    daytype="weekend";
    adv ="time to enjoy!";
  }
  else
  {
      
      daytype="weekday";
      adv="you have to work hard!";
  }

  res.render(__dirname+"/views/index.ejs",{daytype:daytype,adv:adv});
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  



