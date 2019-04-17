var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/library', function (req, res) {
  res.send('Welcome to your library!');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});