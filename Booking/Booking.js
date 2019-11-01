//Vælge dato, tidspunkt, antal personer, vælge det ønskede bord - herefter skal der kunne bekræftes og annulleres
function myFunction() {
    alert("Din booking er nu annulleret, vi håber at du kommer tilbage en anden gang!");
        window.open("../Afbestilling/Afbestilling.html");
}

 var personer = document.getElementById('Antal_Personer');
 var tidspunkt = document.getElementById('Tidspunkt');
 var info1 = document.getElementById('additional_info');
 var kontaktdag = document.getElementById('Kontaktdag');
 var kontaktmaaned = document.getElementById('Kontaktmåned');
 var kontaktaar = document.getElementById('Kontaktår');


 var currentDate = new Date();

 function storeBooking() {
     localStorage.setItem('Antal_Personer', personer.value);
     localStorage.setItem('Tidspunkt', tidspunkt.value);
     localStorage.setItem('additional_info', info1.value);
     localStorage.setItem('Kontaktdag', kontaktdag.value);
     localStorage.setItem('Kontaktmåned', kontaktmaaned.value);
     localStorage.setItem('Kontaktår', kontaktaar.value);
 }

function showUser() {
    console.log('Show user stored in localStorage.');
    console.log(localStorage);
}

function myFunction1() {
    alert("Din booking er nu bekræftet og vi glæder os til at se dig/jer!" +
        "\n Antal Personer: " + personer.options[personer.selectedIndex].value
        + "\n Booking dato: " + kontaktdag.options[kontaktdag.selectedIndex].value +
        "/" + kontaktmaaned.options[kontaktmaaned.selectedIndex].value +
        "/" + kontaktaar.options[kontaktaar.selectedIndex].value +
        "\n Tidspunkt for reservation af bord: " + tidspunkt.options[tidspunkt.selectedIndex].value +
        "\n Booking tidspunkt: " + currentDate +
        "\n Ydeligere kommentare til Café Bomhuset: " + info1);
    window.open("../Booking_bekræftelse/Booking_bekræftelse.html");
    storeLogin();

}





