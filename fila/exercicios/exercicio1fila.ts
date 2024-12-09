import { Queue } from "../Queue";
import readlinesync = require("readline-sync");

const fila = new Queue<string>(); 

// MENU
while (true) {
  console.log("\n**********************************************\n");
  console.log("1 - Adicionar Cliente na Fila");
  console.log("2 - Listar todos os Cliente");
  console.log("3 - Retirar Cliente da Fila");
  console.log("0 - Sair");
  console.log("\n**********************************************\n");

  const opcao = readlinesync.questionInt("Digite sua opcao: ");

  // SWITCH CASE DAS OPCOES
  switch (opcao) {
    case 1: // NOVO CLIENTE.
      console.clear()
      const nome = readlinesync.question("\nDigite o nome do cliente: "); // inserir nome cliente.
      console.log(`\nCliente Adicionado!\n`);
      fila.enqueue(nome); // Cliente adicionado com sucesso.
      let continuar = readlinesync.question( 
        "Deseja adicionar outro cliente? (s/n): "
      );
      while (continuar.toLowerCase() === "s") { // entao enquanto a resposta = sim, o loop continua
        const nomeNovo = readlinesync.question("\nDigite o nome do cliente: "); // nova variavel para armazenar novo(s) nome(s)
        console.log(`\nCliente foi adicionado na Fila!\n`);
        fila.enqueue(nomeNovo); // cliente adicionado com sucesso.
        continuar = readlinesync.question( // loop final para saber se continua ou nao
          "Deseja adicionar outro cliente? (s/n): "
        );
      }
      break;
    case 2: // LISTAR CLIENTE.
      console.clear() 
      console.log("\n==== Lista de todos clientes: ====\n");
      fila.printQueue(); // mostra todos clientes
      let voltar2 = readlinesync.question("\nDeseja voltar ao menu? (s/n): ");
      // Voltar Menu.
      if (voltar2.toLowerCase() === "s") {
        break; 
      } else {
        console.log("Saindo...");
        process.exit(0);
      }
      break;
    case 3: // CHAMAR CLIENTE.
      console.clear()   
      if (fila.isEmpty()) { // checagem para saber se a fila possui algum cliente.
        console.log("A Fila Está Vazia!");
      } else {
        console.log(`\n==== Cliente foi chamado com sucesso! ====\n`);
        fila.dequeue(); // chama o cliente na ordem de chegada (FIFO)
        console.log("==== Fila: ====\n");
        fila.printQueue(); // mostra os clientes restantes
        // Voltar Menu.
        let voltar3 = readlinesync.question("\nDeseja voltar ao menu? (s/n): ");
        if (voltar3.toLowerCase() === "s") {
          break;
        } else {
          console.log("Saindo...");
          process.exit(0);
        }
        break;
      }
    case 0: // DESLIGAR PROGRAMA.
      console.clear()   
      console.log("==== Desligando o programa. ====");
      process.exit(0);
    default:
      console.log('Opcão Invalida, tente novamente.')
  }
}
