// // Factorial ::

function factorial(num) {
    let factor = 1;
    for (let i = num; i > 0; i--) {
        // console.log(i, "i");
        factor *= i;
    }
    return factor;
}

const factoctorial = factorial(5);
console.log(factoctorial);







