// Escreva um programa para criar uma Collection Array de Objetos do tipo string. O programa deverá solicitar ao usuário, que ele digite via teclado 5 cores e deverá adicioná-las individualmente no Array. Em seguida, faça o que se pede:
// Mostre na tela todas as cores adicionadas.
// Mostre na tela todas as cores adicionadas, ordenadas em ordem crescente.

import readlinesync = require("readline-sync");

const cores: Array<string> = new Array<string>();

for (let i = 0; i < 5; i++) {
  const cor = readlinesync.question("Digite uma cor: ");
  cores.push(cor);
}

console.log("Listar todas as cores");
console.log(cores);

const coresOrdenadas = [...cores].sort();

console.log("\nCores ordenadas em ordem crescente: ");
console.log(coresOrdenadas);
