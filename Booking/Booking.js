//Herunder er funktionen for knappen "Din booking er nu annulleret.." samt at der ved tryk på knappen åbnes et nyt linket vindue*/
function myFunction() {
    alert("Din booking er nu annulleret, vi håber at du kommer tilbage en anden gang!")
        window.open("../Afbestilling/Afbestilling.html");
}

     var personer = document.getElementById('Antal_Personer').value;
     var tidspunkt = document.getElementById('Tidspunkt').value;
     var info1 = document.getElementById('additional_info').value;
     var contactDay = document.getElementById('ContactDay').value;
     var contactMonth = document.getElementById('ContactMonth').value;
     var contactYear = document.getElementById('ContactYear').value;

     var currentDate = new Date();
     var contactDate = new Date();

     contactDate.setFullYear(contactYear, contactMonth - 1, contactDay);

     function myFunction1() {
         alert("Din booking er nu bekræftet og vi glæder os til at se dig/jer!"
             + "\nAntal Personer: " + personer
             + "\nBooking dato: " + contactDate
             + "\nBooking: " + tidspunkt
             + "\nBooking tidspunkt: " + currentDate
             + "\nYdeligere kommentare til Café Bomhuset: " + info1);
         window.open("../Booking_bekræftelse/Booking_bekræftelse.html");

     }