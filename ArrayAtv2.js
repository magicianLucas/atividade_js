//Atributos: Senha -> String; Agêcia -> númerica; Nº da conta -> númerica; titular -> strings; tipo(PJ ou PF) -> Strings; Saldo -> númerica
// use metodos para sacar, depositar, fazer emprestimo e ver o saldo

let conta_bancaria = {
    senha: '12345',
    agencia: 50,
    n_conta: 666,
    titular: 'Lucas',
    tipo: 'PF',
    saldo: 1000, 
    emprestimo:[],

    sacar: function(valor, senha) {
        // Verifica se a senha fornecida é correta
        if (senha == senha) {
            // Verifica se há saldo suficiente para o saque
            if (this.saldo >= valor) {
                this.saldo -= valor;
                console.log('Saque realizado com sucesso');
            } else {
                console.log('Saldo insuficiente!');
            }
        } else {
            console.log('Senha incorreta');
        }
    },

    depositar: function(valor, senha) {
        if(senha === senha){

        
            this.saldo += valor;
            console.log('Depósito Realizado com Sucesso!')
        }
        else{
            console.log('Senha incorreta'); 
        }
    },
    consultarSaldo:function(senha){
        if(conta_bancaria.senha == senha){
            console.log(`Saldo: R$ ${conta_bancaria.saldo}`)
        }
        else{
            console.log('Senha incorreta');
        }
    },
    fazerEmprestimo: function(valor, senha){
        if(senha == conta_bancaria.senha){
            let qtd_parcelas = 24
            let juros = 0.02
            let parcela = (vlaor/qtd_parcelas)*(1+juros)
            conta_bancaria += saldo
            let infomracoe_emprestimo = [valor, qtd_parcelas, parcela, juros]
            conta_bancaria.emprestimo.push(infomracoe_emprestimo)
            console.log(`Empréstimo de R$ ${valor} concedido. Saldo atual da conta é ${conta_bancaria.sa}`)
        }
        else{
            console.log(`SEnha errada`)
        }
    }

}


