let nome = prompt('Digite seu nome:')
let tempoEmpresa = Number(prompt('Digite 1: para um ano ou menos na empresa \nDigite 2: para 2 anos a 5 na empresa \nDigite 3: para até 10 anos na empresa \nDigite 4: para mais de 10 anos na empresa'))
let salario = Number(prompt(`Digite o valor do seu salário: `))
switch (tempoEmpresa) {
    case '1':
        console.log(`Sua bonificação é de ${boni}`)
        break;
    case '2':
        escolha = cincoAnos * 0.10
        console.log(`Sua bonificação é de ${boni2}`)
        break;
    case '3':
        escolha = dezAnos * 0.15
        console.log(`Sua bonificação é de ${boni3}`)
        break;
    case '4':
        escolha = maisDez * 0.20
        console.log(`Sua bonificação é de ${boni4}`)
        break;
    default:
        break;
}