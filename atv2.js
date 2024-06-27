//Intervalos de números
//Faça um programa que receba dez números e usando laços de repetição calcule
//e mostre a quantidade de números entre 30 e 90
let inicio = 30
let final = 90
let repetir = 10

let contagemNumIntervalo = 0
for (let i = 1; i <= 90; i++) {

    let numero = Number(prompt("Digite um número: "))
    if(numero<final && numero>inicio){
        contagemNumIntervalo += 1
        console.log(contagemNumIntervalo)
    }
}
console.log("Contagem dos números no intervalo" + contagemNumIntervalo)