let senhaCorreta = "123";
let tentativas = 3;

// Permitir que o usuário digite a senha até 3 vezes e fazer a validação
while (tentativas > 0) {
    let senhaUser = prompt('Digite sua senha:');

    if (senhaUser === senhaCorreta) {
        console.log('Senha correta! Caminho Feliz.');
        break; // Sai do loop se a senha estiver correta
    } else {
        tentativas--; // Reduz o número de tentativas restantes
        if (tentativas > 0) {
            console.log(`Senha incorreta! Você ainda tem ${tentativas} tentativa(s) restante(s).`);
        } else {
            console.log('Tentativas esgotadas. Acesso negado.');
        }
    }
}




