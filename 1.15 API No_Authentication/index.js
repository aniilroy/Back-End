import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", async (req, res) => {

    try {

        const response = await axios.get(
            "https://official-joke-api.appspot.com/random_joke"
        );

        res.render("index.ejs", {
            joke: response.data
        });

    } catch (error) {

        console.log(error.message);

        res.send("Failed to fetch joke");

    }

});

app.listen(port, () => {

    console.log(`Server running on port ${port}`);

});