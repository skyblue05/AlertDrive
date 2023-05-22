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
