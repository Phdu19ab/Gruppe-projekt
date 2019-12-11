//Navn, email, kodeord, telefonnummer, opret, slet, (evt. facebook)
function myFunction() {
    alert("Du vil nu blive henvist til siden hvor du kan foretage en ny booking!");
    window.location.href = "../Booking/index.html";
}

// Når dokumentet indlæser vises booking i html tabellen
window.addEventListener('load', function () {
    displayBookings(
        'my_bookings',
        'Du har ingen bookings',
        false);
});