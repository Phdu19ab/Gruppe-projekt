// Create a new booking object. Standerized structure.
function newBooking(people_count, time, add_info, day, month, year, email) {
    return {
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
    // Get current bookings array from localstorage
    let currentBookings = localStorage.getItem('bookings');
    // If null, create empty array. (Inside string, because it gets parsed)
    if (currentBookings === null) {
        currentBookings = '[]';
    }
    // Parsing booking array to data structure
    let currentBookingArray = JSON.parse(currentBookings);
    // Append / Push new booking into current bookings array
    currentBookingArray.push(a_booking);
    // Store modified array into localstorage
    localStorage.setItem('bookings',JSON.stringify(currentBookingArray));
    return currentBookingArray;
}

function appendBookingRow(booking, table_id, is_administrator) {
    // Get table element
    let table = document.getElementById(table_id);
    // Insert a row called row
    let row = table.insertRow();

    // For each key (like 'email' or 'people_count' in the booking to be added do:
    for (let key in booking) {

        // If the key is email, and you're an admin insert
        if (key === 'email' && is_administrator) {
            row.insertCell().innerText = booking[key];
        // Else if you're not an admin and the key is email or the key is not email do:
        } else if (key !== 'email'){
            row.insertCell().innerText = booking[key];
        }

    }
}

function displayEmptyBookings(table_id, message) {
    // Get the table
    var table = document.getElementById(table_id);
    // Insert row into the table
    var row = table.insertRow();
    // Create new cell in the row in the table
    var cell1 = row.insertCell();

    // Set text in the row
    cell1.innerText = message;
}

function getBookings(email, is_administrator) {
    // fetch bookings from localstorage
    let all_bookings = localStorage.getItem('bookings');

    // If null, create empty array
    if (all_bookings === null) {
        all_bookings = '[]';
    }
    // Parse the json string to data structure
    let all_bookings_array = JSON.parse(all_bookings);

    // if admin just return all bookings
    if (is_administrator) {
        return all_bookings_array;
    }

    // Empty array to populate with users bookings
    let this_emails_bookings = [];

    // For each booking in all bookings do:
    for (let i = 0; i < all_bookings_array.length; i++) {
        // If bookings email matches users email, add to users bookings array
        if (all_bookings_array[i].email === email) {
            this_emails_bookings.push(all_bookings_array[i]);
        }
    }

    // Return users bookings
    return this_emails_bookings;

}


function displayBookings(table_id, empty_message, is_administrator) {
    // Get the bookings for the logged in user, or all for the admin
    let bookings = getBookings(
        localStorage.getItem('e-mail'),
        is_administrator);

    // If empty, display that it is empty
    if (bookings.length === 0) {
        displayEmptyBookings(table_id, empty_message);
        return;
    }

    // For each booking, add a row with info
    for (let i = 0; i < bookings.length; i++) {
        appendBookingRow(bookings[i], table_id, is_administrator);
    }
}