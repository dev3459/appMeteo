let title = document.getElementById('title');

let villeInput = document.getElementById('ville');

let btnVille = document.getElementById('btnVille');

btnVille.addEventListener('click', () => {
    let temp = document.getElementById('temp');
    let tempMax = document.getElementById('tempMax');
    let tempMin = document.getElementById('tempMin');
    let wind = document.getElementById('wind');
    let rotateWind = document.getElementById('rotateWind');
    let humidity = document.getElementById('humidity');
    let weatherDescription = document.getElementById('weatherDescription');

    const requestURL = `https://api.openweathermap.org/data/2.5/weather?q=${villeInput.value}&units=metric&lang=fr&appid=f9aa544314c3b7d493bef3ee4cf6d34e`;

    let xhr = new XMLHttpRequest();
    xhr.open("GET", requestURL);
    xhr.responseType = "json";

    xhr.onload = function(){
        if(xhr.status === 404){
            alert("La page n'a pas été trouvé !");
            return;
        }else if(xhr.status === 401){
            alert("Erreur d'authentification pour se connecter à l'api");
            return;
        }else if(xhr.status === 500){
            alert("Erreur interne sur le serveur de l'api");
            return;
        }

        let response = xhr.response;

        title.innerHTML = `Voici la météo de la ville de ${response.name}`;

        temp.innerHTML = `Il fait actuellement : ${Math.round(response.main.temp)}°`;
        tempMax.innerHTML = `La température maximale est de : ${Math.round(response.main.temp_max)} °`;
        tempMin.innerHTML = `La température minimale est de : ${Math.round(response.main.temp_min)} °`;
        wind.innerHTML = `Le vent est à une vitesse de : ${response.wind.speed} km/h`;
        rotateWind.innerHTML = `Degrès du vent : ${response.wind.deg} deg`;
        humidity.innerHTML = `L'humidité est de : ${response.main.humidity} %`;
        weatherDescription.innerHTML = `Le ciel est : ${response.weather[0].description}`
    }

    xhr.send();
});