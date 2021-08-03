const express = require('express');
const app = express();
const port = 80;
const path = require('path');

// set the template engine as pug
app.set('view engine', 'pug');

// set the views directory
app.set('views', path.join(__dirname, 'views'));

// pug demo end point
app.get('/demo', (req, res) => {
    res.status(200).render('demo',{title:"Hello Rajat Bansal", message: "Hello there I am Rajat Bansal" });
});

// serving static files
app.use('/static', express.static('static'));

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

// Static files: the files which can be accessed directly without any request.
