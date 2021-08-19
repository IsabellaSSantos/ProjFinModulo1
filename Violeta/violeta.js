function violetafase1() {



    while (opcao !=1 && opcao !=2) {
        var opcao
        opcao = prompt("Qual opção?\n1 - Sai correndo até a polícia gritando que seus pais foram sequestrados\n2 - Vai ate a cafeteria de forma invisível para procurar pistas de quem levou seus pais")

        if (opcao == 1) {
            location.href = "../perdeu.html"
            break
        }
        else if (opcao == 2) {
            location.href = "violeta2.html"
            break
        }
        else    {
            alert ("Por favor, escolha 1 ou 2.")
        }
    }
}

function violetafase2() {



    while (opcao !=1 && opcao !=2) {
        var opcao
        opcao = prompt("Qual opção?\n1 - Ignora. Pois, alguns fios de cabelo, ruivos? Todo mundo perde fios de cabelo todo dia. Vou perder tempo com essa 'pista'.\n2 - Fios de cabelo, formando um caminho e ruivo? Muito raro, toda pista é bem-vinda, quero logo meus pais de volta!")

        if (opcao == 1) {
            location.href = "../perdeu.html"
            break
        }
        else if (opcao == 2) {
            location.href = "violeta3.html"
            break
        }
        else    {
            alert ("Por favor, escolha 1 ou 2.")
        }
    }
}

function violetafase3() {

    while (opcao !=1 && opcao !=2) {
        var opcao
        opcao = prompt("Qual opção?\n1 - Ignora. Pega os objetos em volta através do campo de força telecinético e começa a atacá-lo.\n2 - Gera um campo de força para se proteger.")

        if (opcao == 1) {
            location.href = "../vitoria.html"
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