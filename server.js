//jshint esversion:6

// 1. require the module
const express = require('express');
// 2. create variable that we can call methods on
const app = express();

//GET request => HOME route
app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
});

//GET request => CONTACT route
app.get("/contact", (req, res) => {
    res.send("<h2>You can contact me at averyyang2674@gmail.com!</h2>");
});

//GET request => ABOUT route
app.get("/about", (req, res) => {
    res.send("<h2>Hi I'm Avery! 👋🏽 I'm 29 years old and love to code!⌨️ </h2>");
});

//this logs the message when the server starts
app.listen(3000, function () {
    console.log('Server started on port 3000');
});