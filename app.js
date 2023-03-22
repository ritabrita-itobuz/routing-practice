var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req, res){
    console.log("A request was made: " + req.url);
    if(req.url === "/home" || req.url === "/")
        {
            res.writeHead(200, {"Content-Type": "text/html"});
            fs.createReadStream(__dirname + "/index.html").pipe(res);
        }
    if(req.url === "/contacts")
        {
            res.writeHead(200, {"Content-Type": "text/html"});
            fs.createReadStream(__dirname + "/contacts.html").pipe(res);
        }
    })

    server.listen(3000, "127.0.0.1");
    console.log("listening to the port 3000");