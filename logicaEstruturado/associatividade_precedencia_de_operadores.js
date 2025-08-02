// Verifica a associatividade e precedência de operadores
function verificarAssociatividade() {

    const a = 10;
    const b = 5;
    const c = 2;
    const d = 1;
    const f = 3;
    const g = true;
    const h = false;

    // Operadores aritméticos
    const resultadoAritmetico = a + b * c - d / f;
    const result = g == h !== !false;

    return { resultadoAritmetico, result };
}

const novoresult = verificarAssociatividade();

console.log("Resultado Aritmético:", novoresult.resultadoAritmetico);
console.log("Resultado Booleano:", novoresult.result);