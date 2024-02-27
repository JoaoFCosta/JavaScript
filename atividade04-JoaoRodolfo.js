var matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.table(matriz);

//Para baixo
console.log(matriz[0][0], matriz[1][1], matriz[2][2]);
console.log(matriz[0][2], matriz[1][1], matriz[2][0]);
console.log("----------------------------------");
//Para cima
console.log(matriz[2][2], matriz[1][1], matriz[0][0]);
console.log(matriz[2][0], matriz[1][1], matriz[0][2]);

console.log("");
//Sistema de cadastro

var usuario = [
  "Jeferson",
  28,
  "Fuchsia",
  "Abacate",
  "Rua do Urubu, 191",
  "José Claudio",
];
console.table(usuario);

console.log("Olá, " +usuario[0] + "! Seja bem vindo ao nosso sistema.");
console.log("Você mora no endereço "+usuario[4]+", e tem um pet chamado "+usuario[5]);
console.log("Sua idade é "+usuario[1]+" e gosta muito da fruta "+usuario[3])
console.log("Sua cor favorita é",usuario[2]);