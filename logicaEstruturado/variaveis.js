// Variáveis global
const resultado = "Aprovado";
const notas = "N1, N2, N3, N4";
const verificar = true;
const idade = 42;
const simbolo = 'r';

function inicio() { 
    // Variáveis local
    const resultadoLocal = "Reprovado";
    const notasLocal = "N9, N7, N6, N5";
    const verificarLocal = false;
    const idadeLocal = 12;
    const simboloLocal = 'x';

    return {
        resultado: resultadoLocal,
        notas: notasLocal,
        verificar: verificarLocal,
        idade: idadeLocal,
        simbolo: simboloLocal
    };
}

const resposta = inicio();
console.log(resposta);
console.log(resultado, notas, verificar, idade, simbolo);