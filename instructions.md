This project is a URL shortener application that allows users to input a long URL and receive a shortened version using the Rebrandly API. The purpose of the project is to simplify sharing of long URLs by converting them into shorter, more manageable links. This functionality is commonly used in social media, marketing campaigns, and other scenarios where concise links are preferred.
Purpose of the Project
User Interaction: The application provides a simple interface where users can enter a URL and click a button to generate a shortened link.
API Integration: It leverages the Rebrandly API to perform the URL shortening process. The application sends user-provided URLs to the API and retrieves the shortened version in response.
Dynamic Feedback: The app dynamically updates the webpage with either the shortened URL or an error message if something goes wrong.
Resources Required
To implement and run this project, the following resources are necessary:
Frontend Resources
HTML: Provides the structure of the webpage, including input fields, buttons, and containers for displaying results.
CSS: A stylesheet (public/style.css) is used for styling the webpage to enhance its visual appeal.
Google Fonts: The project uses two fonts (Roboto and Source Sans Pro) from Google Fonts for typography.
JavaScript: Handles user interactions, communicates with the Rebrandly API, and dynamically updates the webpage.
Backend/API Resources
Rebrandly API:
Endpoint: https://api.rebrandly.com/v1/links
API Key: 310ad0b89657475093ceb89bc5aebf28 (used for authentication).
Functionality: Processes POST requests containing URLs and returns their shortened versions.
External Libraries
jQuery: A JavaScript library (https://code.jquery.com/jquery-3.1.0.min.js) is included to simplify DOM manipulation and event handling.
Custom Scripts
public/main.js: Contains the main JavaScript code for handling user input, sending API requests, and rendering responses.
public/helperFunctions.js: Likely includes additional utility functions to support main.js.
Other Resources
Rebrandly Account: An account on Rebrandly is required to generate an API key.
Internet Connection: Necessary for accessing external resources like Google Fonts, jQuery, and the Rebrandly API.
How It Works
Users input a URL in the text field on the webpage.
When they click "Shorten," an event listener triggers an asynchronous function (shortenUrl).
The function sends a POST request to the Rebrandly API with the provided URL in JSON format.
If successful, the API returns a shortened URL, which is displayed on the page using renderResponse. If there’s an error, an appropriate message is shown instead.
This project demonstrates how to integrate third-party APIs into web applications while providing a clean user interface for practical functionality like URL shortening.