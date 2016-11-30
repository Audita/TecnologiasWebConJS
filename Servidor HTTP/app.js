var express = require('express');
var app = express();
var puerto =5050;

app.get('/TecnologiasWeb?', function (req, res) {
  res.send('Con Javascript');
});

app.post('/TecnologiasWeb', function (req, res) {
  res.send('Con Post');
});

app.listen(puerto, function () {
  console.log('Example app listening on port'+puerto);
});