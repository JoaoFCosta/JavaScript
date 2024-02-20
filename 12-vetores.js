const numeros = [1, 2, 3, 4, 5];
console.log(numeros);
console.log(numeros[2]);

numeros[2] = 6;
console.log(numeros);
console.log(numeros[2]);

//Criando variáveis do tipo array (vetores)

var dinos = ["Tiranossauro Rex", "Estegossauro", "Anquilossauro"];
console.log(dinos); //retorna todos os itens do array
console.log(dinos[0]); //retorna o primeiro índice do array
console.log(""); //pular uma linha
console.table(dinos); //Cria tabela com os itens do array
console.log("O vetor tem", dinos.length, "elementos!"); //mostrando quantidade de itens

//Adicionando elementos ao vetor existente
dinos.push("Brontossauro"); //array.push adiciona um item no final do vetor
console.table(dinos);

dinos.unshift("Tricerátops"); //Adiciona itenos no inicio do array
console.log(dinos);

//Alterando elementos com base no indice (posição)
dinos[3] = "Titanossauro";
console.log(dinos);

//Obtendo um elemento com base em seu índice
console.log("Primeira posição", dinos[0]);
console.log("Segunda posição", dinos[1]);
console.log("Item da posição 20:", dinos[20]);

//Removendo elementos do vetor
dinos.pop();
console.table(dinos);

dinos.shift();
console.table(dinos);

dinos.splice(1, 1);
console.table(dinos);
