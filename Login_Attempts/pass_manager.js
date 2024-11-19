// Loops :::

let attemp = 3;
let password = "swap20";

while (attemp > 0) {
    let userInp = prompt(" Enter your password");

    if (password === userInp) {
        console.log("Welcome ! Password is correct ");
        break;
    } else {
        attemp--;
        console.log(`YOur remailning attempts : ${attemp}`);
    }

    if (attemp === 0) {
        console.log("Your attempts are gone ! pls try aftersome time");
    }
}




