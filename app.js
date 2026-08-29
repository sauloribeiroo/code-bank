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

const operations = {
    check: () => {
        alert('Saldo Atual: R$ ' + balance);
    },
    deposit: () => {
        const value = Number(window.prompt('Valor do deposito:'))

        balance = balance + value;

        window.alert("Saldo Atual: R$ " + balance)
    },
    cashout: () => {
        const value = Number(window.prompt('Valor do saque:'))

        balance = balance - value;

        window.alert("Saldo Atual: R$ " + balance)
    },
    exit: () => {
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
    4 - Sair

    0 - Cancelar
    `));

    if (operation === 0) {
        window.alert('Operação cancelada')
        repeat = false;
    } else if (isNaN(operation)) {
        window.alert('Digite um numero válido')
    } else if (isNaN(operation === '' )) {
        window.alert('Digite um numero válido')
    }



    switch (operation) {
        case 1: operations.check(); break;
        case 2: operations.deposit(); break;
        case 3: operations.cashout(); break;
        case 4: operations.exit(); break;

        default: operation.invalid(); 
    }

}


