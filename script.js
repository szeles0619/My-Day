// const APIKey = "28ccc1976154c3dfd88e7d0dd2a6153b";

// 
let weather = {
    apiKEY: "28ccc1976154c3dfd88e7d0dd2a6153b",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKEY
        ).then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },

    // 
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

// //queryURL = "https://restcountries.com/v2/name/${countryName}"

// let searchBtn = document.getElementById("search-btn");

// let countryInp = document.getElementById("country-inp");

// searchBtn.addEventListener("click", () => {
//     // let countryName = "Hungary";
//     let queryURL = 'https://restcountries.com/v3.1/name/Hungary?fullText=true';
//     console.log(queryURL); 
//     fetch(queryURL)
//     .then((response) => response.json())
//     .then((data) => {
//         //Get informations of the country ---- console.log(data);
//         console.log(data[0]);
//         console.log(data[0].capital[0]);
//         console.log(data[0].continents[0]);
//         console.log(data[0].flags.svg);
//         console.log(data[0].borders);
//         console.log(data[0].population);
//     });
// });


let container_2 = document.getElementById('container_2')
let searchButton = document.getElementById('searchButton')

let country_name = document.getElementById('countryName')
let officalName = document.getElementById('officalName')
let capital = document.getElementById('capital')
let population = document.getElementById('population')
let continent = document.getElementById('continent')

let storeCountryName = ''

function fetchData() {
    let countryName = countryInput.value

    if (countryName == '') {
        alert('Enter a  country name ...')
    }
    else {
        fetch("https://restcountries.com/v3.1/name/Hungary?fullText=true")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                flag.classList.replace('inactive', 'active')
                
                //let number_formatter = new Intl.NumberFormat('en-US')
                country_name.innerHTML = 'Your selected country is: ' + data[0].name.common
                //officalName.innerHTML = data[0].name
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
    }
}

searchButton.addEventListener('click', fetchData)