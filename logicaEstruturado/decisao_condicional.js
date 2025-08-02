function verificarAprovacao() {
    const nota1 = 7;
    const nota2 = 7;

    // Verifica se a média é maior ou igual a 6
  const media = (nota1 + nota2) / 2;
  if (media >= 8) {
        console.log("Resultado da verificação: Aprovado, Parabéns! \n"); 
  } else if (media >= 5 && media >= 7) {
        console.log("Resultado da verificação: Recuperação! \n");    
}
console.log("Sua média foi: " + media);
}
  


verificarAprovacao();