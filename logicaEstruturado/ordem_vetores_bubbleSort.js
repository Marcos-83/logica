// Declaração de variáveis
let temp = 0; // Variável temporária para ajudar na troca de valores
let i = 0; // Contador para loops (índice externo)
let j = 0; // Contador para loops (índice interno)
let compr = 0; // Variável para armazenar o comprimento do array
let vetor = new Array(10); // Declara um array (vetor) com 10 posições

// Função para gerar um número aleatório
let sortear = function (min, max) {
    // Retorna um número inteiro aleatório entre 'min' e 'max' (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Loop para preencher o array com números aleatórios
for (i = 0; i <= 9; i++) {
    // Para cada posição do array, atribui um número aleatório entre 1 e 100
    vetor[i] = sortear(1, 100);
}

// Chama a função 'bubbleSort' para ordenar o array
bubbleSort(vetor);

// Loop para imprimir o array ordenado no console
for (i = 0; i <= 9; i++) {
    // Exibe cada elemento do array seguido de um espaço
    console.log(vetor[i] + " ");
}

// Função que implementa o algoritmo de ordenação Bubble Sort
function bubbleSort(vetor) {
    // Obtém o tamanho do array
    compr = vetor.length;
    // Loop externo: controla as "passagens" pelo array
    for (i = 0; i < compr; i++) {
        // Loop interno: compara e troca os elementos
        // A condição (compr - i - 1) otimiza o loop, pois os últimos elementos já estarão ordenados
        for (j = 0; j < (compr - i - 1); j++) {
            // Verifica se o elemento atual é maior que o próximo
            if (vetor[j] > vetor[j + 1]) {
                // Se for, inicia a troca de valores
                // Armazena o valor do elemento atual em 'temp'
                temp = vetor[j];
                // Atribui o valor do próximo elemento ao elemento atual
                vetor[j] = vetor[j + 1];
                // Atribui o valor de 'temp' (o valor original do elemento atual) ao próximo elemento
                vetor[j + 1] = temp;
            }
        }
    }
}