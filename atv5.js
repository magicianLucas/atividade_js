//Uma loja tem uma política de descontos de acordo com o valor da compra do  cliente. Os descontos
//começam acima dos R$500,00 A cada 100 reais acima dos R$500,00 o cliente ganha 1% de desconto
//cumulativo até 25%. Por exemplo: R$ 500 = 1% || R$ 600 = 2%... etc.
//Faça um programa que exiba essa tabela de descontos no seguinte formato: 
//Valor da compra - porcentagem de desconto - valor final


let min = 1
let max = 25
let valor_compra = 500.00
let incremento_compra = 100.00

for (let i = min; i <= max ; i++) {
    let valor_final = valor_compra - ((valor_compra * i)/100)
   console.log(`${valor_compra} - ${i}% - valor final ${valor_final}`)
   valor_compra += incremento_compra
    
}