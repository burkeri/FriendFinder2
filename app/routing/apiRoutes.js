// imports
var friends = require("../data/friends.js");

module.exports = function(app) {

    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    app.post("/api/friends", function(req, res){

        // create new object from data passed from form
        var newFriend = {
            name: req.body.name,
            photo: req.body.photo,
            answers: []
        }

        // loop through the answers from the form,
        // convert them to numbers and
        // push them to the newFriend object
        for (i=0; i<=9; i++) {
            var val = parseFloat(req.body.answers[i]);
            newFriend.answers.push(val);
        }
        
        // add the new friend to the existing data
        friends.push(newFriend);

        // *********************************

        // add all the values in the answers array and 
        // push those sums to a new array
        var sum = [];

        function addArray (a, b) {
            return a + b;
        }

        for (i=0; i < friends.length; i++) {
            console.log(friends[i].answers);
            sum.push(friends[i].answers.reduce(addArray)); 
        }

        console.log(sum);

        // subtract the sum of newewst entry in friends
        // from the sum of every other entry in friends
        var diff = [];
        
        for (i=0; i < sum.length-1; i++) {
            diff.push(Math.abs(sum[(sum.length-1)] - sum[i]));
        }

        console.log(diff);

        // find the smallest number in diff and 
        // save the index of the smallest number
        var best = diff.lastIndexOf(Math.min(...diff));

        // the best match is at the index of best
        console.log(friends[best]);
        
        // *********************************

        // best match!
        var data = {
            name: friends[best].name,
            photo: friends[best].photo,
            answers: friends[best].answers
        }

        res.send(data);

    });
};