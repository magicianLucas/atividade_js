//Faça um programa que calcule e mostre a soma dos 50 primeiros números pares
let contador = 0
let numero  = 2
let soma = 0



// while (contador <= 48) {
//     if (numero %2 == 0) {
//         console.log(`Número par: ${numero}`)
//         soma += numero 
//         contador ++
//         numero += 2 
        
//     }
      // console.log(soma)
  
// }
for (let i = 2; i <= 50; i++) {
    if (i %2 == 0) {
        console.log(`Número par: ${i}`)
        soma += i
        // contador ++
        // numero += 2 
        
    }
  
    
}
console.log(soma)