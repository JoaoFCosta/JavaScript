var matriz = [
  [3, 5, 8],
  [1, 9, 2],
  [7, 1, 4],
];
console.table(matriz);

for (let linha = 0; linha < matriz.length; linha++) {
  for (let coluna = 0; coluna < matriz.length; coluna++) {
    if ((linha == coluna))
      console.log(matriz[linha][coluna]);
  }
}
