const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {
  let url = 
      '.'+request.url
  switch( url ) {
    case './':
      sendFile( response, 'index.html' )
      break
    default:
      sendFile( response, url )
    case '/Herb Ellis & Remo Palmier - A1 Windflower (1978).mp3' :
        sendFile( response, 'Herb Ellis & Remo Palmier - A1 Windflower (1978).mp3')
      break
  }
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
   fs.readFile( filename, function( err, content ) {
     response.end( content, 'utf-8' )
   })
}
