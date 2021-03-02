window.addEventListener('load', () => {
    let long;
    let lat;

    let temperatureDescription = document.querySelector(
        '.temperature-description'
    );
    let temperatureDegree = document.querySelector(
        '.temperature-degree'
    );
    let locationTimezone = document.querySelector(
        '.location-timezone'
    );
    let weatherIcon = document.querySelector(
        '.wheaterIcon'
    );
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;
            
            const api = `http://api.weatherapi.com/v1/forecast.json?key=b027b99f0f1d4d1584a195124210103&q=${lat}, ${long}&days=1&aqi=no&alerts=no`

            fetch(api)
            .then(data =>{
                return data.json();
            })
            .then(data =>{
                console.log(data);
                const { text, icon } = data.current.condition;
                const { feelslike_c } = data.current;
                const { country } = data.location;
                temperatureDescription.textContent = text;
                temperatureDegree.textContent = feelslike_c;
                locationTimezone.textContent = country;
                // locationTimezone = 
                weatherIcon.textCotent = icon;
                


            });

        });
        
    }
    // else{
    //     h1.textContent = "hey this is not working"
    // }
});