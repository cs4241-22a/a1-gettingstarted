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
    case '/style.css':
      sendFile(response, 'style.css')
      break
    case '/profile.jpg':
      sendFile(response, 'profile.jpg')
      break
    case '/https://fonts.googleapis.com/css?family=Quicksand':
      sendFile(response, 'https://fonts.googleapis.com/css?family=Quicksand')
      break;
    case '/server.js':
      sendFile(response, 'server.js')
      break;
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


function welcomeText(id)
{
  const text = ["W", "E", "L", "C", "O", "M", "E", " ", "T", "O", " ", "M", "Y", " ", "P", "A", "G", "E", "!"];
  i=0;

  function loop()
  {
    setTimeout(function() {
      id.innerHTML = id.innerHTML + text[i]; i++; 
      if(i<19) {
        loop();
      }
    }, 250)
  }

  loop();
}


