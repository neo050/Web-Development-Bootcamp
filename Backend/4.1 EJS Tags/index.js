import express from "express";
const app = express();
const port = 3000;
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
app.get("/", (req, res) => {
  const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent: "<strong>This is some strong text</strong>",
  };
  res.render(__dirname+"/views/index.ejs", data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
