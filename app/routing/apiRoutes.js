// Your apiRoutes.js file should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var friendsData = require ("../data/friends.js");

// Get Request to List Friends Data
module.exports = function (app) {

    // All of the friends in friendsArray
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    // Post Request to Add New Friend to friendsArray
    app.post("/api/friends", function(req, res) {

        // This is being printed on the terminal console as [object object]
        // This is the information being sent from the front, this means the front and back are talking
        console.log("Request body saved as newFriend " + req.body);  
        var newFriend = req.body;

        console.log("--------------------");

        // This is being printed on the terminal console showing the strings in the object
        console.log("This is newFriend stringified: " + JSON.stringify(newFriend));

        console.log("--------------------");

        var newFriendResponses = newFriend.scores;

        // Printing on terminal console 1,1,1,1,1,1,1,1,1,1
        console.log("these are the Answers: " + newFriendResponses);

        // Need to add the friend finding logic
        var bestMatch = {
            name: "AIDAN",
            photo: "",

            // It has to be a really high number because we will be matching with the friend with the lowest difference
            bestMatchDifference: 500
        };

        console.log("the bestMatch object: aaaaa " + JSON.stringify(bestMatch));

        var diffCounter = 0;
        
        // need to create a bestMatch object for comparision
            //set bestMatch difference to 0
        for (var i = 0; i < friendsData.length; i++) {
            // we run through all of the friends in the array 

            // reseting the diffCounter at the start of each friend
            diffCounter = 0;

            for (let k = 0; k < friendsData[i].scores.length; k++) {
                
                console.log("Friend Checking: " + friendsData[i].name);
                //here we are going through the scores to find the difference
            
               diffCounter += Math.abs(parseInt(friendsData[i].scores[k]) - parseInt(newFriendResponses[i]))
                console.log("from the for loop: difference counter " + diffCounter);

                // need to save the diffCounter in bestMatch difference
                // then reset the diffCounter = 0 before starting the next friend
                // if the bestMatch difference is less than the diffCounter, then replace the bestMatch information of the

                if (bestMatch.bestMatchDifference > diffCounter) {

                    // Then replace the name, photo and difference with the current friend
                    bestMatch.name = friendsData[i].name;
                    bestMatch.photo = friendsData[i].photo;
                    bestMatch.bestMatchDifference = diffCounter;

                    console.log("This is the current best match " + JSON.stringify(bestMatch));
                }
            }
            
        }
        // For loop to loop through all of the friends

            // for each friend, need to loop through all of the scores to find the difference
                // "matchDifference" use the absolute value of the difference between each question scores
                // add them all together, if the matchDifference is > bestMatch difference
                    // then set the best match name = to the current friend name, same with picture, and reset the bestMatch difference to the new difference for comparison

        // Once looped through all the friends in data
            // push the newFriend data to the database to add to the friends array
            // send the user a modal with the picture and name of the best match

            // *** NEED TO LOOK INTO MODALS!!! ***

                //This is working
                (friendsData).push(newFriend);

                // Send bestMatch object back to survey.html post request 
                res.json(bestMatch);

    })

};