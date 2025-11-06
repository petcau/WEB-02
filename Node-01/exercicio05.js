let lerValor = require("readline-sync");

let num = Number(lerValor.question("Digite um numero: "));

console.log("TABUADA DO "+ num);

for (i = 1; i <= 10; i++){
    console.log(`${i} X ${num} = ${i*num}`);
}