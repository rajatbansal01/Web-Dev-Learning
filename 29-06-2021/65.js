// Synchronous or Blocking 
// Asynchronous or non-blocking 

const fs = require("fs");
fs.readFile("29-06-2021\\sample.txt", "utf-8", (err, data)=>
{
    console.log(err,data);
});
console.log("This is a message");



