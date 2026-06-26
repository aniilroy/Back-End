import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

// Get current project directory path
const __dirname = dirname(fileURLToPath(import.meta.url));

/*
 Middleware:
 express.urlencoded() parses form data sent from HTML forms
 and stores it inside req.body.
 Without this, req.body will be undefined.
*/
app.use(express.urlencoded({ extended: true }));

// Show login page
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/login.html");
});

// Handle login form submission
app.post("/login", (req, res) => {

    // Get data from the form
    const username = req.body.username;
    const password = req.body.password;

    console.log(username);
    console.log(password);

    // Check credentials
    if (username === "anil" && password === "1234") {

        res.sendFile(__dirname + "/public/dashboard.html");

    } else {

        res.send("Invalid Username or Password");

    }

});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});