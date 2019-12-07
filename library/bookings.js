// Laver en ny booking - standard struktur.
function newBooking(people_count, time, add_info, day, month, year, email) {
    return {
        //TODO: Konverter til int
        "id": Math.random() * 10000,
        "people_count":  people_count,
        "time": time,
        "add_info": add_info,
        "day": day,
        "month": month,
        "year": year,
        "email": email
    };
}

function appendBooking(a_booking) {
    // Henter den aktuelle booking array fra localstorage.
    let currentBookings = localStorage.getItem('bookings');
    // Hvis der ikke er noget at hente, lav en tom array. (Inside string, because it gets parsed)
    if (currentBookings === null) {
        currentBookings = '[]';
    }
    // Sender booking array til data strukturen.
    let currentBookingArray = JSON.parse(currentBookings);
    // Pusher den nye booking til det aktuelle booking array.
    currentBookingArray.push(a_booking);
    // Gemmer det modificerede array i localstorage.
    localStorage.setItem('bookings',JSON.stringify(currentBookingArray));
    return currentBookingArray;
}

function appendBookingRow(booking, table_id, is_administrator) {
    // Henter "table element"
    let table = document.getElementById(table_id);
    // Indsætter en række kaldt row
    let row = table.insertRow();

    // Sætter variablerne id og email
    let dontShow = ['id','email'];

    // For hver key såsom ("email eller people_count) i bookingen der skal tilføjes gør:
    for (let key in booking) {

        // Hvis key er email, og du er admin indsæt.
        if (key === 'email' && is_administrator) {
            row.insertCell().innerText = booking[key];
            // Ellers, hvis key ikke findes som dontShow variabel, vises de i tabellen
        } else if (!dontShow.includes(key)){
            row.insertCell().innerText = booking[key];
        }

    }

    // Lav delete knap
    let button = document.createElement('button');
    button.innerHTML = 'Slet booking';
    button.onclick = function(){
        deleteBooking(booking.id);

    };

    row.insertCell().appendChild(button);

}

function deleteBooking(id) {
    // Hent booking fra localstorage.
    let all_bookings = localStorage.getItem('bookings');

    // Hvis nul, lav tomt array.
    if (all_bookings === null) {
        all_bookings = '[]';
    }
    // Send json string til data strukturen.
    let all_bookings_array = JSON.parse(all_bookings);

    let booking_array_with_removed_booking = [];

    all_bookings_array.forEach(function(booking) {
        if (id == booking.id) {
            alert("Slettet din booking");
        } else {
            booking_array_with_removed_booking.push(booking);
        }
    });

    // Gemmer det modificerede array i localstorage.
    localStorage.setItem('bookings',JSON.stringify(booking_array_with_removed_booking));


}

function displayEmptyBookings(table_id, message) {
    // Henter table.
    var table = document.getElementById(table_id);
    // Indsæt row/række ind i table.
    var row = table.insertRow();
    // Lav en ny celle i row/række og i table.
    var cell1 = row.insertCell();

    // Put tekst in i row/rækken.
    cell1.innerText = message;
}

function getBookings(email, is_administrator) {
    // Hent booking fra localstorage.
    let all_bookings = localStorage.getItem('bookings');

    // Hvis nul, lav tomt array.
    if (all_bookings === null) {
        all_bookings = '[]';
    }
    // Send json string til data strukturen.
    let all_bookings_array = JSON.parse(all_bookings);

    // Hvis admin bare return alle bookings.
    if (is_administrator) {
        return all_bookings_array;
    }

    // Tomt array for at fylde med brugerens bookings
    let this_emails_bookings = [];

    // For hver booking i alle bookinger gør:
    for (let i = 0; i < all_bookings_array.length; i++) {
        // Hvis bookingens email matcher brugerens email, tilføj til brugerens booking array.
        if (all_bookings_array[i].email === email) {
            this_emails_bookings.push(all_bookings_array[i]);
        }
    }

    // Return brugerens bookinger.
    return this_emails_bookings;

}


function displayBookings(table_id, empty_message, is_administrator) {
    // Hent bookingerne fra den bruger der er logget ind, eller alt fra admin.
    let bookings = getBookings(
        localStorage.getItem('e-mail'),
        is_administrator);

    // Hvis tom, display/vis at det er tomt.
    if (bookings.length === 0) {
        displayEmptyBookings(table_id, empty_message);
        return;
    }

    // For hver booking, tilføj en row/række med information.
    for (let i = 0; i < bookings.length; i++) {
        appendBookingRow(bookings[i], table_id, is_administrator);
    }
}
