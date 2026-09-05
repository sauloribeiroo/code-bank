let repeat = true;


function greet() {
    const username = window.prompt('Digite seu nome: ');

    if (!username) {
        if (username !== '') {
            repeat = false;
            return window.alert("Operação cancelada")
        }


        return window.alert("Ola! Seja bem vindo")
    }

    window.alert("Ola " + username + " Seja bem vindo")
}



greet();

let balance = 0;

const statement = [];

const operations = {
    check: () => {
        alert('Saldo Atual: R$ ' + balance);
    },
    deposit: () => {
        const response = window.prompt('Valor do deposito:')

        if (response === null) {
            return window.alert('Operacao cancelada');
        };

        const value = Number(response);

        if (value < 0) {
            window.alert('Operação negada')
            return operations.deposit();
        } else if (isNaN(value)) {
            window.alert('Operação negada')
            return operations.deposit();
        }

        balance = balance + value;

        statement[statement.length] = {
            type: 'Deposito',
            value: value
        };

        window.alert("Saldo Atual: R$ " + balance)



    },
    cashout: () => {
        const response = (window.prompt('Valor do saque:'))

        if(response === null){
            return window.alert('Operacao negada');
        }

        const value = Number(response);

        if (value < 0) {
            window.alert('Operação negada')
            return operations.cashout();
        } else if (isNaN(value)) {
            window.alert('Operação negada')
            return operations.cashout();
        } else if (value > balance) {
            window.alert('Saldo indisponivel')
            return operations.cashout();
        }

        balance = balance - value;

        statement[statement.length] = {
            type: 'Saque',
            value: value
        };


        window.alert("Saldo Atual: R$ " + balance)
    },
    statement: () => {
        if (statement.length === 0) {
            return window.alert('Nenhuma transação realizada')
        }

        let text = 'Extrato:\n\n'
        for (let i = 0; i < statement.length; i++) {
            text += `${statement[i].type} = R$ ${statement[i].value}\n`
        }
    },
    exit: () => {
        const  response = window.confirm('Deseja realmente sair?');

        if (!response){
            return;
        }

        window.alert("Foi um prazer atende-lo")
        repeat = false;
    },
    invalid: () => {
        window.alert("Número inválido.")
    }
}

while (repeat) {
    const operation = Number(window.prompt(`
    Escola uma operação
    
    1 - Consultar
    2 - Depositar
    3 - Sacar
    4 - Extrato
    5 - Sair

    0 - Cancelar
    `));

    if (operation === 0) {
        window.alert('Operação cancelada')
        repeat = false;
    } else if (isNaN(operation)) {
        window.alert('Digite um numero válido')
    } else if (isNaN(operation === '')) {
        window.alert('Digite um numero válido')
    } else {

        switch (operation) {
            case 1: operations.check(); break;
            case 2: operations.deposit(); break;
            case 3: operations.cashout(); break;
            case 4: operations.statement(); break;
            case 5: operations.exit(); break;

            default: operation.invalid();
        }
    }




}


