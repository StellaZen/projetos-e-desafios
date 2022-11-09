var botao = document.getElementById("submit")
botao.addEventListener("click",trocar)


function trocar(){
    var conteiner1 = document.getElementById("conteiner");
    var conteiner2 = document.getElementById("conteiner2");
        conteiner1.style.display = "none";
        conteiner2.style.display = "block";
}

