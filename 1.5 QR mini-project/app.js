
import express from "express";

import qr from "qr-image";

const app = express();

const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>QR Generator</title>
      <style>
        body{
          font-family: Arial, sans-serif;
          text-align:center;
          margin-top:100px;
        }

        input{
          width:300px;
          padding:10px;
        }

        button{
          padding:10px 20px;
          cursor:pointer;
        }
      </style>
    </head>
    <body>
      <h1>QR Code Generator</h1>

      <form action="/generate" method="POST">
        <input
          type="text"
          name="url"
          placeholder="Enter URL"
          required
        >
        <button type="submit">
          Generate QR
        </button>
      </form>
    </body>
    </html>
  `);
});

app.post("/generate", (req, res) => {
  const url = req.body.url;

  const qrCode = qr.image(url, {
    type: "png"
  });

  res.type("png");
  qrCode.pipe(res);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
