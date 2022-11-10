var botao = document.getElementById("submit");
botao.addEventListener("click",function(e){
    e.preventDefault();
    var conteiner1 = document.getElementById("conteiner");
    var conteiner2 = document.getElementById("conteiner2");
        conteiner1.hidden = true;
        conteiner2.hidden = false;
});


function numero(){
    var label1 = document.getElementById("label1");
    var label2 = document.getElementById("label2");
    var label3 = document.getElementById("label3");
    var label4 = document.getElementById("label4");
    var label5 = document.getElementById("label5");

    var num = document.getElementsByName("num");
    var selected = document.getElementById("selected");
    var numeroSelecionado = '';
    
    if(num[0].checked){
        label1.style.backgroundColor = "hsl(216, 12%, 54%)";
        label2.style.backgroundColor = "hsl(213, 19%, 21%)";
        label3.style.backgroundColor = "hsl(213, 19%, 21%)";
        label4.style.backgroundColor = "hsl(213, 19%, 21%)";
        label5.style.backgroundColor = "hsl(213, 19%, 21%)";
        numeroSelecionado = '1';   
    }else if(num[1].checked){
        label2.style.backgroundColor = "lightgray";
        label1.style.backgroundColor = "hsl(213, 19%, 21%)";
        label3.style.backgroundColor = "hsl(213, 19%, 21%)";
        label4.style.backgroundColor = "hsl(213, 19%, 21%)";
        label5.style.backgroundColor = "hsl(213, 19%, 21%)";
        numeroSelecionado = '2';
    }else if(num[2].checked){
        label3.style.backgroundColor = "lightgray";
        label1.style.backgroundColor = "hsl(213, 19%, 21%)";
        label2.style.backgroundColor = "hsl(213, 19%, 21%)";
        label4.style.backgroundColor = "hsl(213, 19%, 21%)";
        label5.style.backgroundColor = "hsl(213, 19%, 21%)";
        numeroSelecionado = '3';
    }else if(num[3].checked){
        label4.style.backgroundColor = "lightgray";
        label1.style.backgroundColor = "hsl(213, 19%, 21%)";
        label2.style.backgroundColor = "hsl(213, 19%, 21%)";
        label3.style.backgroundColor = "hsl(213, 19%, 21%)";
        label5.style.backgroundColor = "hsl(213, 19%, 21%)";
        numeroSelecionado = '4';
    }else{
        label5.style.backgroundColor = "lightgray";
        label1.style.backgroundColor = "hsl(213, 19%, 21%)";
        label2.style.backgroundColor = "hsl(213, 19%, 21%)";
        label3.style.backgroundColor = "hsl(213, 19%, 21%)";
        label4.style.backgroundColor = "hsl(213, 19%, 21%)";
        numeroSelecionado = '5';
    }

    selected.innerHTML = numeroSelecionado;
}




