const readline = require('readline-sync');

let cont = "";
let contA = "";
let contB = "";
let aux = "";
let vetor = new Array(3); // Declara um array com 5 posições

// Lê os números do usuário e armazena no array 'vetor' 

for (cont = 0; cont <= 2; cont++) {
    console.log("Digite um número: ");
    vetor[cont] = parseInt(readline.question(""));
}

// Ordena o array 'vetor' em ordem crescente usando o algoritmo Selection Sort
for (contA = 0; contA <= 2; contA++) {
    for (contB = contA + 1; contB <= 3; contB++) {
        if (vetor[contA] > vetor[contB]) {
            aux = vetor[contB];
            vetor[contB] = vetor[contA];
            vetor[contA] = aux;
        }
    }
}
// Exibe os números ordenados
console.log("Números em ordem crescente: ");
for (cont = 0; cont <= 2; cont++) {
    console.log(vetor[cont] + " ");
}