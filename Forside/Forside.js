// Email og kodeord for oprettelse af bruger


    var username = document.getElementById('e-mail');
    var password = document.getElementById('kodeord');
    var telefon = document.getElementById('tlf');
    var nm = document.getElementById('navn');
    var password = document.getElementById('bekræft_kodeord');


// Store input from registration form in localStorage
function storeLogin() {
    localStorage.setItem('e-mail', username.value);
    localStorage.setItem('kodeord', password.value);
    localStorage.setItem('bekræft_kodeord', password.value);
    localStorage.setItem('navn', nm.value);
    localStorage.setItem('tlf', telefon.value);
window.open("Forside.html");
}


// Function to list
function showUser() {
    console.log('Show user stored in localStorage.')
    console.log(localStorage);
}

// Function to check if the stored data from the registration form is equal to the entered data in the login form
function checkLogin() {

    // Stored data from the registration form
    var storedEmail = localStorage.getItem('e-mail');
    var storedPass = localStorage.getItem('kodeord');
//enteredPass
    // Entered data in the login form
    var enteredEmail = document.getElementById('e-mail');
    var enteredPass = document.getElementById('kodeord');

    // Check if stored data from registration form is equal to entered data from login form
    if(enteredEmail.value == storedEmail && enteredPass.value == storedPass) {
        return window.open("../Brugeren/Brugeren.html")
    }else {
        alert('Email eller kordeord er ikke korrekt.');
    }
}


