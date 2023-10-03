// Get the API key from the HTML file
const apiKey = 'a6cc87d590c09a5d566799809d2001ae';

// Create a function to fetch the weather data
async function fetchWeatherData(city) {
  // Create an API request URL
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

  // Make the API request
  const response = await fetch(apiUrl);

  // Check if the response was successful
  if (response.ok) {
    // Parse the JSON response
    const data = await response.json();

    // Return the weather data
    return data;
  } else {
    // Throw an error if the response was not successful
    throw new Error('Could not fetch weather data');
  }
}

// Create a function to display the weather data
function displayWeatherData(weatherData) {
  // Get the current temperature
  const temperature = weatherData.main.temp;

  // Get the weather conditions
  const weatherConditions = weatherData.weather[0].description;

  // Get the humidity
  const humidity = weatherData.main.humidity;

  // Update the HTML elements with the weather data
  document.getElementById('city-name').textContent = weatherData.name;
  document.getElementById('temperature').textContent = `${temperature}°C`;
  document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
  document.getElementById('weather-conditions').textContent = weatherConditions;
}

// Add an event listener to the search button
document.getElementById('search-form').addEventListener('submit', async (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the city name from the search input
  const city = document.getElementById('cityInput').value;

  // Fetch the weather data for the city
  const weatherData = await fetchWeatherData(city);

  // Display the weather data
  displayWeatherData(weatherData);
});
