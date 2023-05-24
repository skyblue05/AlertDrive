<?php
session_start();

// Define your user credentials
$valid_username = "your_username";
$valid_password = "your_password";

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Get the submitted username and password
  $submitted_username = $_POST["username"];
  $submitted_password = $_POST["password"];

  // Verify the submitted credentials
  if ($submitted_username == $valid_username && $submitted_password == $valid_password) {
    // Authentication successful, set the session variable
    $_SESSION["user_id"] = 1; // You can use any unique identifier for the user

    // Redirect the user to the dashboard or any other authorized page
    header("Location: dashboard.html");
    exit;
  } else {
    // Invalid credentials, show an error message
    $error_message = "Invalid username or password";
  }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login</title>
  <link rel="stylesheet" href="styles.css">
  <link rel="icon" href="Icon.png">
</head>

<body>
  <header>
    <nav>
      <h1>DriCare System</h1>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="dashboard.html">Dashboard</a></li>
        <li><a href="login-signup.html">Login/Sign Up</a></li>
        <li><a href="privacypolicy.html">privacy policy</a></li>
        <li><a href="termsandconditions.html">Terms & Conditions</a></li>
      </ul>
    </nav>
  </header>
  <div class="container">
    <div class="box-1">
      <h2>Login</h2>
      <?php
      // Show error message if exists
      if (isset($error_message)) {
        echo "<p class='error'>$error_message</p>";
      }
      ?>
      <form action="login_process.php" method="POST">
      <a href="https://accounts.google.com/o/oauth2/auth?client_id=791968703776-5lvt2ntnigef5jlvpnu5gb7kmp7dbcn9.apps.googleusercontent.com&redirect_uri=https://alertdrive.netlify.app/&response_type=code&scope=email%20profile">
    <button>Sign Up with Google</button>
  </a>
      </form>
    </div>
  </div>
  <footer>
    <p>&copy; 2023 DriCare System. All rights reserved.</p>
  </footer>
</body>

</html>
