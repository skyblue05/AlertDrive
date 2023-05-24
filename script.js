// Retrieve the table body element
const tableBody = document.querySelector('tbody');

// Function to update the table with data
function updateTable(data) {
  // Clear the existing table rows
  tableBody.innerHTML = '';

  // Iterate over the data and create table rows dynamically
  data.forEach((entry, index) => {
    // Create a new table row
    const row = document.createElement('tr');

    // Create table cells and set their content
    const srNoCell = document.createElement('td');
    srNoCell.textContent = index + 1;

    const driverNameCell = document.createElement('td');
    driverNameCell.textContent = entry.driverName;

    const vehicleNoCell = document.createElement('td');
    vehicleNoCell.textContent = entry.vehicleNo;

    const drowsinessCountCell = document.createElement('td');
    drowsinessCountCell.textContent = entry.drowsinessCount;

    const yawnCountCell = document.createElement('td');
    yawnCountCell.textContent = entry.yawnCount;

    const clickHereCell = document.createElement('td');
    const link = document.createElement('a');
    link.href = 'driver-details.html'; // Replace with the driver details page URL
    link.textContent = 'Click here';
    clickHereCell.appendChild(link);

    // Append the cells to the row
    row.appendChild(srNoCell);
    row.appendChild(driverNameCell);
    row.appendChild(vehicleNoCell);
    row.appendChild(drowsinessCountCell);
    row.appendChild(yawnCountCell);
    row.appendChild(clickHereCell);

    // Append the row to the table body
    tableBody.appendChild(row);
  });
}

// Retrieve the data passed from the Python code
const receivedData = JSON.parse('{{ jsonData }}');

// Call the updateTable function with the received data
updateTable(receivedData);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqz8ailLozfBZqCf-pCuEGqoYYEpuzF8o",
  authDomain: "alert-drive-ef323.firebaseapp.com",
  projectId: "alert-drive-ef323",
  storageBucket: "alert-drive-ef323.appspot.com",
  messagingSenderId: "586560542589",
  appId: "1:586560542589:web:fb9b41b601823c48aade14",
  measurementId: "G-PXBFNMJ6VN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Table update automatically

// Fetch data from data.json file
fetch('https://raw.githubusercontent.com/skyblue05/AlertDrive/master/data.json')
  .then(response => response.json())
  .then(data => {
    // Get the table body element
    const tableBody = document.querySelector('#driver-table tbody');

    // Loop through the data and create table rows
    data.forEach((driver, index) => {
      const row = document.createElement('tr');
      
      // Create table cells and set the data
      const srNoCell = document.createElement('td');
      srNoCell.textContent = index + 1;
      row.appendChild(srNoCell);
      
      const nameCell = document.createElement('td');
      nameCell.textContent = driver.name;
      row.appendChild(nameCell);
      
      const vehicleNoCell = document.createElement('td');
      vehicleNoCell.textContent = driver.vehicleNo;
      row.appendChild(vehicleNoCell);
      
      const drowsinessCountCell = document.createElement('td');
      drowsinessCountCell.textContent = driver.drowsinessCount;
      row.appendChild(drowsinessCountCell);
      
      const yawnCountCell = document.createElement('td');
      yawnCountCell.textContent = driver.yawnCount;
      row.appendChild(yawnCountCell);
      
      const clickHereCell = document.createElement('td');
      // Add a link or button element as per your requirement
      const link = document.createElement('a');
      link.textContent = 'Click here';
      link.href = driver.link;
      clickHereCell.appendChild(link);
      row.appendChild(clickHereCell);
      
      // Append the row to the table body
      tableBody.appendChild(row);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });


  function toggleMenu() {
    var menuIcon = document.querySelector('.menu-icon');
    var navList = document.querySelector('nav ul li');

    menuIcon.classList.toggle('clicked'); // Toggle the "clicked" class
    navList.classList.toggle('show'); // Toggle the "show" class
  }