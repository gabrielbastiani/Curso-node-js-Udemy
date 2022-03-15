const express = require("express"); //Importando o express
const app = express(); // Iniciando o express

app.get("/", function(req,res){
    res.send("Bem vindo ao Guia do Programador");
});

app.get("/blog",function(req, res){
    res.send("<h1>Bem vindo ao meu blog!</h1>");
});

app.get("/canal/youtube", function(req, res){
    res.send("Bem vindo ao meu canal!");
});

app.listen(4000,function(erro){
    if(erro){
        console.log("Ocorreu um erro");
    } else {
        console.log("Servidor iniciado com sucesso");
    }
});