// Atividade 1 (verificar par e impar)

function verificarPar(n1){
    if(n1 % 2 === 0) {
        // === é estritamente igual, é igual em tipo de conteudo
        console.log('par')

    }else{
        console.log('impar')
    }
}
let n1 = parseInt(prompt("Digite um número:"))
verificarPar(n1)

// Atividade 2 (calculadora)

function calcular(n2, n3){
    const soma = n2 + n3;
    const subtracao = n2 - n3;
    const divisao = n3 !== 0 ? n2 / n3: 'Não pode dividir por zero';
    const multiplicacao = n2 * n3;


console.log(soma);
console.log(subtracao);
console.log(divisao);
console.log(multiplicacao);

}

let n2 = parseFloat(prompt("Digite seu primeiro número:"));
let n3 = parseFloat(prompt("Digite seu segundo número:"));
calcular(n2,n3);

// Contagem (timer de 10 segundos)

let n4 = parseInt(prompt("Digite um número entre 10 e 20 para contagem regressiva"));

while (n4 >= 1){
    setTimeout(()=>{
        console.log(n4);
    }, 1000);


}