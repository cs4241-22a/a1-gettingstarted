const http = require('http'),
      fs   = require('fs'),
      port = 3000

console.log( 'Server running at http://localhost:' + port + '/' )

const server = http.createServer( function( request,response ) {
  console.log("Got request for " + request.url)
  switch( request.url ) {
    case '/':
      sendFile( response, 'index.html' )
      break
    case '/index.html':
      sendFile( response, 'index.html' )
      break
      case '/main.css':
      sendFile( response, 'main.css' )
      break
    default:
      console.log(request.url + " not found")
      response.end( '404 Error: File Not Found' )
  }
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
   fs.readFile( filename, function( err, content ) {
     file = content
     response.end( content, 'utf-8' )
   })
}
