/**
 * Created by kimsunjoong on 2014. 11. 8..
 */
var express = require('express')
var app = express()

app.use(express.static(__dirname + '/resources'));


app.get('/', function (req, res) {
    console.log("/")
    res.redirect('/index.html');
});

app.post('/login', function (req, res) {
    console.log('login');

    var result = {
        success : "login sucess"
    }

    return   res.send(JSON.stringify(result));
});

var server = app.listen(3000, function () {

    var host = server.address().address
    var port = server.address().port

    console.log('Angular Pilot app listening at http://%s:%s', host, port)
});