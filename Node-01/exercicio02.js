let lerValor = require("readline-sync");

let num = parseInt(lerValor.question("Digite um numero: "));

if (num%2 == 0){
    console.log("Par");
} else {
    console.log("Impar");
}
