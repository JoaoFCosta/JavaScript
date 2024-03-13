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
