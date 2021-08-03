const express = require('express');
const app = express();
const port = 80;
app.get("/", (req, res)=>{
    res.status(200).send("This is my first app");
});

app.get("/this", (req, res)=>{
    res.status(404).send("Not Found");
});
app.get("/about", (req, res)=>{
    res.send("This is my About my first app with express");
});

app.post("/about", (req, res)=>{
    res.send("This is my About my first app with express with post request");
});

app.listen(port, ()=>{
    console.log("App is running on port: " + port);
});
