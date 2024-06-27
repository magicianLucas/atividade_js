// let somaNotas = 0
// let media
// let i = 1 
// // aritimética -----> SOMA NOTAS / QTD NOTAS
// for (; i<=4;i++ ) {
//    somaNotas += Number(prompt(`Digite sua nota ${i}: `)) 
// }
// media = somaNotas / i-1

//ponderada --> (NOTA * PESO) + (NOTA * PESO) / SOMA PESOS

let media = 0
let somaNotas = 0
let pesos = 0
for (let i = 1; i<= 4; i++){
    if (i%2==0) {
        somaNotas += (Number(prompt(`Digite sua nota ${i}: `)*2))
        pesos+=2
    }
    else if(i==3){
        somaNotas += (Number(prompt(`Digite sua nota ${i}: `)*3))
        pesos+= 3
    
    }
     else {
        somaNotas += (Number(prompt(`Digite sua nota ${i}: `))) 
        pesos+=1
        
    }
    
}
media = somaNotas/pesos
console.log(media)