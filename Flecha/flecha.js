function flechafase1() {



    while (opcao !=1 && opcao !=2) {
        var opcao
        opcao = prompt("Qual opção?\n1 - Um amigo da família com super poderes, o Gelado.\n2 - Velha conhecida da família, Edna Modas.  ")

        if (opcao == 1) {
            location.href = "flecha2.html"
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

function flechafase2() {



    while (opcao !=1 && opcao !=2) {
        var opcao
        opcao = prompt("Qual opção?\n1 - Juntos tentarem soltar seus pais para juntar mais forças e derrotar o vilão\n2 - Se dividem em lados opostos em direção ao Síndrome")

        if (opcao == 1) {
            location.href = "../perdeu.html"
            break
        }
        else if (opcao == 2) {
            location.href = "flecha3.html"
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
        opcao = prompt("Qual opção?\n1 - Eu corro em direção ao vilão para surpreende-lo com minha super velocidade.\n2 - Armamos um ataque em dupla e o Gelado congela o Síndrome e com minha super velocidade corro e o derrubo.")

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
