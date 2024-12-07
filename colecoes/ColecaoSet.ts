import readlinesync = require('readline-sync')

const frutas: Set<string> = new Set<string>();

frutas.add("Banana")
frutas.add("Maça")
frutas.add("Caqui")
frutas.add("Banana")
frutas.add("Manga")

console.table(frutas)

console.log('A fruta Morango existe? ', frutas.has('Morango'))

frutas.delete('Caqui')

console.table(frutas)

let setOrdenado: Array<string> = Array.from(frutas).sort()

console.table(setOrdenado)








    
