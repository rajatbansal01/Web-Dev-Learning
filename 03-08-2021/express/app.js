const express = require('express');
const app = express();
const port = 80;
const path = require('path');

// EXPRESS RELATED STUFF
app.use('/static', express.static('static'));


// PUG Specific Stuff
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// END points
app.get('/', (req, res) => {
    res.status(200).render('index.pug');
});



// Start the server
app.listen(port, ()=>{
    console.log("App is running on port: " + port);
});