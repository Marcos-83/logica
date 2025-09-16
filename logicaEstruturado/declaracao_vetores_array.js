// Importa o módulo readline-sync
const readline = require('readline-sync');

/*

let notas = new Array(4); // Declara um array com 4 posições

let minhaNota; // Declara a variável que vai receber a nota

console.log("Digite uma nota: ");
minhaNota = parseFloat(readline.question("")); // Lê a nota do usuário e converte para número
notas[2] = minhaNota; // Atribui a nota à posição 2 do array 'notas'

console.log(notas[2]); // Exibe a nota que foi armazenada na posição 2

minhaNota = notas[2]; // Atribui o valor da posição 2 do array 'notas' à variável 'minhaNota'
console.log(minhaNota); // Exibe o valor da variável 'minhaNota'   
notas[3] = notas[2] * 2; // Atribui o valor da posição 2 do array 'notas' multiplicado por 2 à posição 3 do array 'notas'
console.log(notas[3]); // Exibe o valor armazenado na posição 3 do array 'notas'

*/

let soma = "";
let media = "";
let notas = new Array(4); // Declara um array com 4 posições

soma = 0; // Inicializa a variável soma com 0
console.log("Digite 4 notas: ");
for (i = 0; i <= 3; i++) {
    notas[i] = parseFloat(readline.question("")); // Lê as notas do usuário e armazena no array 'notas'
    soma += notas[i]; // Acumula a soma das notas
 }
  media = soma / 4; // Calcula a média das notas
  

  console.log("A média das nostas é: " + media + "\n"); // Exibe a média das notas
    for (i = 0; i < 4; i++) {
        console.log(notas[i]); // Exibe cada nota armazenada no array 'notas'
    }