import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      type: "input",
      name: "url",
      message: "Enter a URL:",
    },
  ])
  .then((answers) => {
    const url = answers.url;

    const qr_svg = qr.image(url, { type: "png" });

    qr_svg.pipe(fs.createWriteStream("qr_image.png"));

    console.log("QR Code Generated!");
  })
  .catch((error) => {
    console.error(error);
  });