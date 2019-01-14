// dependencies
var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

// server
app.listen(PORT, function(){
    console.log("listening on... " + PORT);
});