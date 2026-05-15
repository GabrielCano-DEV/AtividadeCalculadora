const prompt = require('prompt-sync')();

// = COMENTÁRIOS


//FUNÇÃO PARA MOSTRAR O MENU NA TELA

function menu(){
    console.log("-------------------------------")
    console.log("          CALCULADORA          ")
    console.log("-------------------------------")
    console.log("*=============================*")
    console.log("| 0 - SAIR [/]                |")
    console.log("| 1 - SOMAR [+]               |")
    console.log("| 2 - SUBTRAIR [-]            |")
    console.log("| 3 - MULTIPLICAR [*]         |")
    console.log("| 4 - DIVIDIR [/]             |")
    console.log("| 5 - CALCULAR IMC            |")
    console.log("| 6 - CONVERSÃO ($ ----> R$)  |")
    console.log("*=============================*")

}
menu()

function somar(){
    let n1 = parseInt(prompt("Digite o primeiro numero: "))
    let n2 = parseInt(prompt("Digite o segundo numero: "))
    console.log(`Sua soma ${n1} + ${n2} = ${n1+n2}`)
    menu()
}


function subtrair(){
    let n1 = parseInt(prompt("Digite o primeiro numero: "))
    let n2 = parseInt(prompt("Digite o segundo numero: "))
    console.log(`Sua subtração ${n1} - ${n2} = ${n1-n2}`)
    menu()
}


function multiplicar(){
    let n1 = parseInt(prompt("Digite o primeiro numero: "))
    let n2 = parseInt(prompt("Digite o segundo numero: "))
    console.log(`Sua multiplicação ${n1} * ${n2} = ${n1*n2}`)
    menu()
}


function dividir(){
    let n1 = parseFloat(prompt("Digite o primeiro numero: "))
    let n2 = parseFloat(prompt("Digite o segundo numero: "))
    console.log(`Sua divisão ${n1} / ${n2} = ${n1/n2.toFixed(2)}`)
    menu()
}


function calculoImc(){
        let peso = parseFloat(prompt("Informe seu peso atual: "))
        let altura = parseFloat(prompt("Digite a sua altura (metros): "))
        let imc = (peso/(altura*altura)).toFixed(2)
        console.log(`O seu peso é ${peso}Kg, a sua altura é ${altura}M e seu índice de massa corporal é ${imc}`)
        if(imc < 18.5){
            console.log(`O seu imc é ${imc}e sua classificação é: Abaixo do peso normal! Tenha cuidado.`)
        }
        else if(imc >= 18.5 && imc <= 24.9){
            console.log(`O seu imc é ${imc} e sua classificação é: Peso Normal! Mantenha-se com saúde.`)    
        }
        else if(imc >= 25 && imc <= 29.9){
            console.log(`O seu imc é ${imc} e sua calssificação é: Excesso de peso! Busque se manter ativo fisicamente.`)
        }
        else if(imc >= 30.0 && imc <= 34.9){
            console.log(`O seu imc é ${imc} e sua classificação é: Obesidade Classe I! Busque perder peso.`)
        }
        else if(imc >= 35.0 && imc <= 39.9){
            console.log(`O seu imc é ${imc} e sua calssificação é: Obesidade Classe II! Atente-se, busque perder peso.`)
        }
        else if(imc >= 40){
            console.log(`O seu imc é ${imc} e sua classificação é: Obesidade Classe III! O estado atual é perigoso, busque perder peso.`)
        }
}

function conversor(){
    let dolares = parseFloat(prompt(`Digite a quantia desejada para converter: `))
    let cotacao = 5.07
    const reais = dolar * cotacao
    console.log(`Sua conversão de ${reais}R$ resulta em ${dolar}.`)
    console.log(`Atualmente o $ em R$ = ${cotacao}`)
}


//ESTRUTURA DE REPETIÇÃO

let opcao = 9

while(opcao != 0){
    opcao = parseInt(prompt("Deseja escolher uma operação? "))

    if(opcao == 1){
        somar()
    } else if(opcao == 2){
        subtrair()
    } else if(opcao ==3){
        multiplicar()
    } else if (opcao ==4){
        dividir()
    } else if (opcao ==5){
        calculoImc()
    } else if(opcao ==6){
        conversor()
    } else {
        console.log(`Você digitou algo errado!`)
        menu()
    }
}