let lerValor = require("readline-sync");
let somar = require("./modulos/somar");
let subtrair = require("./modulos/subtrair");
let multiplicar = require("./modulos/multiplicar");
let dividir = require("./modulos/dividir");

let num1 = Number(lerValor.question("Num1: "));
let num2 = Number(lerValor.question("Num2: "));
let op = lerValor.question("Operador: ");

switch (op){
    case "+":
        console.log("Resultado: "+somar(num1, num2));
        break;
    case "-":
        console.log("Resultado: "+subtrair(num1, num2));
        break;
    case "*":
        console.log("Resultado: "+multiplicar(num1, num2));
        break;
    case "/":
        console.log("Resultado: "+dividir(num1, num2));
        break;
       
    default:
        console.log("Operador incorreto!");     
        break; 
}