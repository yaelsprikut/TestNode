
/* This code creates a mini server which sends a message in every case, regardless of the page requested and is launched on the 8080 port */

var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(req, res) {
    var params = querystring.parse(url.parse(req.url).query);
    res.writeHead(200, {"Content-Type": "text/plain"});
    if ('firstname' in params && 'lastname' in params) {
        res.write('Your name is ' + params['firstname'] + ' ' + params['lastname']);
    }
    else {
        res.write('You do have a first name and a last name, don\'t you?');
    }
    res.end();
});
server.listen(8080);

/* A CALLBACK function can be defined beforehand in a variable and transmit this variable to createServer() 
   The callback function takes on 2 settings: req - the visitor's request and res - response to the visitor.
   Code 200 = Successful HTTP request.
*/

