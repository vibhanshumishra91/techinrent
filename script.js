// Eoboot Website JavaScript Functionality

// Function to display current date and time
function displayCurrentDateTime() {
    const now = new Date();
    const formattedDate = now.toUTCString().replace(' GMT', ''); // Remove GMT string
    console.log(`Current Date and Time (UTC): ${formattedDate}`);
}

displayCurrentDateTime();

// Add more functionality as needed