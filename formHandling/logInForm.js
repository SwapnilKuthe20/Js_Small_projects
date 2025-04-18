let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        number: document.getElementById('number').value,
        password: document.getElementById('password').value,
        gender: document.querySelector('input[type="radio"]:checked') ? document.querySelector('input[type="radio"]:checked').value : "",


        skills: [
            document.getElementById("html").checked ? document.getElementById("html").value : null,
            document.getElementById('css').checked ? document.getElementById('css').value : null,
            document.getElementById('js').checked ? document.getElementById('js').value : null,
            document.getElementById('react').checked ? document.getElementById('react').value : null
        ].filter(skill => skill !== null),

        isConfirmed: document.getElementById("confirm").checked ? true : false
    }

    // console.log(formData);

    // Convert formData object to JSON and save in localStorage
    // localStorage can only store data as strings — 
    //          it does not understand objects, arrays, or any complex data structures.

    localStorage.setItem('formDATA', JSON.stringify(formData));

    alert("FormData is successfully submitted to local Storage !!");


    let rawData = localStorage.getItem("formDATA");
    let userData = JSON.parse(rawData);

    for (let keys in userData) {
        document.getElementById('formData').innerHTML += `<li> ${keys} : ${userData[keys]}</li > `
    }
    // bracket notation coz keys is a variable, not a property name.
})


