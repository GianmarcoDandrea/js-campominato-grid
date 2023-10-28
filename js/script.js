// DICHIARAZIONI COSTANTI
const userChoiceElem = document.getElementById("selector");
const playBtn = document.getElementById("play-button");

// Quando premo il tasto gioca
playBtn.addEventListener("click", function() {

    document.getElementById("grid").innerHTML = ``;

    // RACCOLTA DATI UNPUT
    const userChoice = userChoiceElem.value;

    // DICHIARAZIONI CONSTANTI
    let widthSquare = "";
    let squareNumber = "";

    if(userChoice === "easy") {
        
        squareNumber = 49;
        widthSquare = "dif-easy";

    } else if(userChoice === "medium") {

        squareNumber = 81;
        widthSquare = "dif-medium";

    } else {

        squareNumber = 100;
        widthSquare = "dif-hard";

    }

    for (let i = 1; i <= squareNumber; i++) {
        
        document.getElementById("grid").innerHTML += `
                                                    <div class="square ${widthSquare}">${i}</div>`
    }

});


/*******************************************/
// FUNZIONI
function genOrderedNumber(maxNumber) {
    let numberarray = "";
    for (let i = 1; i <= maxNumber; i++) {
        console.log(i);
        numberarray += parseInt(`${i}`);
    }
    return numberarray;
}





