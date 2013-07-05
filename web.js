/*

var express = require('express');

var app = express.createServer(express.logger());
fs = require ('fs');
fs.readFileSync('/home/ubuntu/bitstarter/index.html', 'utf8', funtion (err,data) {
    if (err)  {
return console.log(err);

}
console.log(data);

});
    

app.get('/', function(request, response) {
   response.send(data);
};
ar port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + );
OBOBBBBOBOBBBBOD
*/

/*8r express = require('express');

var app = express.createServer(express.logger());
fs = require ('fs');
fs.readFileSync('/home/ubuntu/bitstarter/index.html', 'utf8', funtion (err,data) {
    if (err)  {
return console.log(err);

}
console.log(data);

});


app.get('/', function(request, response) {
   response.send(data);
};

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + );
OBOBBBBOBOBBBBOD
*/

var fs = require("fs");
var fileName = "index.html";
fs.exists(fileName, function(exists) {
  if (exists) {
    fs.stat(fileName, function(error, stats) {
      fs.open(fileName, "r", function(error, fd) {
        var buffer = new Buffer(stats.size);
        fs.read(fd, buffer, 0, buffer.length, null, function(error, bytesRead, buffer) {
          var data = buffer.toString("utf8", 0, buffer.length);
          console.log(data);
          fs.close(fd);
        });
      });
    });
  }
});
