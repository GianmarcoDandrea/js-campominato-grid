// ESECUZIONE
const numbersArray = generateRandomOrderNumbers(64);

const gridElem = document.querySelector(".grid");

for (let i = 0; i < numbersArray.length; i++) {
  const curNumber = numbersArray[i];
  // Generare la cella della griglia
  const cell = generateGridCell(curNumber); // Cella è elemento HTML, quindi posso aggiungergli event listener
  cell.addEventListener("click", handleCellClick)

  gridElem.append(cell);
}


/************/
// FUNZIONI
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Restituisce array di maxNumber numeri random compresi tra 1 e maxNumber senza ripetizioni
 * @param {numer} maxNumber
 * @returns {array}
 */
function generateRandomOrderNumbers(maxNumber) {
  const result = [];
  while (result.length < maxNumber) {
    const newNumber = getRndInteger(1, maxNumber);
    if (!result.includes(newNumber)) {
      result.push(newNumber);
    }
  }
  return result;
}

// console.log(generateRandomOrderNumbers(25));

/**
 * Genera una cella della griglia con un numero all'interno
 * @param {number} innerNumber
 * @returns {any} elemento HTML che rappresenta la cella
 */
function generateGridCell(innerNumber) {
  const newCell = document.createElement("div");
  newCell.classList.add("cell");
  newCell.innerHTML = innerNumber;
  return newCell;
}

// console.log(generateGridCell(21));


function handleCellClick() {
    const clickedNumber = parseInt(this.textContent);
    if(clickedNumber % 2 === 0) {
        this.classList.add("green");
    } else {
        this.classList.add("fuchsia")
    }
}