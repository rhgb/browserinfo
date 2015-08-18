var argv = require('minimist')(process.argv.slice(2));

var app = require('./app');
var port = argv.port || 3000;
var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('app listening at http://%s:%s', host, port);
});