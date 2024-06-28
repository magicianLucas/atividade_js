//Faça um programa que determine e mostre os cinco primeiros múltiplos de 3, considerando números maiores que 0. 

let contador = 0
let numero  = 3


while (contador <= 4) {
    if (numero%3 == 0) {
        console.log(numero)
        contador++ 
    }
    numero++; 
}
