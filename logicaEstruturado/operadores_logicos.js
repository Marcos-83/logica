// Verifica se uma janela está aberta usando operadores lógicos
function verificar() {
    const j1 = "f";
    const j2 = "f";
    const j3 = "f";

    // Verifica se a janela está aberta
    /* const resultado = (j1 == 'a');
       return resultado; */

   /* const novoResultado = (j1 == 'a') || (j2 == 'a') || (j3 == 'a');
    return novoResultado; */
    
    const maisResultado = (j1 == 'f') && (j2 == 'f') && (j3 == 'f');
    return maisResultado;
}

const resultado = verificar();
console.log("Janela 01 está aberta?", resultado);

const novoResultado = verificar();
console.log("\nTem alguma Janela aberta?", novoResultado);
console.log("\nO Alarme está desligado? ", !novoResultado);

const maisResultado = verificar();
console.log("\nTodas as janelas estão abertas?", maisResultado);