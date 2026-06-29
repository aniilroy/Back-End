import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const port = process.env.PORT;

app.set("view engine", "ejs");

app.get("/", async (req, res) => {

    try {

        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users",
            {
                headers: {
                    "X-API-Key": process.env.API_KEY
                }
            }
        );

        res.render("index.ejs", {
            users: response.data,
            apiKey: process.env.API_KEY
        });

    } catch (error) {

        console.log(error.message);

        res.send("Failed to fetch users");

    }

});

app.listen(port, () => {

    console.log(`Server running on port ${port}`);

});