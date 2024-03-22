var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());

var morgan = require('morgan');
app.use(morgan('combined'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

var formidable = require('formidable');
app.post('/subtraction', cors(), function (request, response) {
  if (request.method.toLowerCase() == 'post') { 
    var form = new formidable.IncomingForm();
    form.parse(request, function (err, fields) {
      var x = Number(fields.x),
          y = Number(fields.y),
        result = x - y;
	    response.header("Access-Control-Allow-Origin", "*");
      response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.end('{ "result": ' + result + '}');
    });
  }
});

var listener = app.listen(process.env.PORT || 8080, function() {
 console.log('listening on port ' + listener.address().port);
});