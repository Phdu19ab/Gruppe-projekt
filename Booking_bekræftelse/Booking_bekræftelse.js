function myFunction3() {
    alert("Du vil nu modtage bekræftelse på din valgte enhed. Vi glæder os til at se dig!");
    window.location.href = "../Brugeren/index.html";

}

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'minmail@gmail.com',
        pass: 'mitkodeord'
    }
});

var mailOptions = {
    from: 'minmail@gmail.com',
    to: 'restaurantbruger@yahoo.com',
    subject: 'Sending Email using Node.js',
    html: '<h1>Din bookinger nu bekræftet!</h1> <p>Vi glæder os til at se dig på den pågældende dato</p>'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});


