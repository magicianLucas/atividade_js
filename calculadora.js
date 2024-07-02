//4 operações básicas em função, com dois parâmetros obrigatórios

//Função calculadora que recebe dois números e uma função como parâmetro e mostra
//o retorno da função alert para o usuário
function somar(n1, n2) {
    return n1 + n2;
}
function subtrair(n1, n2) {
    return n1 - n2;
}
function multiplicar(n1, n2) {
    return n1 * n2;
}
function dividir(n1, n2) {
    if (n2 !== 0) {
        return n1 / n2;
    } else {
        return 'divisão impossível, divisor é igual a 0';
    }
}
function calculadora(n1, n2, operacao) {
    let funcao = eval (operacao)
    let resultado = funcao(n1, n2)
    alert(resultado)
}

let num1 = Number(prompt('Digite um número:')); // valores entre 1 e 2
let num2 = Number(prompt('Digite um número:'));
let escolha = prompt('Digite o nome da operação: \n somar \n subtrair \n multiplicar \n dividir');
let resultado;

calculadora(num1, num2, escolha);


// switch (escolha) {
//     case '+':
//         resultado = num1 + num2
//         console.log(resultado)
//         break;
//     case '-':
//         resultado = num1 - num2
//         console.log(resultado)
//        break;
//    case '*':
//         resultado = num1*num2
//         console.log(resultado)
//         break;
//     case '/': 
//         if(num2 != 0){
//             resultado = num1 /num2
//             console.log(resultado)
           
//         }     
//         else{
//             resultado= 'Não é possível divisão por 0'
//             console.log(resultado)
//         } break;
//     default:
//        console.log('Não há suporte para a operação escolhida')
//         break;
// }
