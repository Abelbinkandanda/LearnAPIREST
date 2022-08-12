//importation d'express
var express = require('express');
//initialisation du serveur
var server = express();

server.get('/', function(req,res){
    res.setHeader('Context-Type','text/htm');
    res.status(200).send('<h1>Hello server<h1>');
});
server.listen(3200, function(){
    console.log("je t'ecoute");
}); 