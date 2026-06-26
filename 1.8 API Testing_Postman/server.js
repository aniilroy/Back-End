import express from "express";

const app = express();

const port = 3000;

app.get("/", (req, res)=>{

    res.send("Hello World");

});

app.post("/register", (req, res)=>{
    res.sendStatus(201);
});

app.put("/user/anil", (req, res)=>{
    res.sendStatus(200);
});

app.patch("/user/anil", (req, res)=>{

    res.sendStatus(200);
})
;

app.delete("/user/anil", (req, res)=>{

    res.sendStatus(200);
});

app.listen(port, ()=>{

    console.log(`The server running on port ${port}`);
})