import { Stack } from "./Stack";

const pilha = new Stack<string>();

pilha.push('Prato Azul')
pilha.push('Prato Verde')
pilha.push('Prato Vermelho')

pilha.printStack();

console.log(pilha.contains('prato branco'))

pilha.pop()

pilha.printStack()