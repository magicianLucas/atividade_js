//benefícios sob tempo de empresa
let nome = prompt('Digite seu nome:')
let tempoEmpresa = Number(prompt('Digite seu tempo na empresa em anos \n (Apenas números).'))
let opcaoTempoEmpresa = Number(prompt('Digite 1: para um ano ou menos na empresa \n Digite 2: para 1 a 2 anos na empresa \nDigite 3: para 2 anos a 5 na empresa \nDigite 4: para até 10 anos na empresa \nDigite 5: para mais de 10 anos na empresa'))
let bFilhos = Number(prompt('Digite a quantidade de filhos menores de 7 anos \n (Apenas números)'))
let salarioBase = 9000.00

let bonus1

if (tempoEmpresa<1) {
    bonus1=0
}
 else if (tempoEmpresa >=1 && tempoEmpresa <= 2) {
    bonus1 = salarioBase*0.05
}
else if (tempoEmpresa>2 && tempoEmpresa<=5){
    bonus1 = salarioBase*0.1
}
else if (tempoEmpresa>5 && tempoEmpresa<=10){
    bonus1 = salarioBase*0.15
}
else if(tempoEmpresa > 10){
    bonus1 = salarioBase*0.2
}
else{
    bonus1 = 0
}
let bonus2
switch (opcaoTempoEmpresa) {
    case 1 :
        bonus2 = 0
        break;
    case 2 :
        bonus2 = salarioBase*0.5
        break;
    case 3 :
        bonus2 = salarioBase*0.1
        break;
    case 4 :
        bonus2 = salarioBase*0.15
        break;
    case 5 :
        bonus2 = salarioBase*0.20
            break;
    default:
        bonus2 = 0
        alert('O texto inseridoo no campo de bonificação não é apenas numérico')
    break    
              
}

//menos de 1 ano -----0%
//de 1 a 2 anos ------5%
//de 2 a 5 anos ------10%
//de 5 a 10 anos -----15%
//mais de 10 anos ----20%


//benefício por dependente
//500 reais por dependente menor de 7 anos

//VA ------------R$ 1000,00
//VT ------------R$ 200,00
let VA = 1000
let VT =200


//DESCONTOS
//INSS -------------9% do salárrio base
//FGTS -------------8% do salárrio base
let INSS = salarioBase * 0.09
let FGTS  = salarioBase * 0.08

//ccom base nos critérios, leia as informações de um funcionário e exiba na tela o total a receber descrevendo
//cada um dos custos, tanto benefícios quantos descontos por categoria
let salarioLiquido = salarioBase + (salarioBase*bonus1) + bFilhos + VA + VT - INSS - FGTS
document.write(`Apontamentos Folha de Pagamento <br>
                    <ul>
                        <li>${nome}</li>
                        <li>Salário Base: ${salarioBase} </li>
                        <li>Bônus por tempo de serviço: ${salarioBase*bonus1} </li>
                        <li>Auxílio Creche: ${bFilhos} </li>
                        <li>Vale Transporte: ${VT} </li>
                        <li>Vale Alimentação: ${VA} </li>
                        <li>Desconto INSS: ${INSS} </li>
                        <li>Desconto FGTS: ${FGTS} </li>
                        <li>Total a receber: ${salarioLiquido} </li>
                    </ul>
                `)

//const salario = 1200
//let result
//let nFilhos = Number(prompt('Digite a quantidade de filhos menores de 7 anos \n (Apenas números)'))
//switch (tempoEmpresa) {
//    case '1':
 //      if (tempoEmpresa <= 1) {
 //       result = salario*0 + (tempoEmpresa + nFilhos)
 //       console.log('Seu salário final é de' + result )
 //       
 //      } else {
 //       result = salario + tempoEmpresa
 //       console.log('Seu salário final é de' + result )
 //      }break
 //   case '2':
 //       if (tempoEmpresa <= 5 || tempoEmpresa >= 2 ) {
 //           result = salario*1.10 + (tempoEmpresa + nFilhos)
 //           console.log(`Sua bonificação é de ${result}`)
 //       } else {
 //           salario = tempoEmpresa*1.10
 //       }break
 //   case '3':
 //       if (tempoEmpresa = 10 ) {
 //           result = salario*1.15 + (tempoEmpresa + nFilhos)
 //           console.log(`Sua bonificação é de ${result}`)
 //       } else {
 //           result = salario*1.15 (tempoEmpresa + nFilhos)
 //           console.log(`Sua bonificação é de ${result}`)
 //       }break
 //   case '4':
 //       if (tempoEmpresa > 10) {
 //           result = salario*1.20 + (tempoEmpresa + nFilhos)
 //           console.log(`Sua bonificação é de ${result}`)
 //       } else {
 //           salario = tempoEmpresa* 1.20
 //           console.log(`Sua bonificação é de ${result}`)
 //       }
 //   default:
 //       break;
//}