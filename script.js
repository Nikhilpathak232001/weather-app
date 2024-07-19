async function getWeather() {
    var cityname = document.getElementById("cityname").value;
    var response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=73b0371df80665cbef13446b533a8594&units=metric`) 
    var data = await response.json();
    // console.log(data);
    document.getElementById("temp").innerHTML = data.main.temp;
}