// Your apiRoutes.js file should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var friendsData = require ("../data/friends.js");

// List Friends Data
module.exports = function (app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    // Add New Friend
    app.post("/api/friends", function(req,res) {

        console.log(req.body);
        var newFriend = req.body;

        console.log("user's Info: " + JSON.stringify(newFriend));

        var newFriendResponses = newFriend.scores;

        console.log("user's Answers: " + newFriendResponses)
    })

};