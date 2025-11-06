let lerValor = require("readline-sync");

let num1 = Number(lerValor.question("Num1: "));
let num2 = Number(lerValor.question("Num2: "));
let num3 = Number(lerValor.question("Num3: "));

if (num1 > num2 && num1 > num3){
    console.log(num1);
} else if (num2 > num1 && num2 > num3){
    console.log(num2);
} else {
    console.log(num3)
}