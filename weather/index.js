let inputvalue = document.querySelector('#cityinput')
let btn =document.querySelector('#add')
let city =document.querySelector('#cityoutput')
let descrip= document.querySelector('#description')
let temp = document.querySelector('#temp')
let wind = document.querySelector('#wind')

apik="1b8b3205e8e3178ecf6de839d15368ff"

function convertion(val) 
{
    return (val - 273).toFixed(3)
}

btn.addEventListener('click',function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ inputvalue.value + '&appid='+apik)
    .then(res =>res.json())

    .then(data=>{
        let nameval = data['name']
        let descrip = data['weather']['0']['description']
        let temperature =data['main']['temp']
        let wndspeed = data['wind']['speed']

        city.innerHTML =`<span>${nameval}<span>`
        temp.innerHTML =`<i class="fas fa-thermometer-full"></i> <span>${convertion(temperature)}°C</span>`
        description.innerHTML =`<i class="fas fa-cloud"></i> <span>${descrip}<span>`
        wind.innerHTML = `<i class="fas fa-wind"></i> <span>${wndspeed}km/h<span>`
    })

    .catch(err => alert('You entered Wrong City Name')) 
}
)
