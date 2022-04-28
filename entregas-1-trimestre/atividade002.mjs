const readline = require('readline')
const { stdin: input, stdout: output } = require('process')
const rl = readline.createInterface({ input, output })
 
async function main() {
  const question = question => new Promise((resolve, reject) => rl.question(question, answer => resolve(answer)))
 
  var numero = "" 
  var soma = 0
  var cont = 0
  
  while( numero.toLowerCase() != 'fim') {

    numero = await question ("Digite os valores para obter o calculo digite 'fim':")
     if(numero.toLowerCase() != 'fim'){
       soma += parseInt(numero)
       cont += 1
     }
  }

  media = soma / cont

  console.log ("A media é:", media)
}
 
main()
