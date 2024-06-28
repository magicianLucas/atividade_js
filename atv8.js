//Escreva um número que leia 10 números e escreva o menor valor lido e o maior lido
let numUser = prompt(`Digite o 1º número: `)

let numMaior = numUser
let numMenor = numUser
let qtd = 10

for (let i = 2; i <= qtd; i++ ) {
    numUser = prompt(`Digite o ${i}º número:`)
    if (numUser > numMaior) {
        numMaior = numUser
    } else if( numUser < numMenor){
        numMenor = numUser
    }

    console.log(qtd)
   
}