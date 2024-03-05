let contador = 0;

while (contador < 5) {
  contador++;
  console.log(contador);
}

console.log("-----------------------");
var x = 20;

while (x > 10) {
  console.log("Entrei no laço while...");
  x--;
}
console.log("Terminei");
console.log("-----------------------");

let countdown = 5;

while (countdown > 0) {
  console.log(countdown);
  countdown--;
}
console.log("Lançamento!");
console.log("-----------------------");

//Estourando o limite do cartão - versão while

var limite = 500;
var fatura = 0;

while (fatura <= limite) {
  let gasto = Math.random() * 100; //Math.random() cria valor aleatório entre 0 e 1
  fatura += gasto;
  console.log(
    `Gastei R$ ${gasto.toFixed(2)} ------- Fatura: R$ ${fatura.toFixed(2)}`
  );
  //toFixed(2) altera o valor mostrado para o usuário em duas casas decimais
  fatura > limite && console.log(`Estourou o limite do cartão`);
  // && faz somente um if, sem else
}

console.log("-----------------------");

//Estourando o limite do cartão - versão DO while

var limite = 500;
var fatura = 0;

do {
  let gasto = Math.random() * 100;
  fatura += gasto;
  console.log(
    `Gastei R$ ${gasto.toFixed(2)} ------- Fatura: R$ ${fatura.toFixed(2)}`
  );
  fatura > limite && console.log(`Estourou o limite do cartão`);
} while (fatura <= limite);


