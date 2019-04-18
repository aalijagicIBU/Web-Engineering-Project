var express = require('express');
var mongojs = require('mongojs')

var app = express();

app.use(express.static('public'));

var port = process.env.PORT || 3000;
var connectionString = "mongodb://library-user:library-user@library-app-shard-00-00-7kcfr.mongodb.net:27017,library-app-shard-00-01-7kcfr.mongodb.net:27017,library-app-shard-00-02-7kcfr.mongodb.net:27017/library-database?ssl=true&replicaSet=library-app-shard-0&authSource=admin&retryWrites=true";
var db = mongojs(connectionString, ["books"])

app.get('/library', function (req, res) {
  res.send('Welcome to your library!');
});

app.get('/books', function (req, res) {
  books_list = [
    {title:"Count of Monte Cristo", author:"Alexandar Dumas", publisher:"Vulkan"},
    {title:"Harry Potter", author:"J.K.Rowling", publisher:"Algoritam"},
    {title:"The Greatest Salesman in the World", author:"Og Mandino", publisher:"Laguna"}
  ];

  db.books.find(function (err, docs) {
    res.send(docs);
  })

});

app.listen(port, function () {
  console.log('Example app listening on port '+port+'!');
});