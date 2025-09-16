// WHILE 

/*let num = 1;

while (num <= 10) {
  console.log(num);
  num = num + 1; // Incrementa o valor de 'num' em 1
}

// Opcional: Uma forma mais curta e comum de fazer o incremento é: num++;

*/

// Importa o módulo readline-sync
const readline = require('readline-sync');
/*
let nome = "";

while (nome != "x") {
    console.log("Bem-vindo, " + nome + "!");
    // Usa o readline.question() para ler a entrada do usuário no terminal
    nome = readline.question("Digite seu nome (ou 'x' para sair): ");
}

console.log("Até mais!");

*/

/*
let carro = "";

while (carro != "x") {
    carro = readline.question("Digite o nome do carro (ou 'x' para sair): ");
    if (carro == "x") {
        break; // Sai do loop se o usuário digitar 'x'
    }
    console.log("Você escolheu o carro: " + carro + "\n");
}
console.log("Programa encerrado.");

*/

/*

// FOR
// incremento ++

let cont = "";

for (cont = 1; cont <= 10; cont++) {
    console.log(cont);
}
console.log("\n");

// descremento --

for (cont = 10; cont >= 1; cont--) {
    console.log(cont);
}

*/

/*

// GERADOR DE NÚMEROS DA LOTERIA

let n = 0;

console.log("Gerar números da loteria. \n");

for (n = 1; n <= 6; n++) {
    console.log("Número " + n + ": " + Math.floor(Math.random() * 60 + 1));
}


// GERADOR DE NÚMEROS DA LOTERIA

let numerosSorteados = [];

console.log("Gerar números da loteria. \n");

for (let n = 1; n <= 6; n++) {
    let numero;
    do {
        numero = Math.floor(Math.random() * 60 + 1);
    } while (numerosSorteados.includes(numero));
    numerosSorteados.push(numero);
    console.log("Número " + n + ": " + numero);
}


// GERADOR DE NÚMEROS DA LOTERIA SEM REPETIÇÃO (SEM DO/WHILE)

let numeros = [];
for (let i = 1; i <= 60; i++) {
    numeros.push(i);
}

// Embaralha o array
for (let i = numeros.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numeros[i], numeros[j]] = [numeros[j], numeros[i]];
}

console.log("Gerar números da loteria. \n");
for (let n = 1; n <= 6; n++) {
    console.log("Número " + n + ": " + numeros[n - 1]);
}


// GERADOR DE NÚMEROS DA LOTERIA COM OPÇÕES DE ESCOLHER A QUANTIDADE DE NÚMEROS E O INTERVALO MÁXIMO

let nm = "";
let vezes = "";

console.log("Gerar números da loteria. \n");
vezes = readline.question("Quantos números deseja gerar: ");

for (nm = 1; nm <= vezes; nm++) {
    console.log("Número " + nm + ": " + Math.floor(Math.random() * 60 + 1));
}


// LAÇOS DE REPETIÇÃO ENCADEADOS

let i, f;
for (i = 1; i <= 5; i++){
    console.log("Rodada= " + i)
    for (f = 1; f <=3; f++){
        console.log("Valor: " + f + "\n");
    }
}

*/

// USUARIO ESCOLHE A QUANTIDADE DE NUMEROS A SER GERADOS

let nm, vezes;

console.log("Para sair digite 0 \n");

// O loop 'do...while' é mais adequado para a lógica de "faça... enquanto"
do {
    // Pede ao usuário para digitar a quantidade de números
    vezes = readline.questionInt("Quantos numeros deseja gerar? ");

    // Se o usuario digitar 0, o loop é interrompido
    if (vezes === 0) {
        break;
    }

    // Loop para gerar e imprimir os numeros aleatorios
    for (nm = 1; nm <= vezes; nm++) {
        // Gera um numero aleatorio entre 1 e 100 (ajuste conforme necessario)
        const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        console.log(`Numero ${nm}: ${numeroAleatorio}`);
    }

} while (vezes !== 0);

console.log("Programa encerrado.");