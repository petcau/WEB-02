let lerValor = require("readline-sync");

let num1 = parseFloat(lerValor.question("digite o valor: "));
let operador = lerValor.question("digite o operador: ");
let num2 = parseFloat(lerValor.question("digite o valor: "));
let resultado;

switch(operador){
    case "+":
        resultado = num1 + num2;
        break;
    case "-":
        resultado = num1 - num2;
        break;
    case "*":
        resultado = num1 * num2;
        break;
    case "/":
        resultado = num1 / num2;
        break;
    default: 
        console.log("operador invalido");
        break;
}

console.log(resultado);