//whetherTask.js Module
//Find out whether or not the weather will get in the way

let cityLatitude = "47.658970"
let cityLongitude = "-122.697723"

function next48() {
    let weatherFetchURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${cityLatitude}&lon=${cityLongitude}&units=imperial&appid=ae481a6848ca13c83166fe955c1d69ca`
    fetch(weatherFetchURL)
        .then(function (response) {
            console.log(response)
            return
        })
};

