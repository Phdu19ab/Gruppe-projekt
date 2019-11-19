//Herunder er funktionen for knappen "Din booking er nu annulleret.." samt at der ved tryk på knappen åbnes et nyt linket vindue
function myFunction() {
    alert("Din booking er nu annulleret, vi håber at du kommer tilbage en anden gang!");
        window.location.href = "../Afbestilling/Afbestilling.html";
}
//Herunder henter vi oplysningerne fra vores tilhørende html
// til henholdsvis "antal personer, tidspunkt, yderligere kommentare, kontaktdag, kontaktmåned og kontaktår."
 var personer = document.getElementById('Antal_Personer');
 var tidspunkt = document.getElementById('Tidspunkt');
 var info1 = document.getElementById('additional_info');
 var kontaktdag = document.getElementById('Kontaktdag');
 var kontaktmaaned = document.getElementById('Kontaktmåned');
 var kontaktaar = document.getElementById('Kontaktår');

 var currentDate = new Date();

 //Denne funktion kreere en ny booking som den derefter gemmer i vores localStorage.
 function storeBooking() {
     let a_booking = newBooking(
         personer.value,
         tidspunkt.value,
         info1.value,
         kontaktdag.value,
         kontaktmaaned.value,
         kontaktaar.value,
         localStorage.getItem('e-mail')
         );
     appendBooking(a_booking);
 }
//Denne funktion viser brugeren..
function showUser() {
    console.log('Show user stored in localStorage.');
    console.log(localStorage);
}
//Dene funktion gemmer den indtastede booking - og henviser nederst hvis bookingen bekræftes til Booking_bekræftelse.
function myFunction1() {
     storeBooking();
    var isConfirmed=confirm("\n Din booking er nu bekræftet og vi glæder os til at se dig/jer!" +
        "\n Antal Personer: " + personer.options[personer.selectedIndex].value
        + "\n Booking dato: " + kontaktdag.options[kontaktdag.selectedIndex].value +
        "/" + kontaktmaaned.options[kontaktmaaned.selectedIndex].value +
        "/" + kontaktaar.options[kontaktaar.selectedIndex].value +
        "\n Tidspunkt for reservation af bord: " + tidspunkt.options[tidspunkt.selectedIndex].value +
        "\n Booking tidspunkt: " + currentDate +
        "\n Ydeligere kommentare til Café Bomhuset: " + info1.value);
    if (isConfirmed) {alert('Din Booking er nu bekræftet');
        window.location.href = "../Booking_bekræftelse/Booking_bekræftelse.html";
    storeBooking();
    } else {
        alert("Din Booking er nu annuleret");
        window.location.href = "../Booking/Booking.html";
    }

}









