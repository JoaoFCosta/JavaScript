// class Aluno {
//   constructor(nome, ra, dataNascimento, curso) {
//     this.nome = nome;
//     this.dataNascimento = dataNascimento;
//     this.ra = ra;
//     this.curso = curso;
//   }
//   calcularIdade() {
//     return 2024 - this.dataNascimento;
//   }

//   apresentar() {
//     console.log(`O aluno ${this.nome}, tem ${this.calcularIdade()} anos, RA ${this.ra} e está cursando ${this.curso}`);
//   }
// }

// const aluno1 = new Aluno("Jeferson", 4472, 2008, "Desenvolvimento de Sistemas");
// aluno1.apresentar();

class Sorvete {
  "";
  constructor(sabor, preco, tamanho) {
    this.sabor = sabor;
    this.preco = preco;
    this.tamanho = tamanho;
  }
  pedido() {
    return console.log(
      `O sorvete de ${this.sabor}, do tamanho ${
        this.tamanho
      }, custa R$${this.getPreco()}`
    );
  }
  getPreco() {
    return this.preco;
  }
  setPreco(novoPreco) {
    this.preco = novoPreco;
  }
}

const morango = new Sorvete("Morango", 9, "G");
const chocolate = new Sorvete("Chocolate", 3, "P");
const melancia = new Sorvete("Melância", 6, "M");

morango.pedido();
chocolate.pedido();
melancia.pedido();
morango.setPreco(10.51);
morango.pedido();

// Strings

console.log("-----------------------");

// 01
var texto1 = "Olá";
var texto2 = "olá";
function compararTextos(texto1, texto2) {
  if (texto1.toLowerCase() === texto2.toLowerCase()) console.log("São iguais");
  else console.log("São diferentes");
}

compararTextos(texto1, texto2);

console.log("-----------------------");
// 02
function extrairNumeros(str) {
  const regex = /\d+/g;
  return str.match(regex);
}

const string = "Eu gosto de 1, talvez 2";
const numeros = extrairNumeros(string);
console.log(numeros)

console.log("-----------------------");
// 03

function inverterFrase(frase) {
  const palavras = frase.split(" ");
  return palavras.reverse().join(" ");
}

const frase = "Este é um exemplo de frase invertida"
const fraseInvertida = inverterFrase(frase);
console.log(fraseInvertida)