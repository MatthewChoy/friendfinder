var path = require("path");


modile.exports = function(app) {
  app.get("/survey.html", function(res, req) {
    res.sendfile(path.join(__dirname + "/../public/survey.html"));
  });
  app.use(function(req, res) {
    res.sendfile(path.join(__dirname + "/../public/home.html"));
  });
  }