var express = require('express')
var app = express()

var PORT = process.envPORT || 8080;



var bodyParser = require('body-parser')


var urlencodedParser = bodyParser.urlencoded({ extended: true })

app.use(bodyParser.json({ type: 'application/*+json'}))

app.use(bodyParser.raw({ type: "application/vnd.custom-type"}))


app.use(bodyParser.text({ type: 'text/html'}))
require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);


app.listen( PORT, function() {
    console.log("app.listening on PORT: " + PORT);
})