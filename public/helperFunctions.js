// Manipulates responseField to render a formatted and appropriate message
const renderResponse = (res) => {
    // Checks if the response contains errors
    if (res.errors) {
        // If there are errors, display an error message in the response field
        responseField.innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
    } else {
        // If no errors, display the shortened URL in a formatted message
        responseField.innerHTML = `<p>Your shortened url is: </p><p> ${res.shortUrl} </p>`;
    }
}

// Manipulates responseField to render an unformatted response
const renderRawResponse = (res) => {
    // Checks if the response contains errors
    if (res.errors) {
        // If there are errors, display an error message in the response field
        responseField.innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
    } else {
        // If no errors, format the raw JSON response by adding line breaks for readability
        let structuredRes = JSON.stringify(res).replace(/,/g, ", \n");
        structuredRes = `<pre>${structuredRes}</pre>`; // Wrap the formatted JSON in <pre> tags for proper display
        responseField.innerHTML = `${structuredRes}`; // Display the raw JSON in the response field
    }
}

// Renders the JSON that was returned when the Promise from fetch resolves.
const renderJsonResponse = (response) => {
    // Creates an empty object to store the JSON in key-value pairs
    let rawJson = {};
    for (let key in response) {
        rawJson[key] = response[key]; // Populate the object with key-value pairs from the response
    }
    // Converts JSON into a string and adds line breaks for better readability
    rawJson = JSON.stringify(rawJson).replace(/,/g, ", \n");
    // Manipulates responseField to show the returned JSON in a readable format
    responseField.innerHTML = `<pre>${rawJson}</pre>`;
}
