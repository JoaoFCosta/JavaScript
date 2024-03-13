// Criando um objeto do tipo data
var data1 = new Date();
console.log(data1);

// Criando um objeto do tipo "data" com data especifica Date()
var data2 = new Date("2024=03-13");
console.log(data2);

//Extraindo partes de uma data
var data3 = new Date("2008=05-16");
console.log(`Data: ${data3}`);
console.log(`Ano: ${data3.getFullYear()}`);
console.log(`Mês: ${data3.getMonth()}`);
console.log(`Dia: ${data3.getDate()}`);

const mes = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

console.log(`Retornando o mês por escrito`);
console.log(`Mês: ${mes[data3.getMonth()]}`);

const diaDaSemana = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];
console.log(`Dia da semana: ${diaDaSemana[data3.getDay()]}`);

//Calculando a data de nascimento

console.log("----------------");

const dataNasc = new Date("2008=05=16");
const dataAtual = new Date();

const diferenca = dataAtual.getTime() - dataNasc.getTime();

const idade = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25));
console.log(`Idade: ${idade} anos`);

console.log("----------------");
const diferencaAnos = dataAtual.getFullYear() - dataNasc.getFullYear();

if (
  dataAtual.getMonth() < dataNasc.getMonth() ||
  (dataAtual.getMonth() === dataNasc.getMonth() &&
    dataAtual.getDate() < dataNasc.getDate())
) {
  console.log(`Ainda não fez anivesário`);
  console.log(`Idade: ${diferencaAnos - 1}`);
}
