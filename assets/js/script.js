// const APIKey = "28ccc1976154c3dfd88e7d0dd2a6153b";

// This is a variable which contains the API key for the OpenWeatherAPI
let weather = {
    apiKEY: "28ccc1976154c3dfd88e7d0dd2a6153b",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKEY
        ).then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },

    // Fetchig data from the OpenWeatherAPi to display the selected informations
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = 'Weather in ' + name;
        document.querySelector('.icon').src = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
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
    .addEventListener("click", function () {
        weather.search();
    });

//Setting up variable to pass to REST countries API
let container_2 = document.getElementById('container_2');
let searchButton = document.getElementById('searchButton');

let country_name = document.getElementById('countryName');
let officalName = document.getElementById('officalName');
let capital = document.getElementById('capital');
let population = document.getElementById('population');
let continent = document.getElementById('continent');

let storeCountryName = ''

//Fetching the data from the REST countries API
function fetchData() {
    let countryName = countryInput.value

    if (countryName == '') {
        //alert('Enter a  country name ...') //this is an alert when you click search without puttin any text
    }
    else {
        fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
            .then(res => res.json())
            .then(data => {
                console.log(data[0].capital);
                flag.classList.replace('inactive', 'active')

                country_name.innerHTML = 'Your selected country is: ' + data[0].name.common
                capital.innerHTML = 'Capital: ' + data[0].capital
                population.innerHTML = 'Population: ' + data[0].population
                flag.src = data[0].flags.png
                continent.innerHTML = 'Find in: ' + data[0].continents
            })
            .catch(() => {
                alert('Invalid country name...')
                location.reload()
            })
        storeCountryName = countryName
        countryInput.value = ''
        searchButton.classList.replace('active', 'inactive')

        //localStorage for user input for capital city
        localStorage.setItem('country', 'capital');
        console.log(localStorage.getItem('capital'));

    }
}

searchButton.addEventListener('click', fetchData)

