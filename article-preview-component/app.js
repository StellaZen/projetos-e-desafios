var botao = document.getElementById("botao");
var nome = document.getElementById("nome")
var icons = document.getElementById("icons");

botao.addEventListener("click",muda);
function muda(e){
    e.preventDefault();
    nome.style.display = "none";
    icons.style.display = "flex";
}



