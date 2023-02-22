// const APIKey = "28ccc1976154c3dfd88e7d0dd2a6153b";

// 
let weather = {
    apiKEY : "28ccc1976154c3dfd88e7d0dd2a6153b",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKEY
        ).then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },

// 
    displayWeather: function(data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = 'Weather in ' + name;
        document.querySelector('.icon').src = "https://openweathermap.org/img/wn/" + icon +"@2x.png"
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed is: " + speed + " km/h";
    },
    
    search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
},
};


// Display city, temperature, humidity, wind speed on screen by clicking search
document.querySelector(".search button")
.addEventListener("click", function() {
    weather.search();
});

//queryURL = "https://restcountries.com/v2/name/${countryName}"

let searchBtn = document.getElementById("search-btn");

let countryInp = document.getElementById("country-inp");

searchBtn.addEventListener("click", () => {
    // let countryName = "India";
    let finalURL = 'https://restcountries.com/v3.1/name/Hungary?fullText=true';
    console.log(finalURL); 
    fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
        //Get informations of the country ---- console.log(data);
        console.log(data[0]);
        console.log(data[0].capital[0]);
        console.log(data[0].continents[0]);
        console.log(data[0].flags.svg);
        console.log(data[0].borders);
        console.log(data[0].population);
    });
});