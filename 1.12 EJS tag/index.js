
import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {

    const student = "Anil Roy";

    const subjects = [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "EJS"
    ];

    const marks = 85;

    res.render("index.ejs", {
        name: student,
        skills: subjects,
        score: marks
    });

});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});