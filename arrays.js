const prompt = require('prompt-sync')();

    console.log("Usando o FOR!!")

    let filmes = ["Planeta dos Macacos" , "Velozes e Furiosos"]

            for(let indice = 0; indice < filmes.length; indice++){
                console.log(`Posição ${indice} filme : ${filmes[indice]}`)
}

    console.log("Usando o WHILE!!")

        let repeticao = 0

            while(repeticao < filmes.length){
                console.log(`Posição ${repeticao} filme: ${filmes[repeticao]}`)
        repeticao++
    }
