
import express from "express";

import path from "path";

const app = express()

const port = 3000;

app.get("/", (req, res)=>{

    res.sendFile("index.html", { root: "./public" });
});

app.get("/about", (req,res)=>{
   res.send("<h1>About Page From server.</h1>");
});

app.get("/contact", (req,res)=>{
   res.send("<h1>Hi, My name is Anil</h1><p>My address: Jalpaiguri, Contact is : 7047419282</p>");
});


app.listen(port, ()=>{

    console.log(`Server started on port ${port}.`);

})