const numero = 10.8; // variável global

function local() {
    const numeroLocal = 15.3; // variáveis local

    return numeroLocal;
}

const resposta = local();
console.log(resposta);
console.log(numero);

function calcular() {
    const numeroCalcular = 5.1;
    return numeroCalcular * numero;
}

const resp = calcular();
console.log(resp);