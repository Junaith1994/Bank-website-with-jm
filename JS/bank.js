// Login Form
document.getElementById('submit-btn').addEventListener('click', function() {
    // User Email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // User Password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    if ((userEmail == "daya2015ctg@gmail.com") && (userPassword == "MikeAlpha15#")) {
        window.location.href="bank-page.html";
    }
    else{console.log(alert("Invalid email or password"))}
})