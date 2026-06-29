
import express from "express";

import axios from "axios";

import dotenv from "dotenv";

dotenv.config();

const app = express();

const port = 3000;

app.set("view engine", "ejs");

app.get("/", async (req, res) => {

    const apiKey = process.env.API_KEY;

    res.render("index.ejs", {
        key: apiKey
    });

});

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});