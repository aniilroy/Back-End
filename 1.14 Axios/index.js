import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", async (req, res) => {

    try {

        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        res.render("index.ejs", {
            user: response.data
        });

    } catch (error) {

        res.send("Failed to fetch data");

    }

});

app.listen(port, () => {

    console.log(`Server running on port ${port}`);

});