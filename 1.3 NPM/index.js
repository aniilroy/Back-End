//var generateName = require('sillyname');  <----CJS (Common Js)

import generateName from "sillyname";  //  <---This is EJS (Ecmascript js)

var sillyName = generateName();

console.log(`My name is : ${sillyName}.`);