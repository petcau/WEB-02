let lerValor = require("readline-sync");

let num1 = Number(lerValor.question("Num1: "));
let num2 = Number(lerValor.question("Num2: "));
let op = lerValor.question("Operador (+ - / *): ");

let resultado;

switch (op){
    case "+":
        resultado = num1+num2;
        break;
    case "-":
        resultado = num1-num2;
        break;
    case "/":
        resultado = num1/num2;
        break;
    case "*":
        resultado = num1*num2;
        break;
    default:
        resultado = undefined;
        console.log("Operador inválido!")
        break;
}

console.log("Resultado: "+resultado);
