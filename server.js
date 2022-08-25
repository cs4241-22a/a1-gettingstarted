var http = require('http'), fs = require('fs'), port = 3000;
var server = http.createServer(function (request, response) {
    console.log("Received request for ".concat(request.url));
    switch (request.url) {
        case '/':
            sendFile(response, 'index.html');
            break;
        case '/index.html':
            sendFile(response, 'index.html');
            break;
        default:
            response.end('404 Error: File Not Found');
    }
});
server.listen(process.env.PORT || port);
console.log("Listening on port ".concat(port, "...\n"));
var sendFile = function (response, filename) {
    fs.readFile(filename, function (err, content) {
        file = content; // TODO: Why?
        response.end(content, 'utf-8');
    });
};
