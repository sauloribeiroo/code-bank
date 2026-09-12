
const exit = document.querySelector('#exit');
const check = document.querySelector('#check');
const deposit = document.querySelector('#deposit');
const cashout = document.querySelector('#cashout');
const statement = document.querySelector('#statement');


let balance = 0;

const statementList = [];


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

        statementList[statementList.length] = {
            type: 'Deposito',
            value: value
        };

        window.alert("Saldo Atual: R$ " + balance)



    },
    cashout: () => {
        const response = (window.prompt('Valor do saque:'))

        if (response === null) {
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

        statementList[statementList.length] = {
            type: 'Saque',
            value: value
        };


        window.alert("Saldo Atual: R$ " + balance)
    },
    statement: () => {
        if (statementList.length === 0) {
            return window.alert('Nenhuma transação realizada')
        }

        let text = 'Extrato:\n\n'
        for (let i = 0; i < statementList.length; i++) {
            text += `${statementList[i].type} = R$ ${statementList[i].value}\n`
        }

        window.alert(text)
    },
    exit: () => {
        const response = window.confirm('Deseja realmente sair?');

        if (!response) {
            return;
        }

        const username = sessionStorage.getItem('username');

        if (!username) {
            window.alert("Foi um prazer atende-lo")
        } else 
        window.alert("Foi um prazer atende-lo " + username)

        exit.disabled = true;
        exit.textContent = 'Saindo...'


        setTimeout(() => {
            window.location.href = '../index.html';
        }, 3000);
    }
}


exit.addEventListener('click', () => {
    operations.exit();
})

check.addEventListener('click', () => {
    operations.check();
})

deposit.addEventListener('click', () => {
    operations.deposit();
})

cashout.addEventListener('click', () => {
    operations.cashout();
})

statement.addEventListener('click', () => {
    operations.statement();
})
