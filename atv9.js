//Função que recebe como parâmetro o valor inicial e final de um intervalo
// e retorne a soma dos números do intervalo 

function somar_nummeros_intervalo (inicial = 0, final = 0){
    let soma = 0

    for (let i = inicial; i <= final; i++){
        soma += i
    }
    return soma
}



let soma1a100 = somar_nummeros_intervalo(1,100)
console.log(soma1a100)
console.log(somar_nummeros_intervalo(2,4))