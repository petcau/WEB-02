const express = require("express");
const app = express();
//1
app.get("/bemvindo", (req, res) => {
    res.send('<h1 style = "background-color: #ff0000";>Bem-Vindo</h1>')
})

//2
app.get("/mensagem/:texto", function (req, res) {
    res.send("<h1>Mensagem: </h1><hr>" +
        "<h2>texto: " + req.params.texto + "</h2>"
    )
})

//3
app.get("/dobro/:numero", function (req, res) {
    let n = parseFloat(req.params.numero) * 2
    res.send("o dobro de "+req.params.numero+ " e: " + n)
})

/*
4 Crie uma rota /idade/:anoNascimento

Calcule a idade da pessoa com base no ano de nascimento enviado como parâmetro.
*/
app.get("/idade/:anoNascimento", function(req, res){
  let anoAtual = new Date().getFullYear();
  let idade = anoAtual - req.params.anoNascimento;
  res.send("A idade da pessoa é de "+idade + " anos")
})

/*
5. Crie uma rota /saudacao/:nome/:periodo

O período pode ser: manha, tarde ou noite.
Retorne:

Bom dia, NOME!
Boa tarde, NOME!
Boa noite, NOME!
*/
app.get("/Saudacao/:nome/:periodo", function(req,res) {
    if(req.params.periodo== "dia"){
        res.send("<h1>Bom "+req.params.periodo+", "+req.params.nome+"!</h1>")}
    else{
        res.send("<h1>Boa "+req.params.periodo+", "+req.params.nome+"!</h1>")}

    
})

/*
6. Crie uma rota /tabuada/:numero

A rota deve exibir a tabuada do número de 1 a 10, montada com HTML simples.
*/
app.get("/tabuada/:numero",function(req,res){
    let n = parseFloat(req.params.numero)
    let tabuada = "<br>";
    for(let i=1;i<=10;i++){
        tabuada += n+"x"+i+"="+n*i +"<br>"

    }
    res.send("<h1> tabuada: "+tabuada+"</h1>")
})

/*
7. Crie uma rota /usuario/:nome/:idade/:cidade

Retorne um mini cartão HTML com:

<h1>Perfil</h1>
Nome:
Idade:
Cidade:
*/
app.get ("/usuario/:nome/:idade/:cidade", (req, res) =>{
    res.send("<h1>Perfil</h1><br>"+"<h2>nome: "+
        req.params.nome+"</h2>"+"<h2>idade: "+
        req.params.idade+"</h2>"+"<h2>cidade: "+
        req.params.cidade+"</h2>"
    )
})

app.listen(8081, () => {
    console.log("Ta funcionando")
})