// Atividade 1 (verificar par e impar)

function atvd1() {
  function verificarPar(n1) {
    if (n1 % 2 === 0) {
      // === é estritamente igual, é igual em tipo de conteudo
      console.log('par')

    } else {
      console.log('impar')
    }
  }
  let n1 = parseInt(prompt("Digite um número:"))
  verificarPar(n1)
}


// Atividade 2 (calculadora)
function atvd2() {
  function calcular(n2, n3) {
    const soma = n2 + n3;
    const subtracao = n2 - n3;
    const divisao = n3 !== 0 ? n2 / n3 : 'Não pode dividir por zero';
    const multiplicacao = n2 * n3;


    console.log(soma);
    console.log(subtracao);
    console.log(divisao);
    console.log(multiplicacao);

  }

  let n2 = parseFloat(prompt("Digite seu primeiro número:"));
  let n3 = parseFloat(prompt("Digite seu segundo número:"));
  calcular(n2, n3);
}

// Atividade 3 - Contagem (timer de 10 segundos)

function atvd3() {
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
}

// Atividade 7 - Função com Parâmetros Opcionais
function atvd7() {
  let nome = (prompt("Digite seu nome: "));

  console.log("Ola!", nome);
};

// Atividade 8 - Calculadora de Média
function atvd8() {
  let n1 = parseInt(prompt("Digite o segundo número: "));
  let n2 = parseInt(prompt("Digite o segundo número: "));
  let n3 = parseInt(prompt("Digite o terceiro número: "));

  let soma = (n1 + n2 + n3) / 3;

  console.log(soma);
};