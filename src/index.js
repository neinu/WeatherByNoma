function refreshWeather(response) {
    console.log(response.data);
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windSpeedElement = document.querySelector("#wind-speed");
    let timeElement = document.querySelector("#time");
    console.log(response.data);
    let currentTime = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});
    let date = new Date(response.data.time *1000);
    let iconElement = document.querySelector("#icon");
 
    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-city"/>`;
    cityElement.innerHTML = response.data.city;
    timeElement.innerHTML = currentTime;
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
    temperatureElement.innerHTML = Math.round(temperature);
    
}

function formatDate(date) {
    let currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let year = currentDate.getFullYear();
    let days = [
        "sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Sartuday",
    ];
    let day = days[currentDate.getDay()];

    if (minutes < 10) {
        minutes = `0${mitutes}`;
    }

    return `${day} ${hours} ${minutes}`;
}
    






function searchCity(city) {
    let apiKey = "0e8d8te310o65c302134ad82cbe5fff8";
     let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(refreshWeather);
}


function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    console.log(searchInput.value);
    searchCity(searchInput.value);

}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Paris");