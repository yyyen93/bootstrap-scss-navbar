const express = require('express');
const ejsMate = require('ejs-mate');
const path = require('path');

const app = express();
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views')); // views folder


// Express middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public'))); // static 'public' folder
app.use(express.static(path.join(__dirname, '/node_modules'))); // static 'node_modules' folder


app.get('/laws', (req,res)=>{
    res.render('source/laws');
})


app.listen(1996, ()=>{
    console.log('Express serving port 1996');
})