'use strict';

var path = require('path');
//var controllers = require(path.join(__dirname, 'controllers', 'index.js'));
//var models = require(path.join(__dirname, 'models', 'index.js'));

module.exports = function (app) {
  app.get('/',function  (req,res){
    res.render('otherway')
  });
  app.get('/test',function  (req,res){
    res.render('test')
  });
  app.get('/index',function  (req,res){
    res.render('index')
  })
}