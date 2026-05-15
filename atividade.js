const prompt = require('prompt-sync')();

// = COMENTÁRIOS


//FUNÇÃO PARA MOSTRAR O MENU NA TELA

function menu() {
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
    console.log("| 6 - CONVERSÃO ($ -> R$)     |")
    console.log("| 7 - MÉDIA NOTAS             |")
    console.log("| 8 - TABUADA                 |")
    console.log("| 9 - CONVERSÃO (M -> CM)     |")
    console.log("| 10 - CONVERSÃO (C -> F)     |")
    console.log("*=============================*")

}
menu()

function somar() {
    let n1 = parseInt(prompt("Digite o primeiro numero: "))
    let n2 = parseInt(prompt("Digite o segundo numero: "))
    console.log(`Sua soma ${n1} + ${n2} = ${n1 + n2}`)
    menu()
}


function subtrair() {
    let n1 = parseInt(prompt("Digite o primeiro numero: "))
    let n2 = parseInt(prompt("Digite o segundo numero: "))
    console.log(`Sua subtração ${n1} - ${n2} = ${n1 - n2}`)
    menu()
}


function multiplicar() {
    let n1 = parseInt(prompt("Digite o primeiro numero: "))
    let n2 = parseInt(prompt("Digite o segundo numero: "))
    console.log(`Sua multiplicação ${n1} * ${n2} = ${n1 * n2}`)
    menu()
}


function dividir() {
    let n1 = parseFloat(prompt("Digite o primeiro numero: "))
    let n2 = parseFloat(prompt("Digite o segundo numero: "))
    console.log(`Sua divisão ${n1} / ${n2} = ${n1 / n2.toFixed(2)}`)
    menu()
}


function calculoImc() {
    let peso = parseFloat(prompt("Informe seu peso atual: "))
    let altura = parseFloat(prompt("Digite a sua altura (metros): "))
    let imc = (peso / (altura * altura)).toFixed(2)
    console.log(`O seu peso é ${peso}Kg, a sua altura é ${altura}M e seu índice de massa corporal é ${imc}`)
    if (imc < 18.5) {
        console.log(`O seu imc é ${imc}e sua classificação é: Abaixo do peso normal! Tenha cuidado.`)
    }
    else if (imc >= 18.5 && imc <= 24.9) {
        console.log(`O seu imc é ${imc} e sua classificação é: Peso Normal! Mantenha-se com saúde.`)
    }
    else if (imc >= 25 && imc <= 29.9) {
        console.log(`O seu imc é ${imc} e sua calssificação é: Excesso de peso! Busque se manter ativo fisicamente.`)
    }
    else if (imc >= 30.0 && imc <= 34.9) {
        console.log(`O seu imc é ${imc} e sua classificação é: Obesidade Classe I! Busque perder peso.`)
    }
    else if (imc >= 35.0 && imc <= 39.9) {
        console.log(`O seu imc é ${imc} e sua calssificação é: Obesidade Classe II! Atente-se, busque perder peso.`)
    }
    else if (imc >= 40) {
        console.log(`O seu imc é ${imc} e sua classificação é: Obesidade Classe III! O estado atual é perigoso, busque perder peso.`)
    }
    menu()
}


function conversor() {
    let dolares = parseFloat(prompt(`Digite a quantia desejada para converter: `))
    let cotacao = 5.07
    const reais = dolar * cotacao
    console.log(`Sua conversão de ${reais}R$ resulta em ${dolar}.`)
    console.log(`Atualmente o $ em R$ = ${cotacao}`)
    menu()
}


function media() {
    let nota1 = parseFloat(prompt(`Digite a sua primeira nota: `))
    let nota2 = parseFloat(prompt(`Digite a sua segunda nota: `))
    let nota3 = parseFloat(prompt(`Digite a sua terceira nota: `))
    let nota4 = parseFloat(prompt(`Digite a sua quarta nota: `))
    let media = ((nota1 + nota2 + nota3 + nota4) / 4).toFixed(2)
    if (media < 0 || media > 100 || nota1 < 0 || nota1 > 100 || nota2 > 100 || nota2 < 0 || nota3 > 100 || nota3 < 0 || nota4 > 100 || nota4 < 0) {
        console.log("Você digitou algo errao tente novamente...")
    } else if (media >= 70) {
        console.log("Você foi aprovado, parabéns!")
        console.log(`A sua média é de ${media}`)
    } else if (media > 70) {
        console.log("Você foi reprovado...")
        console.log(`A sua média é de ${media}`)
    }
    menu()
}


function tabuada() {
    let numero = prompt(`Você deseja exibir a tabuada de qual número? `)
    for (let contador = 0; contador <= 10; contador++) {
        console.log(`${numero} x ${contador} = ${numero * contador}`)
    }
    menu()
}


function conversorM() {
    let metros = parseInt(prompt("Digite quantos metros você quer converter: "))
    const conversao = metros * 100
    console.log(`A sua conversão de ${metros} para centimetros é = ${conversao}`)
    menu()
}


function temperatura() {
    let celsius = parseFloat(prompt("Digite quantos graus CelsiUs(°C) você deseja converter para Fahrenheit (°F)"))
    const tempF = (celsius * 1.8) + 32
    console.log(`A sua conversão de ${celsius}°C para Fahrenheit(°F) é = ${tempF}`)
    menu()
}


//ESTRUTURA DE REPETIÇÃO

let opcao = 9

while (opcao != 0) {
    opcao = parseInt(prompt("Deseja escolher uma operação? "))

    if (opcao == 1) {
        somar()
    } else if (opcao == 2) {
        subtrair()
    } else if (opcao == 3) {
        multiplicar()
    } else if (opcao == 4) {
        dividir()
    } else if (opcao == 5) {
        calculoImc()
    } else if (opcao == 6) {
        conversor()
    } else if (opcao == 7) {
        media()
    } else if (opcao == 8) {
        tabuada()
    } else if (opcao == 9) {
        conversorM()
    } else if (opcao == 10) {
        temperatura()
    } else {
        console.log(`Você digitou algo errado!`)
        menu()
    }
}