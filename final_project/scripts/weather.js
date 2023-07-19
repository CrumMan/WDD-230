// select HTML elements in the document
const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const currentWind = document.querySelector('#windspeed');
const currentHumidity=document.querySelector('#humidity')

const lat = 33.158092;
const lon =  -117.350594;
const appid = "380e81ee1220db3a96f036cca81babcb";
// const appid = "be32833d7239c63fb1ec02ebf74bf9fc";
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}&units=imperial`

function displayResults(weatherData) {
    // toFixed(0) rounds the temperature to the nearest whole number
  
    // You can use @2x or @4x to make the icon bigger, or omit it for the standard size
    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`
    const desc = weatherData.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    const temp =   weatherData.main.temp.toFixed(0);
    const windspeed = weatherData.wind.speed.toFixed(0);
    const humidity = weatherData.main.humidity.toFixed(0);
    currentTemp.innerHTML = `<strong>${temp}</strong>`;
    currentWind.innerHTML = `<strong>${windspeed} MPH</strong>`
    currentHumidity.innerHTML = `<strong>${humidity}%</strong>`


    getWindChill(temp, windspeed)
  }

async function getWeather() {
    try {
      const response = await fetch(weatherURL);
      if (response.ok) {
        const data = await response.json();
        // console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
    
  }
  function getWindChill(temperature, windspeed){
    const windchillElt = document.querySelector("#windchill")
        let windchillMsg= "N/A"
        if (windspeed >= 3.0 && temperature <= 50){
            let chillfactor = Math.pow(windspeed, 0.16);
            let windchillamt = Math.round(35.74 + (0.6125 * temperature) - (35.75 * chillfactor) + (0.4275 * temperature * chillfactor))
            windchillMsg= `${windchillamt}&deg;F`
        }
        windchillElt.innerHTML = windchillMsg
}
  getWeather();