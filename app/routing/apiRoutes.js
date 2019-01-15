// imports
var friends = require("../data/friends.js");

module.exports = function(app) {

    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    app.post("/api/friends", function(req, res){

        // convert form data into object and add to data
        var newFriend = req.body;
        friends.push(newFriend);
        console.log("server: " + JSON.stringify(newFriend));

        var data = {
            name: "p",
            photo: "p",
            answers: ["p", "p"]
        }

        res.send(data);

    });
};