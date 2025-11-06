let compras = ["arroz", "feijao", "macarrao", "leite", "carne"]

for (i = 0; i < 5; i++){
    console.log(compras[i]);
}
for (item of compras){
    console.log(item)
}

compras.forEach(item=>console.log(item));
