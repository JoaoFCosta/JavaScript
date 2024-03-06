// var popA = 100003;
// var popB = 300004;
// var ano = 0;

// while (popA < popB) {
//   ano++;
//   popA *= 1.03;
//   popB *= 1.015;
// }
// console.log(
//   `A população A (${Math.round(popA)}) irá passar a população B (${Math.round(
//     popB
//   )}) em ${ano} anos!`
// );

var tabuleiro = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];

var jogadorX = "X";
var jogadorO = "O";

function jogar(jogador) {
  let linha, coluna;
  do {
    linha = Math.floor(Math.random() * 3);
    coluna = Math.floor(Math.random() * 3);
  } while (tabuleiro[linha][coluna] !== " ");

  tabuleiro[linha][coluna] = jogador;
}
for (let i = 0; i < 9; i++) {
  if (i % 2 == 0) {
    jogar(jogadorO);
  } else {
    jogar(jogadorX);
  }
}
console.table(tabuleiro);

function detectarVencedor() {
  for (let i = 0; i < 3; i++) {
    if (
      tabuleiro[i][0] !== " " &&
      tabuleiro[i][0] === tabuleiro[i][1] &&
      tabuleiro[i][1] === tabuleiro[i][2]
    ) {
      return true; // Retorna uma linha completa
    }
    if (
      tabuleiro[0][i] !== " " &&
      tabuleiro[0][i] === tabuleiro[1][i] &&
      tabuleiro[1][i] === tabuleiro[2][i]
    ) {
      return true; // Retorna uma coluna completa
    }
    if (
      tabuleiro[0][0] !== " " &&
      tabuleiro[0][0] === tabuleiro[1][1] &&
      tabuleiro[1][1] === tabuleiro[2][2]
    ) {
      return true; // Retorna a diagonal principal 
    }
    if (
        tabuleiro[2][2] !== " " &&
        tabuleiro[2][2] === tabuleiro[1][1] &&
        tabuleiro[1][1] === tabuleiro[0][0]
      ) {
        return true; // Retorna a diagonal secundaria
      }
  }
}
