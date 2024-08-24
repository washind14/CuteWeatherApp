document.getElementById('getWeatherBtn').addEventListener('click', function () {
  const city = document.getElementById('cityInput').value;
  const apiKey = '959d75bc73b4f640ded232ece8eb5947'; // Replace with your OpenWeatherMap API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          if (data.cod === 200) {
            
            const weatherCondition = data.weather[0].main.toLowerCase();
            const weatherImageUrl = `./images/${weatherCondition}.png`;
            const roundTemp = Math.round(data.main.temp);

              document.getElementById('cityName').innerText = data.name;
              document.getElementById('weatherImage').src = weatherImageUrl;
              document.getElementById('temperature').innerText = `${roundTemp}°F`;
              document.getElementById('description').innerText = `${data.weather[0].description}`;
              document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
          } else {
              alert('City not found!');
          }
      })
      .catch(error => console.error('Error fetching weather data:', error));

});