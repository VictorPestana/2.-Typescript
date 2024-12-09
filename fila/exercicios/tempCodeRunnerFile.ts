import { Stack } from "../../pilha/Stack";
const readlinesync = require("readline-sync");

const pilha = new Stack<string>();

// MENU
while (true) {
  console.log("\n**********************************************\n");
  console.log("1 - Adicionar Livro na Pilha");
  console.log("2 - Listar Todos Os Livros");
  console.log("3 - Retirar Livro da Pilha");
  console.log("0 - Sair");
  console.log("\n**********************************************\n");

  const opcao = readlinesync.questionInt("Digite sua opcao: ");

  switch (opcao) {
    case 1:
      const nomeLivro = readlinesync.question(
        "Digite o nome do livro que deseja adicionar: "
      );
      pilha.push(nomeLivro);
      let continuar = readlinesync.question(
        "Deseja adicionar outro livro? (s/n): "
      );
      while (continuar.toLowerCase() === "s") {
        // entao enquanto a resposta = sim, o loop continua
        const nomeNovo = readlinesync.question("\nDigite o nome do cliente: "); // nova variavel para armazenar novo(s) nome(s)
        console.log(`\nCliente foi adicionado na Fila!\n`);
        pilha.push; // cliente adicionado com sucesso.
        continuar = readlinesync.question(
          // loop final para saber se continua ou nao
          "Deseja adicionar outro livro? (s/n): "
        );
      }
      break;
    case 2:
      console.log("==== Lista de Livros ====");
      pilha.printStack();
      // Voltar Menu.
      let voltar2 = readlinesync.question("\nDeseja voltar ao menu? (s/n): ");
      if (voltar2.toLowerCase() === "s") {
        break;
      } else {
        console.log("Saindo...");
        process.exit(0);
      }
    case 3:
      if (pilha.isEmpty()) {
        console.log("A pilha está vazia!");
      } else {
        pilha.printStack();
      }
      break;
    case 0:
      console.log("==== Programa sendo encerrado... ====");
      process.exit(0);
    default:
      console.log("Opcão Invalida, tente novamente!");
      break;
  }
}
