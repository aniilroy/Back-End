const fs=require("fs");

fs.writeFile("message.txt", "Hellow from Node JS, This file is created by using node.js in local computer by javaScript", (err)=>{

    if (err) throw err;
    console.log("File has been saved");

});