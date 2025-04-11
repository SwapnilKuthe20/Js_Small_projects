// Loops :::

// function passCheck() {

    let attemp = 3;
    let password = "swap20";

    while (attemp > 0) {
        let userInp = prompt(" Enter your password");

        // let userInp = document.getElementById('enterPass').value;

        if (password === userInp) {
            document.getElementById('note').innerText = "Welcome ! Password is correct ";
            break;
        } else if (password !== userInp) {
            document.getElementById('note').innerText = `Your remaining attempts : ${attemp}`;
            
            attemp--;
        } else if (attemp === 0) {
            document.getElementById('note').value = "Your attempts are gone ! pls try aftersome time";
        }
    }
// }
