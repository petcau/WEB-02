const express = require("express");
const app = express();


// Isso libera a pasta /img para que o navegador consiga carregar as fotos.
app.use('/img', express.static(__dirname+'/img'));


// Página inicial com a lista de clientes
app.get("/", function(req, res){
    res.sendFile(__dirname+ "/html/index.html");
});

// Rota única que carrega pessoa.html
app.get("/pessoa/:nome/:idade/:cidade", function(req, res){
    res.sendFile(__dirname+ "/html/pessoa.html");
});

// Porta do servidor
app.listen(8081, function(){
    console.log("Servidor rodando em http://localhost:8081");
});
