const http = require('http');
const fs = require("fs");
const fileContent = fs.readFileSync("29-05-2021\\21_c.html")
const server = http.createServer((req, res)=>{
    res.writeHead(200, {'content-type':'text/html'});
    res.end(fileContent)
})

server.listen(80, "127.0.0.1", ()=>{
    console.log("Listening to port 80")
})

