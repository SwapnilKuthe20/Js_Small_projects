
let childs = document.querySelectorAll('.box');     // nodeList
let body = document.body;

//  We can use forEach loop in NodeList.

childs.forEach((child) => {
    child.addEventListener('click', (e) => {

        if (e.target.id === 'red') {
            body.style.backgroundColor = e.target.id;
        } else if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        } else if (e.target.id === 'purple') {
            body.style.backgroundColor = e.target.id;
        } else if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
        } else if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
        }
    })
})


