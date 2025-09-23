const readline = require('readline-sync');

let num = "";
let pos = "";
const vetor = new Array(4); // Declara um array com 4 posições

// Criar array e preeencher com números do usuário
for (i = 0; i < 4; i++) {
    console.log("Digite um valor:")
    vetor[i] = parseInt(readline.question(""));
}

// Solicitar número a ser pesquisado
console.log("Qual o valor a ser pesquisado?");
num = parseFloat(readline.question(""));
pos = 0;

// Realizar a pesquisa linear no array
while ((pos < 4) && (vetor[pos] != num)) {
    pos++;
}

if (vetor[pos] == num) {
    console.log("O valor " + num + " foi encontrado na posição " + pos);
}
else {
    console.log("O valor " + num + " não foi encontrado no vetor...");
}

