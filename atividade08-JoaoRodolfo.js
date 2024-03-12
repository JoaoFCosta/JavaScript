class Aluno {
  constructor(nome, ra, dataNascimento, curso) {
    this.nome = nome;
    this.dataNascimento = dataNascimento;
    this.ra = ra;
    this.curso = curso;
  }
  calcularIdade() {
    return 2024 - this.dataNascimento;
  }
  
  apresentar() {
    console.log(`O aluno ${this.nome}, tem ${this.calcularIdade()} anos, RA ${this.ra} e está cursando ${this.curso}`);
  }
}

const aluno1 = new Aluno("Jeferson", 4472, 2008, "Desenvolvimento de Sistemas");

aluno1.apresentar();
