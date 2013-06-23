var http = require("http");
var server = http.createServer(function(req,res){

	res.write("<h1>Hello there, you requested for " + req.url + "</h1>");
	res.end();
});
server.listen(3000);