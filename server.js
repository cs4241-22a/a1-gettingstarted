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
      case '/mystyles.css':
        sendFile( response, 'mystyles.css' )
        break
        case '/happysmiley.png':
        sendFile( response, 'happysmiley.png' )
        break
        case '/peace.png':
        sendFile( response, 'peace.png' )
        break
        case '/smallstar.png':
        sendFile( response, 'smallstar.png' )
        break
        case '/star.png':
        sendFile( response, 'star.png' )
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
