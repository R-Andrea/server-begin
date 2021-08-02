const http = require('http');
const url = require('url');
var fs = require('fs');

http.createServer(function (req, res) { 
    var q = url.parse(req.url, true);

    console.log(q.pathname)

    if (q.pathname === "/"){
        fs.readFile('index.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
          });
    } else if (q.pathname === "/movies") {
        fs.readFile("data.json", function(err, data) {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write(data);
            return res.end();
        } )
    } else {
        fs.readFile("404.html", function(err, data) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        })
    }


}).listen(8080);