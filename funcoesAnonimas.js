// function nomeFuncao(){
//     console.log('Fiz algo!')
// }

// function nomeOutraFuncao(x = '1', x){
//     console.log('Fiz algo!' + x + y)
// }
// nomeFuncao('segundo', 'primeiro')

//funçõe de seta
// console.log(() => 'fiz algo')

//call back (uma função usada para chamar outra)
// function calculadora(n1, n2, funcao){
//     return (funcao(n1 + n2))
// }
// function imprimir(algo){
//     console.log(algo)
// }
// function somar(n1, n2) {
//     let resultado = n1 + n2
//     return resultado
// }


// let soma = calculadora (2, 2, somar)
// console.log(soma)
// calculadora (10, 3, imprimir)

function dizerOiRecife(nome){
    console.log(`${nome}, ei boy!`)
}
function dizerOiFortaleza(nome){
    console.log(`${nome}, ei man!!`)
}
function dizerOiSalvador(nome){
    console.log(`${nome}, ei pivete!`)
}
function falarCidade(nome, funcao) {
    funcao(nome)
}
falarCidade('Cleitin', dizerOiRecife)
falarCidade('Cleitin', dizerOiFortaleza)
falarCidade('Cleitin', dizerOiSalvador)