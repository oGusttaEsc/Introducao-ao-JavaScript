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