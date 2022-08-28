const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {
  const url = '.' + request.url
  // const _url = request.url.slice(1) // for not needing the .
  switch( url ) {
    case './':
      sendFile( response, 'index.html' )
      break
    default:
      sendFile( response, url )
  }
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
   fs.readFile( filename, function( err, content ) {
     response.end( content, 'utf-8' )
   })
}
