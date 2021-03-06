import * as readline from 'readline'
import { stdin as input, stdout as output } from 'process'
const rl = readline.createInterface({ input, output })
const question = q => new Promise((rs, rj) => rl.question(q, a => rs(a)))

let soma = 0
let count = 0
let media

while (true) {
    let strNota = await question('Insira o valor ' + (count + 1) + ' ou (N) para realizar as médias: ')
    
    if (strNota.toUpperCase() == 'N') {
        break
    }
    
    let nota = parseFloat(strNota)

    if (isNaN(nota)) {
        console.log("Por favor digite um numero valido ou N")
        continue
    }

    if (nota <= 10 && nota > 0) {
        soma = soma + nota
        count++
    } else {
        console.log("Voce inseriu um valor maior que 10 ou menor que 0. Insira valores dentro do padrão.")
    }
}

if( count == 0){
    console.log("Voce saiu do programa :)")
    process.exit()
}

media = soma / count
console.log('A média dos valores é: ', media)
process.exit()
