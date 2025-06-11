const apiKey = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'; // Replace with your OpenWeatherMap API key

function getWeather() {
  const city = document.getElementById('city-input').value;
  const result = document.getElementById('weather-result');

  if (!city) {
    result.innerHTML = 'Please enter a city name.';
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => {
      if (!response.ok) throw new Error('City not found');
      return response.json();
    })
    .then(data => {
      result.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
      `;
    })
    .catch(error => {
      result.innerHTML = `Error: ${error.message}`;
    });
}
