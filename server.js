const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {
  let temp = request.url.substring(1)
  if (temp === "main.css"){
    sendFile( response, "main.css" )
  } else {
    sendFile( response, "index.html" )
  }
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
   fs.readFile( filename, function( err, content ) {
     response.end( content, 'utf-8' )
   })
}
