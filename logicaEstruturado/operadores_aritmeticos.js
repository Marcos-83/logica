// Exemplo 1 

const x = 10;
const y = 5;

const soma = x + y;
const subtracao = x - y;
const multiplicacao = x * y;
const divisao = x / y;
const modulo = x % y;

console.log("A soma dos números é:", soma);
console.log("A subtracao dos números é:", subtracao);
console.log("A multiplicacao dos números é:", multiplicacao);
console.log("A divisao dos números é:", divisao);
console.log("A sobra dos números é:", modulo);

// Exemplo 2

// Cálculo do ▲ de uma equação do segundo grau
const a = 2;
const b = 5;
const c = 2;

const equacao = a + "x² + " + b + "x + " + c + " = 0";

// Cálculo do delta:
// Usando concatenação com '+'
const delta = b * b - 4 * a * c;

console.log("\nA equação é:", equacao);
console.log("\nO ▲ da equação é: ", delta);