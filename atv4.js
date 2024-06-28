// Faça um programa que peça ao usuário para digitar 10 valores e some-os
let resultado = 0

for (let i = 0; i < 10 ; i++) {
    let numero = Number(prompt(`Digite o ${i + 1}º número:`))
    resultado = resultado + numero
  }
  console.log(resultado)