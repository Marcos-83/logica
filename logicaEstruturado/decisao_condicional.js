// DECISÃO CONDICIONAL SIMPLES (IF)
function verificarAprovacao() {
      const nota1 = 7;
      const nota2 = 7;
      
      // Verifica se a média é maior ou igual a 6
      const media = (nota1 + nota2) / 2;
      if (media >= 8) {
            console.log("Resultado da verificação: Aprovado, Parabéns!"); 
      } 
      console.log("Sua média foi: " + media + "\n");        
}
verificarAprovacao();




// DECISÃO CONDICIONAL COMPOSTA (IF E ELSE)
function verificarAprovacao1() {
    const nota1 = 7;
    const nota2 = 7;

    // Verifica se a média é maior ou igual a 6
  const media = (nota1 + nota2) / 2;
  if (media >= 7) {
        console.log("Resultado da verificação: Aprovado, Parabéns!");         
  } else  {        
      console.log("Resultado da verificação: Reprovado, estude mais!");
}
      console.log("Sua média foi: " + media + "\n");
}
verificarAprovacao1();




// DECISÃO CONDICIONAL ENCADEADA (IF, ELSE IF E ELSE) 
function verificarAprovacao2() {
    const nota1 = 5.0;
    const nota2 = 5.0;
    
// Verifica se a média esta dentro do esperado
    const media = (nota1 + nota2) / 2;    
  if (media >= 7.0) {
        console.log("Resultado da verificação: Aprovado, Parabéns!"); 
        console.log("Sua média foi: " + media + "\n");
  } else if (media >= 5.0 && media < 7.0){        
        console.log("Resultado da verificação: Recuperação, estude mais!");
        console.log("Sua média foi: " + media + "\n");          
  } else { (media < 5.0)
        console.log("Resultado da verificação: Reprovado!");
        console.log("Sua média foi: " + media + "\n");
  }
}
verificarAprovacao2();





// EXERCÍCIOS 
function verificarAprovacao3() {
    const faltas = 11;
    const nota1 = 5.0;
    const nota2 = 5.0;
    
// Verifica se a média esta dentro do esperado
    const media = (nota1 + nota2) / 2;
// Verifica se o número de faltas é maior que 10    
    const faltasMaximas = faltas > 10;
    if (faltasMaximas) {
          console.log("Resultado da verificação: Reprovado por faltas");
          console.log("Número de faltas: " + faltas);
          
  } else if (media >= 7.0) {
        console.log("Resultado da verificação: Aprovado, Parabéns!");
        console.log("Sua média foi: " + media + "\n");
    } else if (media >= 5.0 && media < 7.0) {
        console.log("Resultado da verificação: Recuperação, estude mais!");
        console.log("Sua média foi: " + media + "\n");
    } else {
        console.log("Resultado da verificação: Reprovado");
        console.log("Sua média foi: " + media);
    }
}
verificarAprovacao3();