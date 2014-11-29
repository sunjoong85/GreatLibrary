module.exports = function (app, context) {

    app.post(context + '/login', function (req, res) {
        console.log('login');

        var result = {
            success : "login sucess"
        }

        return   res.send(JSON.stringify(result));
    });
};