function teste () {
    const username = window.prompt('Digite seu nome: ');

    if (!username){
        if (username !== '') return window.alert("Operação cancelada")

        return window.alert("Ola! Seja bem vindo")
    }

    window.alert("Ola " + username + " Seja bem vindo")
}

teste();