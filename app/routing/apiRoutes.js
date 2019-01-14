// imports
var friends = require("../data/friends.js");

$("#submit").on("click", function(event){
    event.preventDefault();
    console.log(req.body.q1);
});

module.exports = function(app) {

    app.get("/api/friends", function(req, res){
        res.json(friends);
    });
};