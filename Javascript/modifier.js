function modifierNom(){
    let pen = document.getElementById('pen_name');
    let formulaire = document.getElementById("modifierNom");
    Modifier(pen, formulaire);


}

function Modifier(pen, formulaire){
    pen.addEventListener("click", function(event){
        formulaire.style.zIndex = 6;
    })
    annuler(formulaire);
}
function imagesModifier(){
    let pen = document.getElementById('penImages');
    let formulaire = document.getElementById("modifierImage");
    Modifier(pen, formulaire)
}

function annuler(form){

    let buttons = document.querySelectorAll(".annulerBtn");
    buttons.forEach((btn) => {
        btn.addEventListener("click", function(event){
            form.style.zIndex = -1;
        })
    })
}

function modifierIngredient(){
    let pens = document.querySelectorAll('.ingredientsModifier');
    pens.forEach((pen) => {

            Modifier(pen, pen.parentElement.nextElementSibling)

    })

}
function afficherCreate(){
    let buttons = document.querySelectorAll(".creerNouveauIngredient");
    let formulaire = document.getElementById("ajout-ingredient-form");

        buttons.forEach((button) => {
            button.addEventListener("click", function(){
                Modifier(button, formulaire)

            // Modifier(pen, pen.parentElement.nextElementSibling)

        })
        // formulaire.style.zIndex = 7;
        // alert("ss")
    })
    // annuler(formulaire);

}


function createIngredient(){
    let httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function (){
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                let response = JSON.parse(httpRequest.response)
                ajoutIngredientSucces(response) // action a faire si la requette a ete un succes
            }
            else
                alert("l'ingredient n'a pas ete ajoute");
        }
    }

    let formulaire = document.getElementById("ajout-ingredient-form")

    formulaire.addEventListener('submit', function (event){

        event.preventDefault() // bloquer le comportement par défaut du submit

        // s'ils existent, on peut récupérer la méthode et l'action (url) sur les attributs du form
        let method = formulaire.getAttribute("method")
        let url = formulaire.getAttribute("action")
        httpRequest.open(method, url)

        // constructeur avec le formulaire en paramètre
        let data = new FormData(formulaire)
        formulaire.style.zIndex = -1;
        // let test = document.getElementById("test2")
        // test.style.opacity = 1;


        formulaire.children[1].firstElementChild.value = "";
        formulaire.children[1].firstElementChild.nextElementSibling.nextElementSibling.value = "";

        annuler(formulaire)

        httpRequest.send(data)
    })
}


document.addEventListener('DOMContentLoaded',function (){

   modifierNom();
    imagesModifier();
    modifierIngredient();
    afficherCreate();
    // createIngredient();



})