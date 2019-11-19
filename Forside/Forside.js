// Email og kodeord, telefonnummer, navn og bekræft kodeord for oprettelse af bruger.
    var username = document.getElementById('e-mail');
    var password = document.getElementById('kodeord');
    var telefon = document.getElementById('tlf');
    var nm = document.getElementById('navn');
    var password = document.getElementById('bekræft_kodeord');


// Denne funktion gemmer dataen fra registreringsformen i localstorage.
function storeLogin() {
    localStorage.setItem('e-mail', username.value);
    localStorage.setItem('kodeord', password.value);
    localStorage.setItem('bekræft_kodeord', password.value);
    localStorage.setItem('navn', nm.value);
    localStorage.setItem('tlf', telefon.value);
}


// Denne funktion viser brugeren i localstorage.
function showUser() {
    console.log('Show user stored in localStorage.');
    console.log(localStorage);
}

// Denne funktion checker om den gemte data fra formen er lig med det brugeren indtaster i login formen.
function checkLogin() {

    // Gemt data fra registreringsformen
    var storedEmail = localStorage.getItem('e-mail');
    var storedPass = localStorage.getItem('kodeord');

    // Indtastet data i login formen
    var enteredEmail = document.getElementById('e-mail');
    var enteredPass = document.getElementById('kodeord');

    //Her opstiller vi et "if-else statement" dette udgør at hvis den indtastede email og kodeord er de samme som de gemte
    //så returneres der via henvisningen to linjer nede til brugerens profil. Hvis ikke de genkendes som de sammen
    //så vil den udskrive "Email eller kodeord er ikke korrekt."
    if(enteredEmail.value == storedEmail && enteredPass.value == storedPass) {
        return window.location.href = '../Brugeren/Brugeren.html';
    }else {
        alert('Email eller kordeord er ikke korrekt.');
    }
}
// Denne funktion tjekker om det indtastede kodeord imødekommer de oprettelseskrav vi opstiller i form af at det skal indeholde
//små bogstaver, store bogstaver og tal.
// If statements til kravene der er stillet.
function check_form()
{
    var password = document.getElementById('kodeord').value;
    var password1 = document.getElementById('bekræft_kodeord').value;
    var letter = /[a-z]/;
    var upper  =/[A-Z]/;
    var number = /[0-9]/;

    //Disse if statements opstiller følgende krav - kodeord skal være længere end 6 tegn, kodeord og bekræftet kodeord skal
    //stemme overens, kodeord skal indeholde et lille bogstav, et tal og et stort bogstav.
    //Hvis ikke disse ting er gældende vil den "return false."
    if(password.length < 6 || password != password1 || !letter.test(password) || !number.test(password) || !upper.test(password)) {
        if(password.length<6){
            alert("Kodeordet skal mindst bestå af 6 tegn.");
            return false;
        }
        if(password != password1){
            alert("Check om begge kodeord passer overens.");
            return false;
        }
        if(!letter.test(password)){
            alert("Venligst sørg for at kodeordet indeholder et lille bogstav.");
            return false;
        }
        if(!number.test(password)){
            alert("Venligst sørg for at kodeordet indeholder et tal.");
            return false;
        }
        if(!upper.test(password)) {
            alert("Venligst sørg for at kodeordet indeholder et stort bogstav.");
            return false;
        }
    }
    // Dette "if-statement" sørger for at det telefonummer der indtastes kun består af tal - og herunder mindst 8 tal.
    //Hvis ikke det er gældende vil den "return false."
    var telefon = document.getElementById('tlf').value;
        if (isNaN(telefon)) {
            alert("Venligst skriv dit nummer med tal");
            return false;
        }
            if (telefon.length < 8) {
                alert("Telefon nummeret skal indholde 8 tal");
                return false;
            }

            //Denne funktion tester email - for at sikrer det indholder "@" samt "."
    //Brugeren bliver nu oprettet samt dataen til login bliver stored i localstorage.
    //Hvis alt information er korrekt indtastet korrekt vil brugeren herefter blive henvist tilbage til log-ind siden.
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
    window.location.href = 'Forside.html';
    return true;
}


