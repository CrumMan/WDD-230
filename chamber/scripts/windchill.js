function windchill(windspeed, temperature){
    const temperature1 = document.querySelector("#temperature")
    const windspeedElt = document.querySelector("#windspeed")
    const windchillElt = document.querySelector("#windchill")
        let windchillMsg= "N/A"
        if (windspeed >= 3.0 && temperature <= 50){
            let chillfactor = Math.pow(windspeed, 0.16);
            let windchillamt = Math.round(35.74 + (0.6125 * temperature) - (35.75 * chillfactor) + (0.4275 * temperature * chillfactor))
            windchillMsg= `${windchillamt}`
        }
        
        temperature1.textContent = temperature;
        windspeedElt.textContent = windspeed;
        windchillElt.textContent = windchillMsg
}
windchill(5,45)