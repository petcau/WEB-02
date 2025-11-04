let compras = ["arroz", "feijao", "acucar", "cafe", "leite"];

/*
console.log(compras);

for (let i=0; i< 5; i++){
    console.log(`Item ${i+1}: ${compras[i]}`);
}
*/

compras.forEach((item, i) => console.log(`Item ${i+1}: ${item}`));

