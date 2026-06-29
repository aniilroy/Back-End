
import express from "express";

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View Engine
app.set("view engine", "ejs");

// Sample Data
let students = [
  {
    id: 1,
    name: "Anil Roy",
    course: "BCA",
  },
  {
    id: 2,
    name: "Rahul",
    course: "MCA",
  },
];

// Home Route
app.get("/", (req, res) => {
  res.render("index.ejs", {
    students,
  });
});

// GET All Students API
app.get("/students", (req, res) => {
  res.json(students);
});

// CREATE Student
app.post("/students", (req, res) => {
  const newStudent = {
    id: Date.now(),
    name: req.body.name,
    course: req.body.course,
  };

  students.push(newStudent);

  res.redirect("/");
});

// UPDATE Student
app.post("/update/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const student = students.find(
    (student) => student.id === id
  );

  if (!student) {
    return res.status(404).send("Student not found");
  }

  student.name = req.body.name;
  student.course = req.body.course;

  res.redirect("/");
});

// DELETE Student
app.post("/delete/:id", (req, res) => {
  const id = parseInt(req.params.id);

  students = students.filter(
    (student) => student.id !== id
  );

  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});