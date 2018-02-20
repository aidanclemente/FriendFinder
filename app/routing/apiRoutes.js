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
    app.post("/api/friends", function(req, res) {

        console.log("body " + req.body);  
        var newFriend = req.body;

        console.log("user's Info: " + JSON.stringify(newFriend));

        console.log("--------------------");

        var newFriendResponses = newFriend.scores;

        console.log("user's Answers: " + newFriendResponses);

        // Need to add the friend finding logic


        // need to create a bestMatch object for comparision
            //set bestMatch difference to 0

        // For loop to loop through all of the friends

            // for each friend, need to loop through all of the scores to find the difference
                // "matchDifference" use the absolute value of the difference between each question scores
                // add them all together, if the matchDifference is > bestMatch difference
                    // then set the best match name = to the current friend name, same with picture, and reset the bestMatch difference to the new difference for comparison

        // Once looped through all the friends in data
            // push the newFriend data to the database to add to the friends array
            // send the user a modal with the picture and name of the best match

                //This is working
                (friendsData).push(newFriend);

    })

};