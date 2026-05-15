const prompt = require('prompt-sync')();

// array vazio 
    
    let filmes = []
    let pergunta = "sim"

    while(pergunta == "sim" || pergunta == "SIM" || pergunta == "Sim"){
        filmes.push(prompt("Digite o nome do filme: "))
        pergunta = prompt("Deseja adicionar um novo filme? ")
    }

    console.log(`Os filmes listados são: ${filmes}`)



