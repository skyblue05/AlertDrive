// Admin login form submission handler
const adminLoginForm = document.querySelector('#admin-login-form');
adminLoginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the entered username and password
    const adminUsername = document.querySelector('#admin-username').value;
    const adminPassword = document.querySelector('#admin-password').value;

    // Make an API request to validate admin credentials
    // Replace 'api/admin-login' with the actual API endpoint for admin login
    fetch('api/admin-login', {
        method: 'POST',
        body: JSON.stringify({ username: adminUsername, password: adminPassword }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            // Handle API response
            if (data.success) {
                // Admin authentication successful
                // Redirect to admin dashboard page
                window.location.href = 'admin-dashboard.html';
            } else {
                // Admin authentication failed
                // Display error message or perform other actions
                alert('Invalid admin credentials');
            }
        })
        .catch(error => {
            // Handle error
            console.error('Error:', error);
        });
});
