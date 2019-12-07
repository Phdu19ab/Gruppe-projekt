// Email og kodeord for oprettelse af bruger
    var username = document.getElementById('e-mail');
    var password = document.getElementById('kodeord');
    var telefon = document.getElementById('tlf');
    var nm = document.getElementById('navn');
    var password = document.getElementById('bekræft_kodeord');


// Gemmer data fra registreringsformen til localstorage
function storeLogin() {
    localStorage.setItem('e-mail', username.value);
    localStorage.setItem('kodeord', password.value);
    localStorage.setItem('bekræft_kodeord', password.value);
    localStorage.setItem('navn', nm.value);
    localStorage.setItem('tlf', telefon.value);
}


// Funktion til at se brugerne i localstorage
function showUser() {
    console.log('Show user stored in localStorage.');
    console.log(localStorage);
}

// Checker om den gemte data fra formen er lig med det brugeren indtaster i login formen.
function checkLogin() {

    // gemt data fra registreringsformen
    var storedEmail = localStorage.getItem('e-mail');
    var storedPass = localStorage.getItem('kodeord');

    // indtastet data i login formen
    var enteredEmail = document.getElementById('e-mail');
    var enteredPass = document.getElementById('kodeord');

    if(enteredEmail.value == storedEmail && enteredPass.value == storedPass) {
        return window.open("../Brugeren/index.html")
    }else {
        alert('Email eller kordeord er ikke korrekt.');
    }
}
// Funktion til specikke oprettelseskrav ved oprettelse af en ny bruger
// If statements til kravene der er stillet.
function check_form()
{
    var password = document.getElementById('kodeord').value;
    var password1 = document.getElementById('bekræft_kodeord').value;
    var letter = /[a-z]/;
    var upper  =/[A-Z]/;
    var number = /[0-9]/;


    if(password.length < 6 || password != password1 || !letter.test(password) || !number.test(password) || !upper.test(password)) {
        if(password.length<6){
            alert("Kodeordet skal mindst bestå af 6 tegn.")
            return false;
        }
        if(password != password1){
            alert("Check om begge kodeord passer overens.")
            return false;
        }
        if(!letter.test(password)){
            alert("Venligst sørg for at kodeordet indeholder et lille bogstav.")
            return false;
        }
        if(!number.test(password)){
            alert("Venligst sørg for at kodeordet indeholder et tal.")
            return false;
        }
        if(!upper.test(password)) {
            alert("Venligst sørg for at kodeordet indeholder et stort bogstav.");
            return false;
        }
    }
// If statement til at gøre så telefonnummeret kun er med tal samt at det skal indholde 8 tal.
    var telefon = document.getElementById('tlf').value;
        if (isNaN(telefon)) {
            alert("Venligst skriv dit nummer med tal")
            return false;
        }
            if (telefon.length < 8) {
                alert("Telefon nummeret skal indholde 8 tal")
                return false;
            }

            // Test email for at det skal indholde @ samt punktum
    // brugeren bliver nu oprettet samt dataen til login bliver stored i localstorage
    // derefter bliver brugeren directed tilbage til log ind siden hvis alt information er korrekt indtastet.
    var username = document.getElementById('e-mail').value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(username)) {
        alert('Venligst indtast en eksiterende e-mail.');
        form.email.focus;
        return false;
    }

else
    alert("Brugeren er nu oprettet");
storeLogin();
    window.open("index.html");
    return true;
}


