var update = function () {
    $("#city").text(city + " ("
        + moment().format('MMMM D, YYYY') + ") ");
}

setInterval(update, 100);




var city = "Charlotte";
function weatherCurrent() {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=89696f3ad78f478fd85c5509ea49cd53";



    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var tempF = ((response.main.temp - 273.15) * (9 / 5) + 32).toFixed(2);
        $('#temp').text("Temperature: " + tempF + " °F");
        $('#humidity').text("Humidity: " + response.main.humidity);
        $('#wind').text("Wind Speed: " + response.wind.speed);
        $('#uv').text("UV Index: " + response.main.uvindex);
    }
    )
};
weatherCurrent();

function weatherFuture() {
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=89696f3ad78f478fd85c5509ea49cd53";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var tempF = ((response.list[4].main.temp - 273.15) * (9 / 5) + 32).toFixed(0);
        $('.date1').text(moment(response.list[4].dt_txt).format("M/D/YYYY"));
        $('.icon1').append("<img id='theImg' src='http://openweathermap.org/img/wn/" + response.list[4].weather[0].icon + "@2x.png'/>");
        $('.temp1').text("Temp: " + tempF + " °F");
        $('.humidity1').text("Humidity: " + response.list[4].main.humidity);

        var tempF2 = ((response.list[12].main.temp - 273.15) * (9 / 5) + 32).toFixed(0);
        $('.date2').text(moment(response.list[12].dt_txt).format("M/D/YYYY"));
        $('.icon2').append("<img id='theImg' src='http://openweathermap.org/img/wn/" + response.list[12].weather[0].icon + "@2x.png'/>");
        $('.temp2').text("Temp: " + tempF2 + " °F");
        $('.humidity2').text("Humidity: " + response.list[12].main.humidity);

        var tempF3 = ((response.list[20].main.temp - 273.15) * (9 / 5) + 32).toFixed(0);
        $('.date3').text(moment(response.list[20].dt_txt).format("M/D/YYYY"));
        $('.icon3').append("<img id='theImg' src='http://openweathermap.org/img/wn/" + response.list[20].weather[0].icon + "@2x.png'/>");
        $('.temp3').text("Temp: " + tempF3 + " °F");
        $('.humidity3').text("Humidity: " + response.list[20].main.humidity);

        var tempF4 = ((response.list[28].main.temp - 273.15) * (9 / 5) + 32).toFixed(0);
        $('.date4').text(moment(response.list[28].dt_txt).format("M/D/YYYY"));
        $('.icon4').append("<img id='theImg' src='http://openweathermap.org/img/wn/" + response.list[28].weather[0].icon + "@2x.png'/>");
        $('.temp4').text("Temp: " + tempF4 + " °F");
        $('.humidity4').text("Humidity: " + response.list[28].main.humidity);

        var tempF5 = ((response.list[36].main.temp - 273.15) * (9 / 5) + 32).toFixed(0);
        $('.date5').text(moment(response.list[36].dt_txt).format("M/D/YYYY"));
        $('.icon5').append("<img id='theImg' src='http://openweathermap.org/img/wn/" + response.list[36].weather[0].icon + "@2x.png'/>");
        $('.temp5').text("Temp: " + tempF5 + " °F");
        $('.humidity5').text("Humidity: " + response.list[36].main.humidity);


    }
    )
};
weatherFuture();
    // function newCity(){

    // }