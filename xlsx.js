// Assuming you have an HTML element with id "excelData" to display the data
var excelDataElement = document.getElementById("excelData");

// Fetch the Excel file
fetch('data.xlsx')
  .then(function(response) {
    return response.arrayBuffer();
  })
  .then(function(arrayBuffer) {
    // Convert the Excel data to a workbook object
    var workbook = XLSX.read(arrayBuffer, { type: 'array' });

    // Get the first worksheet
    var worksheet = workbook.Sheets[workbook.SheetNames[0]];

    // Convert the worksheet to JSON
    var jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

    // Display the JSON data on the webpage
    excelDataElement.textContent = JSON.stringify(jsonData);
  })
  .catch(function(error) {
    console.log('Error fetching Excel data:', error);
  });
