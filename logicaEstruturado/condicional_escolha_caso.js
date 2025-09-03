let letra = 'D';
let mensagem;

switch (letra) {
    case 'A':
        mensagem = "Você escolheu a letra A";
        break;
    case 'B':
        mensagem = "Você escolheu a letra B";
        break;
    case 'C':
        mensagem = "Você escolheu a letra C";
        break;
    default:
        mensagem = "Letra não reconhecida";
}
console.log(mensagem);