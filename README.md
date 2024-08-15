# login-and-sign-up
HTML:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login & Signup</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <div class="form-container" id="loginFormContainer">
            <h2>Login</h2>
            <form id="loginForm">
                <input type="text" id="loginUsername" placeholder="Username" required>
                <input type="password" id="loginPassword" placeholder="Password" required>
                <button type="submit">Login</button>
                <p class="switch">Don't have an account? <a href="#" id="showSignup">Sign Up</a></p>
            </form>
        </div>
        <div class="form-container" id="signupFormContainer" style="display:none;">
            <h2>Sign Up</h2>
            <form id="signupForm">
                <input type="text" id="signupUsername" placeholder="Username" required>
                <input type="email" id="signupEmail" placeholder="Email" required>
                <input type="password" id="signupPassword" placeholder="Password" required>
                <input type="password" id="signupConfirmPassword" placeholder="Confirm Password" required>
                <button type="submit">Sign Up</button>
                <p class="switch">Already have an account? <a href="#" id="showLogin">Login</a></p>
    
            </form>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>

css:
body {
    font-family: Arial, sans-serif;
    background-color: #E2DAD6;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    width: 350px; /* Increased width for better spacing */
    padding: 25px;
    background-color: #F5EDED;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); /* Slightly more shadow for depth */
    border-radius: 12px; /* Softer corner radius */
}

.form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

h2 {
    text-align: center;
    margin-bottom: 25px; /* Increased spacing for a balanced look */
    color: #6482AD;
    font-size: 24px; /* Slightly larger font size */
}

input {
    width: 80%;
    padding: 12px; /* Increased padding for better usability */
    margin: 20px; /* More consistent spacing */
    border: 1px solid #7FA1C3;
    border-radius: 6px;
    background-color: #E2DAD6;
    color: #6482AD;
    font-size: 16px; /* Increased font size for readability */
}

button {
    width: 30%;
    padding: 12px; /* Matching padding with input */
    margin: 10px auto;
    background-color: #6482AD;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    text-align: center;
    font-size: 16px; /* Matching font size with input */
    transition: background-color 0.3s ease; /* Smooth transition for hover effect */
    display: block;
}

button:hover {
    background-color: #7FA1C3;
}

.switch {
    text-align: center;
    margin-top: 20px; /* Increased spacing for clarity */
    font-size: 14px; /* Slightly smaller font size for secondary text */
    color: #6482AD;
}

.switch a {
    color: #6482AD;
    text-decoration: none;
    font-weight: bold; /* Bold for emphasis */
}

.switch a:hover {
    text-decoration: underline;
}

js:
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



