// Toggle to show the signup form and hide the login form
document.getElementById('showSignup').addEventListener('click', function() {
    document.getElementById('loginFormContainer').style.display = 'none';
    document.getElementById('signupFormContainer').style.display = 'block';
});

// Toggle to show the login form and hide the signup form
document.getElementById('showLogin').addEventListener('click', function() {
    document.getElementById('signupFormContainer').style.display = 'none';
    document.getElementById('loginFormContainer').style.display = 'block';
});

// Handle the login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add login validation logic here
    alert('Login form submitted');
});

// Handle the signup form submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;

    if (password !== confirmPassword ) {
        alert('Passwords do not match');
    } else {
        // Add signup validation logic here
        alert('Signup form submitted');
    }
});
