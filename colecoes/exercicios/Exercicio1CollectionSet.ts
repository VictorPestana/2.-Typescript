// Escreva um programa para criar uma Collection Set do tipo number. O programa deverá solicitar ao usuário, que ele digite via teclado 10 valores inteiros não repetidos e adicione-os individualmente na Collection Set. Em seguida, faça o que se pede:
// Mostre na tela todos os elementos da Collection Set.
// Veja o exemplo abaixo:

import readlinesync = require("readline-sync");

const numerosInteiros: Set<number> = new Set<number>();

while (numerosInteiros.size < 10) {
    const numero = readlinesync.questionInt("Digite um numero: ");
    if (numerosInteiros.has(numero)) {
      console.log("Número repetido!");
    } else {
      numerosInteiros.add(numero); 
    }
  }
  
  console.log("Listar dados do Set: ");

let setNumerosOrdenados: Array<number> = Array.from(numerosInteiros).sort(
  (a, b) => a - b
);
console.log(setNumerosOrdenados);
