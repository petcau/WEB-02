const express = require("express");
const app = express();

//npm install pg
const banco = require("pg");

const client = new banco.Client({
    connectionString: "postgresql://postgres.tjqjpopdzojijsimayvl:aula2025web2@aws-1-us-east-2.pooler.supabase.com:5432/postgres",
    ssl: { rejectUnauthorized: false }
});

client.connect(err => {
    if (err) {
        console.error("Erro ao conectar ao Supabase:", err.stack);
    } else {
        console.log("Conectado ao Supabase com sucesso!");
    }
});

// Rota para listar todos os estudantes
// async significa que a função passa a trabalhar de forma assíncrona, permitindo usar o await dentro dela.
app.get("/estudantes", async function(req, res) {

    // Executa uma consulta SQL no banco Supabase/PostgreSQL
    // "client.query" envia o comando para o banco e espera o resultado
    // 'await' manda o Node esperar o banco de dados responder
    const result = await client.query("SELECT * from estudantes");

    // Envia para o navegador (em formato JSON) todas as linhas retornadas pela consulta
    //res.json(result.rows);

    let lista = "";
    result.rows.forEach((estudante) => {
        const dataFormatada = new Intl.DateTimeFormat("pt-BR").format(new Date(estudante.data_nascimento));

        lista += `${estudante.id}. ${estudante.nome}, ${estudante.email}, ${dataFormatada}<br>`;
    });
   
    res.send(lista);
});

app.get("/cursos", async (req, res) => {
    const result = await client.query("SELECT * FROM curso ORDER BY id");

    let html = `
        <table border="1" cellpadding="5" cellspacing="0">
            <tr>
                <th>ID</th>
                <th>Nome do Curso</th>
            </tr>
    `;

    result.rows.forEach((curso) => {
        html += `
            <tr>
                <td>${curso.id}</td>
                <td>${curso.nome_curso}</td>
            </tr>
        `;
    });

    html += `</table>`;

    res.send(html);
});


app.listen(8081, function () {
    console.log("Servidor Rodando!")
})