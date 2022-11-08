var botao = document.getElementById("submit")
botao.addEventListener("click",trocar)


var conteiner1 = document.getElementById("conteiner")
var conteiner2 = document.getElementById("conteiner2")

function trocar(){
    conteiner1.style.display = "none"
    conteiner2.style.display = "block"
}

