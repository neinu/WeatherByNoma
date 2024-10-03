function handleSearchSubmit(event) {
    event.preventDefault();
let searchInput = document.querySelector("#search-form-input");
console.log(searchInput.value);

let cityElement = document.querySelector("#weather-app-city");
cityElement.innerHTML = searchInput.value;
}
let searchFornElement = document.querySelector("#search-form");
searchFornElement.addEventListener("submit", handleSearchSubmit);