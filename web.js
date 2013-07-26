fs = require('fs');
var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {

 var buffer = new Buffer(16);
 var fl = fs.readFileSync('index.html','utf-8');
 console.log(fl);
 buffer.write(fl, "utf-8");
  response.send(fl);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
