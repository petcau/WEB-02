let lerValor = require("readline-sync");

let nota1 = Number(lerValor.question("Nota1: "));
let nota2 = Number(lerValor.question("Nota2: "));
let nota3 = Number(lerValor.question("Nota3: "));

media = (nota1+nota2+nota3)/3;

if (media >= 7){
    console.log("Aprovado com media: "+media);
} else if (media < 3){
    console.log("Reprovado com media: "+media);
} else {
    console.log("Recuperacao com media: "+media);
}