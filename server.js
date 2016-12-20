var moment = require("moment");
var express = require("express");
var app = express();

app.use('', function (req, res) {
    var input = decodeURIComponent(req['path'].substring(1));
    var unix = null;
    var natural = null;
    // check if unix date or natural date
    if (moment(input, "X", true).isValid()){
        var theDate = moment(input, "X", true);
    } else if (moment(input, ["MMMM D, YYYY", "MMMM DD, YYYY"], true).isValid()){
        var theDate = moment(input, ["MMMM D, YYYY", "MMMM DD, YYYY"], true)
    }
    // if a date, format output values
    if (theDate) {
        unix = theDate.format('X');
        natural = theDate.format("MMMM D[,] YYYY");
    }
    
    // return dates
    var theDates = {
        "unix": unix,
        "natural": natural
    };
    res.send(theDates);
})

app.listen(8080, function () {
  console.log('app listening on port 8080!')
})