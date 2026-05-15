const prompt = require('prompt-sync')();

//function exibirMensagem(){
//    console.log("Hoje está chovendo")
//    console.log("Bom para dormir")
 //   console.log("Tomar um cafezinho com pao de queijo")
//}

//for (let index = 0; index < 1 ; index++){
 //   exibirMensagem()
//}

//SOMA

let n1 = parseInt(prompt("Digite o primeiro numero: "))
let n2 = parseInt(prompt("Digite o segundo numero: "))

    function somarNumeros(n1,n2){
        console.log(`A sua soma ${n1} + ${n2} = ${n1+n2}`)
}

somarNumeros(n1 , n2)

//SUBTRAÇÃO

n1 = parseInt(prompt("Digite o primeiro numero: "))
n2 = parseInt(prompt("Digite o segundo numero: "))

    function subtrairNumeros(n1,n2){
        console.log(`sua subtração de ${n1} - ${n2} = ${n1-n2}`)
}

subtrairNumeros(n1 , n2)

//MULTIPLICAÇÃO

n1 = parseInt(prompt("Digite o primeiro numero: "))
n2 = parseInt(prompt("Digite o segundo numero: "))

    function multiplicarNumeros(n1,n2){
        console.log(`sua multiplicação de ${n1} * ${n2} = ${n1*n2}`)
}

multiplicarNumeros(n1 , n2)

//DIVISÃO

n1 = parseInt(prompt("Digite o primeiro numero: "))
n2 = parseInt(prompt("Digite o segundo numero: "))


    function dividirNumeros(n1,n2){
        console.log(`sua divisão de ${n1} / ${n2} = ${n1/n2}`)
}

dividirNumeros(n1 , n2)






//function abastecerCarro(local,valor,combustivel){
//    console.log(`Abastecer no ${local},`)
//    console.log(`Irei colocar ${valor} reais,`)
//    console.log(`Vou abastecer com ${combustivel}.`)
//}
//abastecerCarro("Posto da esquina" , 200000000 , "Etanol")