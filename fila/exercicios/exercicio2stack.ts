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
    case 1: // ADICIONAR LIVRO
      console.clear();
      const nomeLivro = readlinesync.question(
        "Digite o nome do livro que deseja adicionar: "
      );
      pilha.push(nomeLivro); // adiciona livro a pilha
      console.log('\nLivro foi adicionado a Pilha!')
      let continuar = readlinesync.question(
        "\nDeseja adicionar outro livro? (s/n): "
      );
      while (continuar.toLowerCase() === "s") {
        // entao enquanto a resposta = sim, o loop continua
        const nomeNovo = readlinesync.question("\nDigite o nome do Livro: "); // nova variavel para armazenar novo(s) livro(s)
        console.log(`\nLivro foi adicionado a Pilha!\n`);
        pilha.push(nomeNovo); // livro adicionado com sucesso.
        continuar = readlinesync.question(
          // loop final para saber se continua ou nao
          "Deseja adicionar outro livro? (s/n): "
        );
      }
      break;
    case 2: // LISTAR LIVROS
      console.clear();
      console.log("==== Lista de Livros ====");
      pilha.printStack(); // printa todos os livros da pilha
      // Voltar Menu.
      let voltar2 = readlinesync.question("\nDeseja voltar ao menu? (s/n): ");
      if (voltar2.toLowerCase() === "s") {
        break;
      } else {
        console.log("Saindo...");
        process.exit(0);
      }
    case 3: // RETIRAR LIVRO DA PILHA
      console.clear();
      if (pilha.isEmpty()) {
        console.log("\nA pilha está vazia!\n");
      } else {
        console.clear();
        console.log("==== Pilha:====");
        pilha.printStack();
        console.log("==== Um Livro Foi Retirado da Pilha! ====");
        pilha.pop();
      }
      // Voltar Menu.
      let voltar3 = readlinesync.question("\nDeseja voltar ao menu? (s/n): ");
      if (voltar3.toLowerCase() === "s") {
        break;
      } else {
        console.log("Saindo...");
        process.exit(0);
      }
      break;
    case 0: // SAIR DO PROGRAMA
      console.clear();
      console.log("==== Programa sendo encerrado... ====");
      process.exit(0);
    default:
      console.log("Opcão Invalida, tente novamente!");
      break;
  }
}
