//Laço de repetição FOR
//Escrever para o usuário 1000x "Prestar mais atenção nas aulas"

//for (let i = 1; i < 1000; i += 2) {
//    console.log(i);
//}

//for (let i = 1; i < 1000; i += 2) {
//    if (i % 2 != 0) {
//    console.log(i);
// }
//}

//for (let n = 1; n <= 20; n++) {
//  console.log(n);
//}

//for (let n = 2; n < 20; n += 2) {
//  console.log(n);
//}

//for (let n = 1; n <= 20; n) {
//    if (n % 2 == 0) console.log(n);
//}

// Dado um vetor com números 5, 6, 8, 14, 0, 9, 7, 2.
// Calcule e exiba a somatória de seus elementos

const numeros = [5, 6, 8, 14, 0, 9, 7, 2];
var somar = 0;

for (let i = 0; i < numeros.length; i++) {
  somar += numeros[i];
}

console.log(`A soma dos elementos do array é: ${somar}`);

// Dado um vetor com números 5, 6, 8, 14, 0, 9, 7, 2.
// Multiplique todos os seus elementos por 3

var copia = numeros.slice();

for (var vezes = 0; vezes < numeros.length; vezes++) {
  copia[vezes] *= 2;
}

console.log(copia);

// Dada a matriz 2x3, escrever para o usuário, todos os seus elementos com as respectivas posições da matriz
// [8, 4, 1]
// [3, 7, 8]

var matriz = [
  [8, 4, 1],
  [3, 7, 8],
];
console.table(matriz);

for (let linha = 0; linha < matriz.length; linha++) {
  for (let coluna = 0; coluna < matriz[0].length; coluna++) {
console.log(`Matriz[${linha},${coluna}] = ${matriz[linha][coluna]}`)
  }
}

