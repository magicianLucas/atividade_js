let senha = 123
let senhaUser = prompt('Digite sua senha')
if(senha == senhaUser){
    console.log('Caminho Feliz')
}
else{
    //Quando a senha for diferente
    //permitir que o usuário digite a senha até 3 vezes e fazer a validação

    while(senha != senhaUser ){
        senhaUser <3
        console.log('Tente novamente')
    }
}