const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {
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
    case '/lettuce.png':
      sendFile( response, 'lettuce.png' )
      break
    case '/mainerobotics.png':
      sendFile( response, 'mainerobotics.png' )
      break
    case '/wpilogo.png':
      sendFile( response, 'wpilogo.png' )
      break
    case '/simplisafe.png':
      sendFile( response, 'simplisafe.png' )
      break
    default:
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
