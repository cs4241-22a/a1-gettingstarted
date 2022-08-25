const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer(function( request,response ) {
  switch( request.url ) {
    case '/':
      sendFile( response, 'index.html' )
      break
    case '/index.html':
      sendFile( response, 'index.html' )
      break
    case '/main.css':
      sendFile(response, 'main.css')
      break
    default:
      response.end('404 Error: File Not Found' )
  }
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
   fs.readFile( filename, function( err, content ) {
     file = content
     response.end( content, 'utf-8' )
   })
}

console.log("Server Started")

/*
TODO:
*Technical* 
1. (max 5 points) Style your page using CSS. Each style rule you apply 
    will get you 1 extra point for a maximum of 5 points. 
    Be sure to describe your style rules in your README.
2. (5 points) Add a simple JavaScript animation to the page.

      -ADD Animation for sin wave and stuff after HEAD

3. (max 5 points) Experiment with other HTML tags 
    (links, images, tables etc.) Each extra tag you use will get 
    you 1 extra point for a maximum of 5 points. 
    Be sure to describe the links you use in your README.
        -Added Table


*Design*
1. (10 points) Create a color palette using 
    [color.adobe.com](https://color.adobe.com). 
    Use all the colors in the palette in your webpage by 
    implementing the appropriate CSS. Add a small screenshot 
    of the color wheel for your color palette to your repo.

    -Mint Works well, mint, white and blackbg

2. (5 points) Use a font from [Goolge Fonts](https://fonts.google.com) 
    in your website. 
    - (DONE), loaded font and applied to head
    */
