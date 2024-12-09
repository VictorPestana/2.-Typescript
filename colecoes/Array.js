"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readlinesync = require("readline-sync");
const numeros = new Array();
numeros.push(7);
numeros.push(2);
numeros.push(5);
numeros.push(10);
numeros.push(7, 3);
for (let numero of numeros) {
    console.log(numero);
}
// Adiciona um numero utilizando entrada de dados via teclado
numeros.push(readlinesync.questionFloat('Digite um numero: '));
// Adicionamos um ou mais elementos no inicio da fila
numeros.unshift(2, 4.5, 8, 3, 9);
console.table(numeros);
// Verificamos se um numero existe na Colecao
console.log("\nExiste o numero 5 no Array? ", numeros.includes(5));
// Verificamos qual o indice de um certo numero na Colecao
console.log("\nQuak é o indice do numero 3 do meu Array? ", numeros.indexOf(3));
// Removemos um numero da Colecao
numeros.splice(numeros.indexOf(10), 1);
console.table(numeros);
