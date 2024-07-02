//Crie uma função que armazena 3 notas, lidas do usuário, em um array. O último elemento do array
//será a media calculada a partir das notas informadas pelo usuário.
//Retorne o array
function media3notas(){
    let notas = []
    for (let i = 1; i <=3; i++) {
        
        notas[i - 1] = Number(prompt(`Digite a sua ${i}º nota: `))
    }

    notas[notas.length] = (notas[0] + notas[1] + notas[2]) /notas.length
    return notas
}
// let arrayNotas = (media3notas()[2])
arrayNotas = [1, 2, 3]
console.log(arrayNotas)
arrayNotas[3] = 'A'
//adiciona no final
arrayNotas.push('B')
console.log(arrayNotas)

//excluir o ultimo elemento 
let excluido = arrayNotas.pop()
console.log(arrayNotas)
console.log(excluido)

//adiciona ao iniciar
arrayNotas.unshift('inicio')
console.log(arrayNotas)

//remove do inicio
console.log(arrayNotas.shift())
console.log(arrayNotas)



