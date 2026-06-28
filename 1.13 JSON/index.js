
import express from "express";
import student from "./data.js";

const app = express();
const port = 3000;

// Home Page
app.get("/", (req, res) => {

    res.render("index.ejs", {
        student
    });

});

// JSON Route
app.get("/api/student", (req, res) => {

    res.json(student);

});

// Stringify Route
app.get("/stringify", (req, res) => {

    const jsonData = JSON.stringify(student);

    res.send(jsonData);

});

// Parse Route
app.get("/parse", (req, res) => {

    const jsonText =
        '{"name":"Anil","course":"BCA","age":22}';

    const obj = JSON.parse(jsonText);

    res.send(`
        Name: ${obj.name}<br>
        Course: ${obj.course}<br>
        Age: ${obj.age}
    `);

});

app.listen(port, () => {

    console.log(`Server running on port ${port}`);

});