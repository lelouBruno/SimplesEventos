//requisitando modulos

var express = require('express');
var mongoose = require('mongoose');
var app = express();


//body parser

bodyParser = require('body-parser');
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

//conectando ao banco MongoDb

mongoose.connect('mongodb://codmaster:lelou!45@ds247759.mlab.com:47759/nblognode'); 

//impórtando schema

var Post = require('./models/post'); 

//importando rotas

var postagem = require('./routes/postagem');
app.use(postagem);

//levantando o servidor

var porta = 12345;

app.listen(porta, console.log("api de eventos rodando na porta: " + porta));

