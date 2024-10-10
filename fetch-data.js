// Define the async function to fetch user data
async function fetchUserData() {
    // API endpoint URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Select the container where the data will be displayed
    const dataContainer = document.getElementById('api-data');

    // Use try-catch to handle errors during fetch
    try {
        // Fetch data from the API and wait for the response
        const response = await fetch(apiUrl);

        // Convert the response to JSON
        const users = await response.json();

        // Clear the existing content (loading message)
        dataContainer.innerHTML = '';

        // Create a <ul> element to list users
        const userList = document.createElement('ul');

        // Loop through the fetched user data
        users.forEach(user => {
            // Create an <li> element for each user
            const listItem = document.createElement('li');
            // Set the text content to the user's name
            listItem.textContent = user.name;
            // Append the <li> to the <ul>
            userList.appendChild(listItem);
        });

        // Append the <ul> to the data container
        dataContainer.appendChild(userList);

    } catch (error) {
        // If there's an error, clear the data container
        dataContainer.innerHTML = '';
        // Display an error message
        dataContainer.textContent = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Run fetchUserData when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Show loading message before data is fetched
    const dataContainer = document.getElementById('api-data');
    dataContainer.textContent = 'Loading user data...';

    // Fetch user data
    fetchUserData();
});
