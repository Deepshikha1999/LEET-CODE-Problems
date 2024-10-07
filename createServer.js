var http = require('http')

http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/plain'});
    console.log(req.url)
    console.log(req.me)
    res.write("Server 8080 is : ")
    res.end('Running');
}).listen(8080);

