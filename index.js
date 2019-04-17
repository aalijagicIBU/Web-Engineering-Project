var express = require('express');
var app = express();

app.use(express.static('public'));

var port = process.env.PORT || 3000;

app.get('/library', function (req, res) {
  res.send('Welcome to your library!');
});
app.listen(port, function () {
  console.log('Example app listening on port '+port+'!');
});