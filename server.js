const http = require('http'), fs = require('fs'), port = 3000;
const server = http.createServer(function (request, response) {
    console.log(`Received request for ${request.url}`);
    switch (request.url) {
        case '/':
            sendFile(response, 'index.html');
            break;
        case '/index.html':
            sendFile(response, 'index.html');
            break;
        case '/styles.css':
            sendFile(response, 'styles.css');
            break;
        default:
            response.end('404 Error: File Not Found');
    }
});
server.listen(process.env.PORT || port);
console.log(`Listening on port ${port}...\n`);
const sendFile = function (response, filename) {
    fs.readFile(filename, function (err, content) {
        file = content; // TODO: Why?
        response.end(content, 'utf-8');
    });
};
