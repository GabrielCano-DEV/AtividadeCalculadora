const prompt = require('prompt-sync')();


let serie = []
let pergunta = "sim"

while(pergunta == "SIM" || pergunta == "Sim" || pergunta == "sim"){
    serie.push(prompt("Digite o nome da sua série: "))
    pergunta = prompt("Deseja informar uma nova série? ")
}


let repeticao = 0

while(repeticao < serie.length){
    console.log(`índice ${repeticao} - Está a série: ${serie[repeticao]}`)
repeticao++
}
    
    



