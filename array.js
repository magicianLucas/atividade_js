
// let enderecoArry = ['Rua', 'Bairro', 'Cidade', 'Estado', 'CEP']
// for(let i = 0; i<enderecoArry.length;i++){
//     console.log(enderecoArry[i])
// }


// let endereco = { rua: 'Rua', bairro: 'Bairro', cidade: 'Cidade', estado: 'Estado', cep: 'CEP'}

// console.log(enderecoArry[0])
//  console.log(endereco.rua)

//Crie um objeto chamado pessoa com as propriedades nome, idade, altura e peso

let pessoa = {
    nome: 'Lucas',
    idade: '23',
    altura: 1.65,
    peso: 54,
    calcular_imc: function(){return pessoa.peso/(pessoa.altura**2)},
    chaves: pessoa.keys,
    tamanho_objeto: pessoa.length

}

for (let chave of pessoa){
    console.log(nome.chave)
}
// pessoa.corFavorita = 'Roxo'

// delete pessoa.idade

// console.log(pessoa)


