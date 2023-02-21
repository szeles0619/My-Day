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

