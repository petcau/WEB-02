

resultado = "";
for (i = 1; i <= 10; i++){
    resultado += i ;
    if (i<10){
        resultado += ", "
    }
}

console.log(resultado)

resultado = "";
i = 1;
while (i<= 10){
    resultado += i;
    if (i < 10){
        resultado += ", "
    }
    i++;
}
console.log(resultado)

resultado = "";
for (i = 10; i >= 1; i--){
    resultado += i ;
    if (i>1){
        resultado += ", "
    }
}

console.log(resultado)

resultado = "";
i = 10;
while (i>= 1){
    resultado += i;
    if (i > 1){
        resultado += ", "
    }
    i--;
}
console.log(resultado)