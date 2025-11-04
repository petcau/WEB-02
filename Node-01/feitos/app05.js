let lerValor = require("readline-sync");

let num = Number(lerValor.question("Digite um numero: "));

console.log("TABUADA DO "+num);
for (let i=1; i<=10;i++){
   console.log(`${num} x ${i} = ${num*i}`);
}