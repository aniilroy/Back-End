import express from "express";
import qr from "qr-image";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.post("/generate", (req, res) => {

  const { text } = req.body;

  if (!text) {
    return res.status(400).json({
      error: "Text is required"
    });
  }


const qrPng = qr.imageSync(text, {
  type: "png"
});

const qrBase64 =
  "data:image/png;base64," +
  qrPng.toString("base64");



  res.json({
    qr: qrBase64
  });

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});