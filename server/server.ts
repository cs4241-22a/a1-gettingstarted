const http = require('http'),
	fs   = require('fs'),
	port = 3000;

const server = http.createServer( function( request,response ) {
	console.log(`Received request for ${request.url}`);

	switch(request.url) {
		case '/':
			sendFile(response, './client/index.html');
			break;
		default:
			sendFile(response, `./client${request.url}`);
			break;
	}
})

server.listen( process.env.PORT || port );

console.log(`Listening on port ${port}...\n`);

const sendFile = function( response, filename ) {
	fs.readFile( filename, function( err, content ) {
		response.end( content, 'utf-8' );
	})
}
