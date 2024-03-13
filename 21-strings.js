// Variáveis de tipo string

var texto = "Olá, eu sou um texto!";
console.log(texto);

//Concatenação de textos

var texto1 = "Olá, ";
var texto2 = "eu sou um texto!";
var texto3 = texto1 + texto2;
console.log(texto3);

texto1 += texto2;
console.log(texto1);

//Tamanho da string
var texto4 = "Olá, eu sou um texto!";
console.log(`Tamanho do texto: ${texto4.length} caracteres`);

//Caracteres de escape
var texto5 = 'Olá, meu nome é "João"!';
console.log(texto5);

var texto6 = "Quebra de linha \n outra linha";
console.log(texto6);

var texto7 = "Tabulação \t outra tabulação";
console.log(texto7);

//Obetendo partes de uma string
var texto8 = "O esperto rato, perplexo ficou frente ao aparato";
var sub = texto8.substring(16, 24);
console.log(sub);
var sub2 = texto8.substr(10, 4);
console.log(sub2);

//Substituir partes de uma string
var texto9 = "O rato roeu a roupa do rei de Roma";
var novoTexto = texto9.replace("rato", "coelho");
console.log(texto9);
console.log(novoTexto);

//toUpperCase e toLowerCase
var texto10 = "O RATO Roeu a rOUpa do REI de Roma";
console.log(texto10.toUpperCase());
console.log(texto10.toLowerCase());

//Limpando espaços em branco em uma string
var texto11 = "       texto aqui no meio           ";
console.log("******", texto11, "******");
console.log("******", texto11.trim(), "******");

//Buscando a posição de uma string
var texto12 = "O rato roeu a roupa do rato de Roma";
var posicao = texto12.indexOf("rato");
var ultimaPosicao = texto12.lastIndexOf("rato");
console.log(
  `Primeira ocorrencia: ${posicao} - ultima ocorrencia: ${ultimaPosicao}`
);

//Dividindo uma string em partes
var texto13 = "O rato roeu a roupa do rei de roma";
var palavras = texto13.split(" ");
console.table(palavras);

var chaveAcesso = "1234-5678-9012-3456";
var partes = chaveAcesso.split("-");
console.table(partes);