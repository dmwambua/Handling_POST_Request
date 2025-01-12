// Information to reach API
const apiKey = 'API KEY'; // Copy API Key from rebrandly and put it in the quotation marksYour unique API key for authentication from https://api.rebrandly.com/v1/links
const url = 'https://api.rebrandly.com/v1/links'; // The endpoint for creating shortened links

// Some page elements
const inputField = document.querySelector('#input'); // Input field where users enter the URL to shorten
const shortenButton = document.querySelector('#shorten'); // Button to trigger the URL shortening process
const responseField = document.querySelector('#responseField'); // Element to display the response from the API

// Asynchronous function to shorten a URL
const shortenUrl = () => {
    const urlToShorten = inputField.value; // Get the URL entered by the user
    const data = JSON.stringify({ destination: urlToShorten }); // Convert the URL into a JSON object for the API request

    // Make a POST request to the Rebrandly API
    fetch(url, {
        method: 'POST', // HTTP method for creating resources
        headers: {
            'Content-type': 'application/json', // Specify that the data being sent is in JSON format
            'apikey': apiKey // Include the API key for authorization
        },
        body: data // Attach the JSON data as the request body
    })
        .then(response => {
            if (response.ok) { // Check if the response status is OK (200-299)
                return response.json(); // Parse and return the JSON response from the server
            }
            throw new Error('Request failed!'); // Throw an error if the request was unsuccessful
        }, networkError => {
            console.log(networkError.message); // Log any network errors that occur during the request
        })
        .then(jsonResponse => {
            renderResponse(jsonResponse); // Call a function to handle and display the API response
        });
}

// Clear page and call asynchronous function when button is clicked
const displayShortUrl = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    while (responseField.firstChild) {
        responseField.removeChild(responseField.firstChild); // Clear any previous responses from the display area
    }
    shortenUrl(); // Call the function to shorten the URL and handle API interaction
}

// Add an event listener to trigger URL shortening when the button is clicked
shortenButton.addEventListener('click', displayShortUrl);
