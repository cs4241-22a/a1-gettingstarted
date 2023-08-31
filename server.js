const http = require('http'),
      fs   = require('fs')

const server = http.createServer( (request,response) => {
  const url = request.url.slice(1)
  switch( url ) {
    case '':
      sendFile('index.html', response); break; 
    default:
      sendFile(url, response); break;
  }
})
.listen(3000)

const sendFile = function( filename, response ) {
  fs.readFile( filename, (error, content) => {
     if( error !== null ) {
       response.end( 'file not found.')
     }else{
       response.end( content, 'utf-8' ) 
     }
  })
}
