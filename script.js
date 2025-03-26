// Atividade 3 - Contagem (timer de 10 segundos)

let numero = parseInt(prompt("Digite seu segundo número:"));

function contagemRegressiva() {
  if (numero > 0) {
    console.log(numero);
    numero--;
    setTimeout(contagemRegressiva, 1000); // Agenda a próxima execução após 1 segundo
  } else {
    console.log("Fim da contagem!");
  }
}

contagemRegressiva(); // Inicia a contagem regressiva