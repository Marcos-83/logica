// Importa o módulo readline-sync
const readline = require('readline-sync');

let x = "";
let y = "";
let aux = "";

console.log("Digite o valor de x: ");
x = parseFloat(readline.question("")); // Lê o valor de x do usuário e converte para número
console.log("Digite o valor de y: ");
y = parseFloat(readline.question("")); // Lê o valor de y do usuário e converte para número 

aux = x; // Armazena o valor de x na variável auxiliar 'aux'
x = y; // Atribui o valor de y à variável x
y = aux; // Atribui o valor armazenado em 'aux' (valor original de x) à variável y 
console.log("O novo valor de x é: " + x); // Exibe o novo valor de x
console.log("O novo valor de y é: " + y); // Exibe o novo valor de y