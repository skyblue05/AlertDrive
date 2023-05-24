<?php
session_start();

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Perform form validation and authentication
    $username = $_POST['admin-username'];
    $password = $_POST['admin-password'];

    // Validate credentials (replace this with your authentication logic)
    if ($username === 'admin' && $password === 'password') {
        // Set the session variables
        $_SESSION['username'] = $username;

        // Redirect to the main page
        header("Location: main.php");
        exit();
    } else {
        // Display an error message if authentication fails
        $error = "Invalid username or password";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
<h1>Login</h1>
<form action="login.php" method="POST">
    <!-- Admin login form fields -->
    <label for="admin-username">Username:</label>
    <input type="text" id="admin-username" name="admin-username" required>

    <label for="admin-password">Password:</label>
    <input type="password" id="admin-password" name="admin-password" required>

    <button type="submit">Login</button>
</form>

<?php
if (isset($error)) {
    echo "<p>$error</p>";
}
?>

<p>Don't have an account? <a href="signup.php">Sign up</a></p>
</body>
</html>
