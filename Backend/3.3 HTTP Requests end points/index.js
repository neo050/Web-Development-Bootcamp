import express from "express";

const app = express();

const port = 3000;

app.listen(port,()=>{
    console.log(`Server is up and runing on port ${port}`);
});

app.get("/",(req,res)=>{
    res.send("<h1>Hello from the end</h1>");
});

app.get("/contact",(req,res)=>{
    res.send("<h1>phone: +972502829183<br>Email: neoray.asking666@gmail.com <br> </h1>");
});

app.get("/about",(req,res)=>{
    res.send("<h1>Neoray Hagag: Bachelor's Degree in Software Engineering 25 years old <br> </h1>");
});