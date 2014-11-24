/**
 * Created by kimsunjoong on 2014. 11. 8..
 */
var express = require('express')
var app = express()

app.use(express.static(__dirname + '/resources'));

app.get('/', function (req, res) {
    res.redirect('index.html');
});

var server = app.listen(3000, function () {

    var host = server.address().address
    var port = server.address().port

    console.log('Angular Pilot app listening at http://%s:%s', host, port)
});