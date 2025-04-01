
function rollDice() {

    let diceNos = document.getElementById('diceNos').value;

    let diceresults = [];
    let diceImages = [];

    for (dice = 0; dice < diceNos; dice++) {
        let random = Math.floor(Math.random() * 6) + 1

        diceresults.push(random);
        diceImages.push(`<img src="images/${random}.png" alt="diceImage${random}">`);

    }

    document.getElementById('diceResult').innerText = `Dice results : ${diceresults.join(", ")}`
    document.getElementById('diceImg').innerHTML = diceImages.join("")

}

