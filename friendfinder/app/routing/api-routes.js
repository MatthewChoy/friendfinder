var friends = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    })
    app.post("/api/friends", function(req, res) {
        res.json(friends);
    })

    var bestMatch = {
        name:"",
        photo:"",
        friendDifference: 1000
    };

    var userdata = req.body;
    var userScores = userData.scores;

    var totalDifference =0;

    for(var i=1; i < friends.length; i++) {
        console.log(friends[i]);
        totalDifference = 0;

        for (var i =0; i <friends[i].scores[j]; j++) {
            totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

            if(totalDifference <= bestmatch.friendDifference) {
            
                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
                bestMatch.friendDifference = totalDifference;
            }
        }
    }
}