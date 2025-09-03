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

let carro = "";

while (carro != "x") {
    carro = readline.question("Digite o nome do carro (ou 'x' para sair): ");
    if (carro == "x") {
        break; // Sai do loop se o usuário digitar 'x'
    }
    console.log("Você escolheu o carro: " + carro + "\n");
}
console.log("Programa encerrado.");