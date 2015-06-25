var express = require('express');

var bodyParser = require('body-parser');


var app = express();


app.use(bodyParser());

app.get('/', function(req, res){
  var html = '<form action="/hello" method="post">' +
               'Enter your name:' +
               '<input type="text" name="userName" placeholder=" " />' +
               '<br>'
                +'Enter your password:' +
               '<input type="password" name="pass" placeholder=" " />' +
               '<br>' +
               '<button type="submit">Submit</button>' +


     '</form>';
               
  res.send(html);
});

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'ashu',
  database : 'ashu'
});

connection.connect();

app.post('/hello',function(req,res){

    res.send('You sent the name "' + req.body.name + '".');
   var name=req.body(userName);
   var password=req.body(pass);

});







//edited
connection.end();
//app.post('/', function(req, res){
//  var userName = req.body.userName;
//  var html = 'Hello: ' + userName + '.<br>' +
//             '<a href="/">Try again.</a>';
 // res.send(html);


app.listen(8080);
