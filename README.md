 # Air Quality Checker

This project is a simple Air Quality Checker web application that allows users to check air quality based on latitude and longitude coordinates. The application fetches real-time air quality data from the RapidAPI Air Quality API and displays the relevant air pollution data including AQI, CO, NO2, O3, PM2.5, PM10, and SO2 levels.

# Demo

To see the application in action, enter latitude and longitude coordinates and click on "Check Air Quality." The results will show air quality data for the location.

# Features

Input latitude and longitude to retrieve real-time air quality data.
Displays levels of various pollutants including:
AQI (Air Quality Index)
CO (Carbon Monoxide)
NO2 (Nitrogen Dioxide)
O3 (Ozone)
PM2.5 (Particulate Matter smaller than 2.5 microns)
PM10 (Particulate Matter smaller than 10 microns)
SO2 (Sulfur Dioxide)

# Usage

Enter the latitude and longitude coordinates in the input fields.
Click on the "Check Air Quality" button.
The air quality data will be fetched from the API and displayed on the screen.
Example
Latitude: 37.7749
Longitude: -122.4194 (San Francisco)
The air quality information for the input location will appear on the page.

# API Reference

This project uses the Air Quality by RapidAPI to fetch real-time air quality data.

Base URL: https://air-quality.p.rapidapi.com/current/airquality
Method: GET
Parameters:
lat (Latitude of the location)
lon (Longitude of the location)
Make sure to replace the API key in the index.js file with your own from RapidAPI.

# Technologies Used

HTML5 for the webpage structure

CSS3 for styling the application

JavaScript for dynamic behavior and API requests

RapidAPI for fetching real-time air quality data
Contributing
