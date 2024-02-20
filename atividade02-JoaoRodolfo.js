//ex 01
var nome = "João";
var anoAtual = 2024;
var ano = 2008;

console.log(nome, "nasceu em", ano);

var idade = anoAtual - ano;
console.log(nome, "tem", idade, "anos");

//ex 02
console.log("-----------------------------------------");

var comp = 12;
var larg = 6;

console.log(
  "A área do retângulo é comprimento * largura, ou seja", comp * larg, "cm2");

//ex 03
var altura = 5;

console.log(
  "Se adicionarmos a altura de 5cm, o resultado do cálculo passa a ser:", comp * larg * altura,"cm3");

//ex 04
console.log("-----------------------------------------");

console.log(
  "Temos um equação de segundo grau, 2x**2 + 3x - 1, o valor de delta seria:");
var a = 2;
var b = 3;
var c = -1;

console.log("Delta =", b ** 2 - 4 * a * c);

//ex 05
console.log("-----------------------------------------");

console.log(
  "Um cliente fez uma compra no valor de R$450 e obteve 3% de desconto");

var gasto = 450;
var desconto = 0.03;

console.log("O valor do desconto é de:", gasto * desconto);
var valorDesconto = gasto * desconto;
console.log("O valor final da compra é de: R$", gasto - valorDesconto);

//ex 06
console.log("-----------------------------------------");

console.log(
  "Um carro viaja a por três horas e meia a uma velocidade média de 95Km/h");

var tempo = 3.5;
var vel = 95;

console.log("Basta utilizar a fórmula: Vm = s/t");
console.log("A distância percorrida seria:", vel * tempo, "Km/h");