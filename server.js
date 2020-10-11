var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();
const path = require('path');
app.use(express.static(__dirname+'/public'));
// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname+'/home.html'));
});
app.get("/room", (req, res) => {
    res.sendFile(path.join(__dirname+'/room.html'));
});
app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname+'/register.html'));
});
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname+'/login.html'));
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);