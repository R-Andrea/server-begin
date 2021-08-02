const http = require('http');
const url = require('url');

console.log("react js was better") //runs when the server starts


http.createServer(function (req, res) { 
  
  console.log(req.url)
    //console.log("when does this run") //runs when the browser sends a request
 // console.log("this is the request:", req)
 // console.log("this is the response:", res)

 if (req.url === "/movies") {
    console.log("movies path")
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(`
 {
     "movies": [
         {
             "title": "Jurassic Park",
             "year": "1993"
         },
         {
             "title": "The Lord of the Rings",
             "year": "2001"
         },
     ]
 }
`);

 } else if (req.url === "/") {
    console.log("we're in home")
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`<h2>Welcome to our movies database</h2>`)
 } else {
    console.log("we're somewhere else", req.url)
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end("404 Not Found");
 }

}).listen(8080);