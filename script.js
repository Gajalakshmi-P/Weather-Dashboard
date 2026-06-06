async function getWeather(){

    const city =
    document.getElementById("city").value;

    const weatherDiv =
    document.getElementById("weather");

    weatherDiv.innerHTML = "Loading...";

    try{

        const response =
        await fetch(
        `https://wttr.in/${city}?format=j1`
        );

        const data =
        await response.json();

        weatherDiv.innerHTML = `
        <h2>${city}</h2>

        <p>
        Temperature:
        ${data.current_condition[0].temp_C}°C
        </p>

        <p>
        Humidity:
        ${data.current_condition[0].humidity}%
        </p>

        <p>
        Wind Speed:
        ${data.current_condition[0].windspeedKmph}
        km/h
        </p>
        `;

    }
    catch(error){

        weatherDiv.innerHTML =
        "Unable to fetch weather data.";

        console.log(error);
    }
}
