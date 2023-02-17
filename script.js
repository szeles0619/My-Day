var APIKey = "166a433c57516f51dfab1f7edaed8413";
var searchTemperature = ()=>{
    var city = document.getElementById("city-name").value
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=" + APIKey;
    fetch(queryURL)
    .then(res => res.json())
    .then(date => console.log(date))   
}