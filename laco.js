//repetir 3x São Longuinho
console.log('São Longuinho')
console.log('São Longuinho')
console.log('São Longuinho')

let quantasVezes = 3
let i = 1
let acumulador = 0

//a cada vez que chamar São Longuinho receberá 1 milhão de reais
while(i<= quantasVezes){
    console.log('São Longuinho')
    console.log('Ganhou mais 1 milhão')
    acumulador += 1000000
    i+=1
}

//escreva de 0 a 10 de 2 em 2
let numero = 0
while(numero <= 10){
    console.log(numero)
    numero+=2
}

//some todos os números pares de 0 até 100 e mostre no console
let j = 0
let final = 100
let soma 
while (j <= final){
    if(j%2==0 || j%5==0){
    soma += j
    j += 1
    }
}

//fazer a soma de todos os números pares ou divisíveis por 5 no intervalo de 0 a 100
