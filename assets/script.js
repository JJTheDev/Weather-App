console.log("hi");

// This function will get the value from the input box and trim any extra spaces

function searchWeather() {
    const city = document.getElementById('cityinput').Value.trim();
    if (city !== ''){
        fetchWeather(city);
    }else {
        alert('Please enter a city name.');
    }
}


// This function is to fetch eather data 

function fetchWeather(city){
    const apiKey = 'a6cc87d590c09a5d566799809d2001ae';
    const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}'
}

// fetch data from the OpenWeathermap Api

fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        // call a function to display the 5-day forecast using the fetched data
        displayForecast(data);
    })
    .catch(error => console.error('Error fetching weather data', error));

// Function to display 5-day forecast
function displayForecast(data){
    const forecastContainer = document.getElementById('weatherResult');
    // clear previous content in the container
    forecastContainer.innerHTML = '';

    for( let i =0; i < data.list.length; i += 8) {
        const forcastItem = data.list[i]
        const date = new date(forecasrItem.dt * 1000); // convert timestamp to date

        // create paragraph elements for date, temprature, and description
        const forecastCard = document.createElement('div');
        forecastCard.className = 'forecast-card';

        const dateElement = document.createElement('p');
        dateElement.textContent = date.toDateString();

        const tempratureElement = document.createElement('p');
        tempratureElement.textcontent = "Temprature:${forecastItem.main.temp}°C`";
        
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = 'Description ${forecastItem.weather[0].description}';

        // Appenmd the paragraph elements to the forecast card 
        
        forecastCard.appendChild(dateElement);
        forecastCard.appendChild(tempratureElement);
        forecastCard.appendChild(descriptionElement);

        //Append the forecast card to the forecast container 

        forecastContainer.appendChild(forecastCard);

    }

}

console.log('hi');