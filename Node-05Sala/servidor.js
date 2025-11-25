const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname+"/html/index.html")
})

app.get("/sobre", function(req, res){
    res.sendFile(__dirname+"/html/sobre.html")
})

app.get("/aluno/:nome/:cidade/:idade", function(req, res){
    res.send("<h1> Dados do Aluno</h1><hr>"+
             "Nome: "+req.params.nome+
             "<br>Cidade: "+req.params.cidade+
             "<br>Idade: "+req.params.idade
    )
})


app.listen(8081, function(){
    console.log("Servidor Rodando em localhost:8081");
})