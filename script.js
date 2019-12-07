var searchBtn = document.querySelector("#cityBtn");
var input = document.querySelector("#cityIn");
var newCities = [];
var form = document.querySelector("#form");
var list = document.querySelector("#lister");
var city = "Charlotte";

$(document).ready(function () {

    var update = function () {
        $("#city").text(city + " ("
            + moment().format('MMMM D, YYYY') + ") ");

    }

    setInterval(update, 100);



    function weatherCurrent() {
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=89696f3ad78f478fd85c5509ea49cd53";



        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            var tempF = ((response.main.temp_max - 273.15) * (9 / 5) + 32).toFixed(1);
            $('#temp').text("Temperature: " + tempF + " °F");
            $('#humidity').text("Humidity: " + response.main.humidity);
            $('#wind').text("Wind Speed: " + response.wind.speed);

        }
        )

    };
    weatherCurrent();
    weatherFuture();
    render();
    function weatherFuture() {
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=89696f3ad78f478fd85c5509ea49cd53";


        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            var tempF = ((response.list[4].main.temp_max - 273.15) * (9 / 5) + 32).toFixed(0);
            $('.date1').text(moment(response.list[4].dt_txt).format("M/D/YYYY"));
            $('.icon1').empty();
            console.log('image: ', response.list[4].weather[0].icon); // TODO: Remove
            $('.icon1').html('<img src="http://openweathermap.org/img/wn/' + response.list[4].weather[0].icon + '@2x.png"/>');
            $('.temp1').text("Temp: " + tempF + " °F");
            $('.humidity1').text("Humidity: " + response.list[4].main.humidity);

            var tempF2 = ((response.list[12].main.temp_max - 273.15) * (9 / 5) + 32).toFixed(0);
            $('.date2').text(moment(response.list[12].dt_txt).format("M/D/YYYY"));
            // $('icon2').html('src', 'http://openweathermap.org/img/wn/" + response.list[12].weather[0].icon + "@2x.png' )
            $('.icon2').html('<img src="http://openweathermap.org/img/wn/' + response.list[12].weather[0].icon + '@2x.png"/>');
            $('.temp2').text("Temp: " + tempF2 + " °F");
            $('.humidity2').text("Humidity: " + response.list[12].main.humidity);

            var tempF3 = ((response.list[20].main.temp_max - 273.15) * (9 / 5) + 32).toFixed(0);
            $('.date3').text(moment(response.list[20].dt_txt).format("M/D/YYYY"));
            $('.icon3').html("<img id='theImg' src='http://openweathermap.org/img/wn/" + response.list[20].weather[0].icon + "@2x.png'/>");
            $('.temp3').text("Temp: " + tempF3 + " °F");
            $('.humidity3').text("Humidity: " + response.list[20].main.humidity);

            var tempF4 = ((response.list[28].main.temp_max - 273.15) * (9 / 5) + 32).toFixed(0);
            $('.date4').text(moment(response.list[28].dt_txt).format("M/D/YYYY"));
            $('.icon4').html("<img id='theImg' src='http://openweathermap.org/img/wn/" + response.list[28].weather[0].icon + "@2x.png'/>");
            $('.temp4').text("Temp: " + tempF4 + " °F");
            $('.humidity4').text("Humidity: " + response.list[28].main.humidity);

            var tempF5 = ((response.list[36].main.temp_max - 273.15) * (9 / 5) + 32).toFixed(0);
            $('.date5').text(moment(response.list[36].dt_txt).format("M/D/YYYY"));
            $('.icon5').html("<img id='theImg' src='http://openweathermap.org/img/wn/" + response.list[36].weather[0].icon + "@2x.png'/>");
            $('.temp5').text("Temp: " + tempF5 + " °F");
            $('.humidity5').text("Humidity: " + response.list[36].main.humidity);


        }
        )

    };



    function render() {
        // Clear todoList element 

        list.innerHTML = "";



        // Render a new li for each todo
        for (var i = 0; i < newCities.length; i++) {

            var todo = newCities[i];

            var li = document.createElement("li");
            var button = document.createElement("button")
            button.setAttribute("class", "btn");
            button.textContent = todo;
            li.appendChild(button);
            list.prepend(li);
            if (newCities.length > 6) {
                var removed = newCities.splice(-7, 1);
            }
            button.addEventListener("click", function (event) {
                event.preventDefault();

                city = this.textContent


                weatherCurrent();
                weatherFuture();

            })

        }

    }

    function init() {
        // Get stored todos from localStorage
        // Parsing the JSON string to an object
        var cities = JSON.parse(localStorage.getItem("city"));
        console.log(cities);
        // If todos were retrieved from localStorage, update the todos array to it
        if (cities !== null) {
            newCities = cities;
        }
        console.log("localStorage")
        // Render todos to the DOM


    }

    function storeCities() {
        // Stringify and set newcities key in localStorage to todos array
        localStorage.setItem("city", JSON.stringify(newCities));

    }
    // When form is submitted...
    searchBtn.addEventListener("click", function (event) {

        event.preventDefault();
        var inputText = input.value.trim();
        if (inputText === "") {
            return;
        }
        var newCity = inputText;
        console.log(newCities);
        newCities.push(newCity);
        console.log(newCities);

        city = input.value;




        console.log("render");


        localStorage.setItem('city', JSON.stringify(newCities));
        input.value = "";

        // Re-render the list

        render();
        storeCities();
        weatherCurrent();
        weatherFuture();

    });

    function fill() {
        var git = JSON.parse(localStorage.getItem('city'));

        for (var i = 0; i < git.length; i++) {

            var todo = git[i];

            var li = document.createElement("li");
            var button = document.createElement("button")
            button.setAttribute("class", "btn");
            button.textContent = todo;
            li.appendChild(button);
            list.prepend(li);
            if (git.length > 6) {
                var removed = git.splice(-7, 1);
            }

        }
        // button.addEventListener("click", function(event){
        $(document).on("click", ".btn", function () {
            event.preventDefault();
            console.log("click" + this.textContent);
            city = this.textContent


        })
        weatherCurrent();
        weatherFuture();

    };



    fill();
    init();
})