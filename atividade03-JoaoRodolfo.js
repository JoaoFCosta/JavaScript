var frutas = ["Banana", "Maçã", "Pera", "Uva", "Morango"];

console.table(frutas);

frutas.push("Tangerina");
console.table(frutas);

frutas.unshift("Goiaba");
console.table(frutas);

console.log("Índice 5:", frutas[5]);

//frutas.splice(4, 1);

var proc = frutas.indexOf("Uva");
console.log(proc);
frutas.splice(proc, 1);
console.table(frutas);

var copia = frutas.slice(2, 5);
console.table(copia);

console.log("------------------------");

var numeros = [1, 2, 3, 4, 5];
console.table(numeros);
console.log(numeros[2]);

var copia2 = numeros.slice();
console.table(copia2);

/*for (var vezes = 0; vezes < copia.length; vezes++) {
    copia2[vezes] = copia2[vezes] * 2;
};*/

copia2[0] = numeros[0] * 2;
copia2[1] = numeros[1] * 2;
copia2[2] = numeros[2] * 2;
copia2[3] = numeros[3] * 2;
copia2[4] = numeros[4] * 2;
console.table(copia2);
