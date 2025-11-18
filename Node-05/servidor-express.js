const express = require("express");
const app = express();

app.get("/", function(req, res){
    //res.send("<h1>Seja bem vindo!<h1>");
    res.sendFile(__dirname+"/html/index.html");
});

app.get("/sobre", function(req, res){
    //res.send("<h1> Sobre <h1>");
    res.sendFile(__dirname+"/html/sobre.html");
});

// npm install nodemon -g

app.get("/cliente/:nome/:idade/:cidade", function(req, res){
    //res.send(req.params);
   
    res.send("<h1> Dados do Cliente</h1><hr>"+
             "Cliente: "+req.params.nome+
             "<br>Idade: "+req.params.idade+
             "<br>Cidade:"+req.params.cidade
    );
   
});



app.listen(8081, function(){
    console.log("Servidor rodando em localhost:8081");
});