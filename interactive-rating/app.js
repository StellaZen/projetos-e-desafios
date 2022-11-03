var submit = document.getElementById("submit");
var conteiner = document.getElementById("conteiner");
var conteiner2 = document.getElementById("conteiner2");

submit.addEventListener("click", trocar());

function trocar(){
    conteiner.style.display = "none";
    conteiner2.style.display = "block";
}

