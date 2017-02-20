var express = require('express');
var bodyParser = require('body-parser');  //보내온 데이터를 읽을려고해. input에서.
var fs = require('fs');
//dbㅊ처리.
var mysql = require('mysql');
var conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'l13795',
  database : 'o2'
});

console.log("successs");
conn.connect();

var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.locals.pretty = true;  //템플릿에 줄바꿈.

app.set('views', './views_mysql');
app.set('view engine', 'jade');
// app.set('view engine', 'ejs');



app.get('/topic/add', function(req, res){
  var sql = 'SELECT id,title FROM topic';
  conn.query(sql, function(err, topics_mysql, fields){
    if(err){
        console.log(err);
        res.status(500).send('Internal Server Error');  // 사용자에게 보여주는 표현
    }
    res.render('add', {topics:topics_mysql});
  });
});

//new를 통해서 글을 쓰는 부분.
app.post('/topic/add', function(req, res){
  var title = req.body.title;
  var description = req.body.description;
  var author= req.body.author;
  var sql = 'INSERT INTO topic (title, description, author) VALUES(?,?,?)';
  conn.query(sql,[title, description,author], function(err, result, fields){
    if(err){
      console.log(err);  //개발자가 보는 에러로그.
      res.status(500).send('Internal Server Error');  // 사용자에게 보여주는 표현
    }else{
      // res.send(result.insertId);
      res.redirect('/topic/'+result.insertId);
    }
  });
})

app.get(['/topic', '/topic/:id'], function(req,res){
  var sql = 'SELECT id,title FROM topic';
  conn.query(sql, function(err, topics_mysql, fields){
    //  res.send(rows);
    var id = req.params.id;
    if(id){
      var sql = 'SELECT * FROM topic WHERE id=?';
      conn.query(sql, [id], function(err, topic_mysql, fields){
        if(err){
          console.log(err);
          res.status(500).send('Internal Server Error');
        }else{
          res.render('view', {topics:topics_mysql, topic:topic_mysql[0]})
        }
      });
    }else{
      res.render('view', {topics:topics_mysql});
    }
  });
});



app.listen(3000, function(){
  console.log('Connected, 3000 port!');
})
