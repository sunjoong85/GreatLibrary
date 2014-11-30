/**
 * Created by kimsunjoong on 2014. 11. 8..
 */
var express = require('express');
var path = require('path');


var app = express();
var ctx = "";

app.use(express.static(__dirname + '/resources'));
//app.use(express.static(path.join(__dirname,'../client/dist')));

app.get('/', function (req, res) {
    console.log("/")
    res.redirect('/index.html');
});

var server = app.listen(3000, function () {

    var host = server.address().address
    var port = server.address().port

    console.log('Angular Pilot app listening at http://%s:%s', host, port)
});

//User Defined Controller
require("./login/loginController.js")(app, ctx);