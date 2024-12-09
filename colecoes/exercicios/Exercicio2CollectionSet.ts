// Escreva um programa para criar uma Collection Set do tipo number, inicializada com 10 valores inteiros. 
// O programa deverá solicitar ao usuário, que ele digite via teclado 1 número inteiro e caso ele seja encontrado na Colection Set, exiba na tela a mensagem: 
// O Número NN foi encontrado! 
// Caso o número não seja encontrado, o programa deverá exibir na tela a mensagem: O número NN não foi encontrado!

const readlinesync = require("readline-sync");

const numerosInteiros: Set<number> = new Set<number>(); // Set criado

while (numerosInteiros.size <10) {
    const numero = readlinesync.questionInt("Digite um numero: "); // Enquanto numerosInteiros for menos que 10, ele vai adicionar o numero
    numerosInteiros.add(numero);
}

console.log(numerosInteiros); // checar

const numeroEncontrar = readlinesync.questionInt("Digite um numero para ser encontrado: "); // const criada para encontrar o numero

if (numerosInteiros.has(numeroEncontrar)) { // se dentro de numeros inteiros tiver o numeroEncontrar ele vai retornar true (foi encontrado)
    console.log(`O número ${numeroEncontrar} foi encontrado!`);
} else {
    console.log(`O número ${numeroEncontrar} nao foi encontrado!`);
}
