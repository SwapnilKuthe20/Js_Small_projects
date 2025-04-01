
let count = 0;

let counter = document.getElementById('res');


document.getElementById('inc').onclick = () => {
    count++;
    counter.innerText = count;

}

document.getElementById('reset').onclick = () => {
    count = 0;
    counter.innerText = count;
}


document.getElementById("decr").onclick = () => {
    count--;
    counter.textContent = count;
}



