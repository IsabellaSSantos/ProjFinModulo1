function zezefase1() {



    while (opcao !=1 && opcao !=2) {
        var opcao
        opcao = prompt("Qual opção?\n1 - No meio das vozes reconhece a da mamãe e vai em direção à porta pela qual sai o som.\n2 - Fica com medo e se distrai com um espaço do outro lado da sala que possui Tv passando desenhos e tem doces disponíveis para comer")

        if (opcao == 1) {
            location.href = "zeze2.html"
            break
        }
        else if (opcao == 2) {
            location.href = "../perdeu.html"
            break
        }
        else    {
            alert ("Por favor, escolha 1 ou 2.")
        }
    }
}

function zezefase2() {



    while (opcao !=1 && opcao !=2) {
        var opcao
        opcao = prompt("Qual opção?\n1 - Senta e começa a chorar\n2 - Começa a fazer vários clones de si e vai engatinhando em direção ao vilão.")

        if (opcao == 1) {
            location.href = "../perdeu.html"
            break
        }
        else if (opcao == 2) {
            location.href = "zeze3.html"
            break
        }
        else    {
            alert ("Por favor, escolha 1 ou 2.")
        }
    }
}

function zezefase3() {

    while (opcao !=1 && opcao !=2) {
        var opcao
        opcao = prompt("Qual opção?\n1 - Vai em direção a mamãe e chama por ela.\n2 - Lança um laser, com sua visão de calor, no Síndrome enquanto ele se distrai com os clones.")

        if (opcao == 1) {
            location.href = "../perdeu.html"
            break
        }
        else if (opcao == 2) {
            location.href = "../vitoria.html"
            break
        }
        else    {
            alert ("Por favor, escolha 1 ou 2.")
        }
    }
}