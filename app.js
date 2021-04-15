function calculTotal() {
    /*Récupère les valeures entrées dans les champs du formulaire */
    let pRation = document.getElementById("petite-ration").value;
    let gRation = document.getElementById("grosse-ration").value;
    let sword = document.getElementById("sword").value;
    let shield = document.getElementById("shield").value;
    let potion = document.getElementById("potion").value;
    let cloth = document.getElementById("cloth").value;

    /*Définit la valeur de chaque items en dollars */
    pRationPrice = 2;
    gRationPrice = 8;
    swordPrice = 20;
    shieldPrice = 15;
    potionPrice = 5;
    clothPrice = 1;

    /*Calcul le total et l'affiche*/
    document.getElementById("totalPrice").innerHTML = (
        parseInt(pRation * pRationPrice) +
        parseInt(gRation * gRationPrice) +
        parseInt(sword * swordPrice) +
        parseInt(shield * shieldPrice) +
        parseInt(potion * potionPrice) +
        parseInt(cloth * clothPrice) + "$");
    /*Récupère le total pour y appliquer une classe conditionnelle */
    let colorPrice = document.getElementById("totalPrice");
    let int = parseInt(colorPrice.innerText)

    /*Change la couleur du prix en fonction du budget de notre utilisateur*/
    if (int < 50) {
        colorPrice.className = "greenPrice"

    } else if (int > 50 && int < 100) {
        colorPrice.className = "orangePrice"

    } else if (int > 75) {
        colorPrice.className = "redPrice"
    }
    /*Test afin de determiner le type de colorPrice */
    console.log(colorPrice)

}

/*Permet d'afficer le sous-total*/
function stotal() {

    pRationPrice = 2;
    gRationPrice = 8;
    swordPrice = 20;
    shieldPrice = 15;
    potionPrice = 5;
    clothPrice = 1;

    /*Calcul le sous-total individuellement pour chaque champs*/
    let pRation = document.getElementById("petite-ration").value;
    document.getElementById("stotalpr").innerHTML = (parseInt(pRation * pRationPrice) + "$");

    let gRation = document.getElementById("grosse-ration").value;
    document.getElementById("stotalgr").innerHTML = (parseInt(gRation * gRationPrice) + "$");

    let sword = document.getElementById("sword").value;
    document.getElementById("stotalsw").innerHTML = (parseInt(sword * swordPrice) + "$");

    let shield = document.getElementById("shield").value;
    document.getElementById("stotalsh").innerHTML = (parseInt(shield * shieldPrice) + "$");

    let potion = document.getElementById("potion").value;
    document.getElementById("stotalp").innerHTML = (parseInt(potion * potionPrice) + "$");

    let cloth = document.getElementById("cloth").value;
    document.getElementById("stotalc").innerHTML = (parseInt(cloth * clothPrice) + "$");
}

/*Permet 5 petites rations de valoir 1 grosse rations au fur et à mesure*/
/*Le bouton calculer permet de rétablir le nombre correct de sous-totaux lorsque le count de rations retombe à zéro*/
function equilibre() {

    let pRation = document.getElementById("petite-ration").value;
    let gRation = document.getElementById("grosse-ration").value;

    let petite = parseInt(pRation);
    let grosse = parseInt(gRation);
    /*Merci à Anthony et ses indices sur cette fonction, en effet, ça fonctionne beaucoup mieux comme ça */
    if (petite >= 5) {
        let rest = petite % 5
        document.getElementById("petite-ration").value = rest;
        let g = (petite - rest) / 5
        document.getElementById("grosse-ration").value = grosse + g;
    }

}
/*Empêche l'utilisateur d'ajouter d'avantage d'objet au delà de 15*/
function tooMuch() {

    let pRation = document.getElementById("petite-ration").value;
    let gRation = document.getElementById("grosse-ration").value;
    let sword = document.getElementById("sword").value;
    let shield = document.getElementById("shield").value;
    let potion = document.getElementById("potion").value;
    let cloth = document.getElementById("cloth").value;

    let sum = parseInt(pRation) +
        parseInt(gRation) +
        parseInt(sword) +
        parseInt(shield) +
        parseInt(potion) +
        parseInt(cloth)

    /*Affiche le nombre d'items pour l'utilisateur */
    document.getElementById("totalItems").innerHTML = sum

    /*Ici on doit utiliser une boucle afin de cycler dans la methode get qui créer un tableau contenant les input*/
    /*On disable les champs*/
    if (sum >= 15) {
        let inputs = document.getElementsByClassName("input-test");
        for (i = 0; i < inputs.length; ++i) {
            inputs[i].setAttribute("disabled", "");
        }

        alert("Your pockets aren't bigger on the inside 🙁 - Vide ton inventaire et prends moins de 15 items")
    }
}


var minus = document.getElementsByClassName("minus");
var plus = document.getElementsByClassName("plus");

for (var i = 0; i < minus.length; i++) {
    var button = minus[i];
    button.addEventListener('click', function (event) {
        var buttonClicked = event.target;
        // console.log(buttonClicked);
        var input = buttonClicked.parentElement.children[1];
        //console.log(input);
        var inputValue = input.value;
        //console.log(inputValue)
        var newValue = parseInt(inputValue) - 1;
        console.log(newValue)
        input.value = newValue
    })
}

for (var i = 0; i < plus.length; i++) {
    var button = plus[i];
    button.addEventListener('click', function (event) {
        var buttonClicked = event.target;
        // console.log(buttonClicked);
        var input = buttonClicked.parentElement.children[1];
        //console.log(input);
        var inputValue = input.value;
        //console.log(inputValue)
        var newValue = parseInt(inputValue) + 1;
        console.log(newValue)
        input.value = newValue
    })
}

