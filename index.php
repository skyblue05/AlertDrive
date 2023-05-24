<?php
session_start();

// Check if the user is already logged in
if (isset($_SESSION['username'])) {
    // Redirect to the main page
    header("Location: main.php");
    exit();
}
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DriCare Login / Sign Up</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="icon" href="Icon.png">

    <!-- Add your CSS styling here -->
    <style>
        /* ... */
    </style>
</head>

<body>
<header>
    <h1>DriCare System</h1>
    <nav>
      <div class="menu-icon" onclick="toggleMenu()"></div>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="dashboard.html">Dashboard</a></li>
        <li><a href="login-signup.html">Login/Sign Up</a></li>
        <li><a href="privacypolicy.html">Privacy policy</a></li>
        <li><a href="termsandconditions.html">Terms & Conditions</a></li>
      </ul>
    </nav>
  </header>

<main>
    <h1>Welcome to DriCare System</h1>

    <div id="admin-login">
        <h2>Admin Login</h2>
        <button> <a
                        href="https://accounts.google.com/o/oauth2/auth?client_id=791968703776-5lvt2ntnigef5jlvpnu5gb7kmp7dbcn9.apps.googleusercontent.com&redirect_uri=https://alertdrive.netlify.app/&response_type=code&scope=email%20profile"
                        id="signup">
                        Sign Up with Google</button>
    </div>

    <!-- Add your JavaScript code and logic to handle form submission here -->

</main>

<footer>
    <p>&copy; 2023 DriCare System. All rights reserved.</p>
</footer>
<script src="app.js"></script>

</body>
</html>
