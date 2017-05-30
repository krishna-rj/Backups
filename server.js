var express = require('express');
var app = express();
var request = require("request");
var path = require('path');


app.use(express.static(path.join(__dirname, 'public/home')));
console.log(__dirname)
app.get('/:card', function(req, res, next) {

    var card1 = req.params.card;

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    console.log("https://devcdb.retailsso.com/customers/getticketinfo/" + card1)
    request({
        url: "https://devcdb.retailsso.com/customers/getticketinfo/" + card1,
        json: true
    }, function(error, response, body) {

        res.send(body);
    })

});

app.listen(80);