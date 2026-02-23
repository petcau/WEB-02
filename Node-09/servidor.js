const express = require("express");
const app = express()


const banco = require("pg")
const client = new banco.Client({
    connectionString: "postgresql://postgres.tjqjpopdzojijsimayvl:aula2025web2@aws-1-us-east-2.pooler.supabase.com:5432/postgres",
    ssl: { rejectUnauthorized: false }
});

client.connect(err => {
    if (err) {
        console.error("Erro ao conectar com o banco de dados: ", err.stack);
    } else {
        console.log("Banco Conectado");
    }
});

app.get("/", function (req, res) {
    res.send("Sistema de Alunos");
})

app.get("/estudante", async function (req, res) {
    try {
        let result = await client.query("SELECT * FROM ESTUDANTES")
        let lista = "";
        result.rows.forEach((estudantes) => {
            lista += `${estudantes.id} - ${estudantes.nome} <br>`
        });

        res.send(lista);
    } catch (err) {
        console.error("Erro ao pegar estudantes> " + err)
    }
})

app.get("/cursos", async function(req, res){
    let result = await client.query("SELECT * FROM CURSO");
    let html = `
        <table border="1" cellpadding= "5" cellspacing = "0">
          <tr>
            <th>ID</th>
            <th>Nome do Curso</th>
          </tr> 
    `
    result.rows.forEach((curso)=>{
        html += `
           <tr>
              <td>${curso.id}</td>
              <td>${curso.nome_curso}</td>
           </tr>       
        `
    })

    html += `</table>`
    res.send(html);
})


app.listen(8081, function () {
    console.log("Servidor Rodando!")
})