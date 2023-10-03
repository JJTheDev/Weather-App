// script.js

function searchWeather() {
    const city = document.getElementById('cityInput').value.trim();

    if (city !== '') {
        fetchWeather(city);
    } else {
        alert('Please enter a city name.');
    }
}

function fetchWeather(city) {
    const apiKey = 'a6cc87d590c09a5d566799809d2001ae';
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

function displayWeather(data) {
    const weatherContainer = document.getElementById('weather-container');
    weatherContainer.innerHTML = '';

    // Display current weather
    const currentWeather = data.list[0];
    const currentCard = createWeatherCard(currentWeather, true);
    weatherContainer.appendChild(currentCard);

    // Display 5-day forecast
    for (let i = 1; i < data.list.length; i += 8) { // Get data for every 8th item (every 24 hours)
        const forecastItem = data.list[i];
        const forecastCard = createWeatherCard(forecastItem);
        weatherContainer.appendChild(forecastCard);
    }
}

function createWeatherCard(weatherItem, isCurrent = false) {
    const card = document.createElement('div');
    card.className = 'weather-card';

    const dateElement = document.createElement('p');
    dateElement.textContent = isCurrent ? 'Current Weather' : new Date(weatherItem.dt * 1000).toDateString();

    const temperatureElement = document.createElement('p');
    temperatureElement.textContent = `Temperature: ${weatherItem.main.temp}°C`;

    const humidityElement = document.createElement('p');
    humidityElement.textContent = `Humidity: ${weatherItem.main.humidity}%`;

    const windElement = document.createElement('p');
    windElement.textContent = `Wind Speed: ${weatherItem.wind.speed} m/s`;

    card.appendChild(dateElement);
    card.appendChild(temperatureElement);
    card.appendChild(humidityElement);
    card.appendChild(windElement);

    return card;
}
