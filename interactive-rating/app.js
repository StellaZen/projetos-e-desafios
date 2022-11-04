var rating = 0;

function rate(userRating){
    document.querySelector(".submit").style.cursor = "pointer";
    rating = userRating + 1;
    document.querySelector(`.r${userRating + 1}`).classList.add("rating_active");
    for(var i = 0; i < 5; i++){
        if(i != userRating){
            document.querySelector(`.r${i + 1}`).classList.remove("rating_active");
        }
    }
}

document.querySelector(".rating-form").addEventListener("submit", function(e){
    e.preventDefault();
    if(rating !=0){
        document.querySelector(".conteiner").style.display = "none";
        document.querySelector(".rating-selection").innerText = "You selected " + rating + " out of 5";
        document.querySelector(".conteiner2").style.display = "flex";
    }
})

