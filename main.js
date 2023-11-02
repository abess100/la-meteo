 // variable  pour recupérer la clé api

 let  APikey = "d1e7cd3e343c4f00b99d3d35efceac5b"

 let research =  document.getElementById('research');
 let button = document.getElementById('button');
//variable pour recupérer l'URL de l'API


//recupéré les élément dans le DOM

// evenement au click

button.addEventListener('click', appelApi)



// 
function appelApi(e){
    let pays = research.value;
    const  url = `https://api.openweathermap.org/data/2.5/weather?q=${pays}&appid=${APikey}&units=metric&lang=fr `
    
    fetch(url).then((reponse) => reponse.json().then((data) => {
        console.log(data)
        let name = document.querySelector('#nom').innerHTML = data.name;
        let temperature  = document.querySelector('#temperature').innerHTML =  ` <p>Température</> <br> ${data.main.temp + '°'}`;
        let tempmax = document.querySelector('#temperature-max').innerHTML = `<p>Temp-max</p> ${data.main.temp_max + '°'}` ; 
        let humidity  = document.querySelector('#humide').innerHTML = `<p>humidité</p> ${ data.main.humidity + '%'}`;
        let wind = document.querySelector('#solo').innerHTML = `<p>speed</p> ${data.wind.speed + 'km/h'}`;
        let icon = document.querySelector('.ico').innerHTML =` <p>description</p> ${data.weather[0].description}`;
    })) 
    
    
    e.preventDefault;
}

  