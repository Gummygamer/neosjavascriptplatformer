var http = require('http');
var pos = require('./pos');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var actstr = req.url;
  
  switch(actstr) {
	  case "/moveright":
	     res.end(pos.moveRight());
		 break;
	  case "/moveleft":
         res.end(pos.moveLeft());
		 break;
	  default:
	     res.end(pos.fetchCoord());
		 break;
  }
  
}).listen(process.env.PORT);
