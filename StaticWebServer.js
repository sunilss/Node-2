var http = require("http"),
	fs = require("fs");
var server = http.createServer(function(req,res){
	fs.createReadStream(req.url).pipe(res);
});
server.listen(3000);