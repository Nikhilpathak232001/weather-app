async function getWeather() {
    const city = document.getElementById("cityname").value.trim();

    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=73b0371df80665cbef13446b533a8594&units=metric`
        );

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        // Update weather data
        document.getElementById("temp").innerHTML = data.main.temp;
        document.getElementById("citydisplay").innerHTML = data.name;
        document.getElementById("windspeed").innerHTML = `💨 Wind Speed: ${data.wind.speed} Km/h`;
        document.getElementById("humidity").innerHTML = `🌫️ Humidity: ${data.main.humidity}%`;

        // Update weather icon
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        document.getElementById("weatherIcon").src = iconUrl;
        document.getElementById("weatherIcon").alt = data.weather[0].description;

    } catch (error) {
        alert("Error: " + error.message);
    }
}
