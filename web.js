var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    buf = new Buffer(256); 
  fs.readFileSync('index.html', buf.toString('utf8', 0, len));
	response.send('index.html');
};

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
