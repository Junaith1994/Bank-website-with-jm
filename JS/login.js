// Login Form
document.getElementById('submit-btn').addEventListener('click', function() {
    // User Email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // User Password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    if (((userEmail == "daya2015ctg@gmail.com") && (userPassword == "mikealpha")) || ((userEmail == "mdabdulwasay3@gmail.com") && (userPassword == "13121159")) || ((userEmail == "mizan@gmail.com") && (userPassword == "mizan2221"))) {
        window.location.href="bank-page.html";
    }
    else{console.log(alert("Invalid email or password"))}
})