var botao = document.getElementsById("botao");
var nome = document.getElementsByClassName(".nome");
var icons = document.getElementsByClassName(".icons");
botao.addEventListener("click",muda);
function muda(){
    nome.style.display= "none"
    icons.style.display= "flex"

    alert("oi")
}


