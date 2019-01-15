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

        // find the best match
        var diff = [];

        for (i=0; friends.length; i++) {
            // subtract the values in each array
            // and push subtracted values into new array
            
            
        }
    })
};