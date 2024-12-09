// Escreva um programa para criar uma Collection Array do tipo number, inicializada com 10 valores inteiros.
// O programa deverá solicitar ao usuário, que ele digite via teclado 1 número inteiro e caso ele seja encontrado no Array,
// exiba na tela a posição deste número na Collection.
// Caso o número não seja encontrado, o programa deverá exibir na tela a mensagem:
// O número NN não foi encontrado!

import readlinesync = require("readline-sync");

const numerosInteiros: Array<number> = new Array<number>(); // criacao do array

for (let i = 0; i < 10; i++) { // enquanto i for menor que 10, ele vai adicionar o numero
  const numero = readlinesync.questionInt("Digite um numero: ");
  numerosInteiros.push(numero);
}

const numeroEncontrar = readlinesync.questionInt( // criacao de uma const para encontrar o numero
  "Digite um numero para ser encontrado: "
);

if (numerosInteiros.includes(numeroEncontrar)) { // se dentro do array de numeros inteiros tiver o (numero encontrar) ele vai retornar true (foi encontrado)
  const posicao = numerosInteiros.indexOf(numeroEncontrar);
  console.log(
    `O número ${numeroEncontrar} foi encontrado na posição ${posicao}` // retorna a posicao
  );
} else {
  console.log(`O número ${numeroEncontrar} nao foi encontrado!`);
}
