function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windSpeedElement = document.querySelector("#wind-speed");
    let timeElement = document.querySelector("#time");
    let date = new Date(response.data.time *1000);

    cityElement.innerHTML = response.data.city;

    timeElement.innerHTML = formatDate(date); 
    descriptionElement.innerHTML = response.data.condition.discription;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
    temperatureElement.innerHTML = Math.round(temperature);

    function formatDate(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let days = [
            "sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Sartuday",
        ];
        let day = days[date.getDay()];

        if (minutes < 10) {
            minutes = `0${mitutes}`;

        }




        return `${day} ${hours} ${minutes}`;

    }
    



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