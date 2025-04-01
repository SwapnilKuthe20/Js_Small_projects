function passGenrator() {

    let length = document.getElementById('inpPass').value;
    let lower = document.getElementById('lower').checked;
    let upper = document.getElementById('upper').checked;
    let number = document.getElementById('number').checked;
    let symbol = document.getElementById('symbol').checked;

    let allChar = "";
    let pass = [];

    let lowerCase = "abcdefghijklmnopqrstuvwxyz"
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let numbers = "0123456789"
    let symbols = "!@#$%^&()_"

    lower ? allChar += lowerCase : "";
    upper ? allChar += upperCase : "";
    number ? allChar += numbers : "";
    symbol ? allChar += symbols : "";


    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * allChar.length);
        let password = allChar[random]

        pass.push(password)
    }

    let result = pass.join('');
    document.getElementById('result').innerText = `Password is ==> ${result}`

}









