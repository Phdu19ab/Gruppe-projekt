// Email og kodeord for oprettelse af bruger
var username = document.getElementById('e-mail');
var password = document.getElementById('kodeord');
var password = document.getElementById('bekræft_kodeord');

// Store input from registration form in localStorage
function storeLogin() {
    localStorage.setItem('e-mail', username.value);
    localStorage.setItem('kodeord', password.value);
    localStorage.setItem('bekræft_kodeord', password.value);
    alert('Ny bruger oprettet');
    onclick="window.location.href = 'Forside.html';
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
    var storedPass = localStorage.getItem('bekræft_kodeord');

    // Entered data in the login form
    var enteredName = document.getElementById('enteredEmail');
    var enteredPass = document.getElementById('enteredPass');
    var enteredPass = document.getElementById('enteredPass');
    // Check if stored data from registration form is equal to entered data from login form
    if(enteredName.value == storedEmail && enteredPass.value == storedPass) {
        alert('You are logged in.');
    }else {
        alert('Brugernavn eller kordeord er ikke korrekt.');
    }
}