function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#weather-app-city");

    cityElement.innerHTML = response.data.city;
 temperatureElement.innerHTML = Math.round(temperature);

}


function searchCity(city) {
let apiKey = "0e8d8te310o65c302134ad82cbe5fff8";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(refreshWeather);
}


function handleSearchSubmit(event) {
    event.preventDefault();
let searchInput = document.querySelector("#search-form-input");

searchCity(searchInput.vaiue);

}
let searchFornElement = document.querySelector("#search-form");
searchFornElement.addEventListener("submit", handleSearchSubmit);

searchCity("Paris");