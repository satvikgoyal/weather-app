const inp = document.querySelector('input');
const cont = document.querySelector('div');
const result = document.querySelector('.result');
const city = document.querySelector('.city');
const dates = document.querySelector('.date');
const temp = document.querySelector('.temp');
const minmax = document.querySelector('.minmax');
const speed = document.querySelector('.speed');
const weather = document.querySelector('.weather');
const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
const dayNames = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function getWeather(search){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c3dec822c50ad79006a327af93c411d2`)
    .then((res)=>{
        const data = res.json();
        return data;
    })
    .then((data)=>{
        if(!search || data.cod == 404){
            city.textContent = "";
            dates.textContent = "";
            temp.textContent = "Invalid";
            minmax.textContent = "";
            speed.textContent = "";
            weather.textContent = "";
        } else {
            var date = new Date(data.dt*1000);
            var todayDate = date.getDate() +" "+ monthNames[date.getMonth()] + " (" + dayNames[date.getDay()] + "), " + date.getFullYear();
            city.textContent = search + ", " + data.sys.country;
            dates.textContent = todayDate;
            temp.textContent = data.main.temp + "°C";
            minmax.textContent = data.main.temp_min +"°C(min)/" + data.main.temp_max + "°C(max)";
            speed.textContent = data.wind.speed + " Kms";
            weather.textContent = data.weather[0].description;
            result.style.padding = "15px";

            switch(data.weather[0].main){
                case 'Clouds' : document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1493130952181-47e36589f64d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGNsb3Vkc3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60')";break;
                case 'Clear' : document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1604940311674-c88fb601cc05?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNsZWFyJTIwc2t5fGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60')";break;
                case 'Snow' : document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c25vd3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60')";break;
                case 'Thunderstorm' : document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1500674425229-f692875b0ab7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGh1bmRlcnN0b3JtfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60')";break;
                case 'Fog' : document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1560996025-95b43d543770?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9nfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60')";break;
                case 'Drizzle' : document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1556485689-33e55ab56127?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHJpenpsZXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60')";break;
                case 'Rain' : document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1519692933481-e162a57d6721?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60')";break;
                case 'Dust' : document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1603016518107-43a64921a606?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGR1c3R8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60')";break;
                case 'Smoke' : document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1602410086232-0cdfb78b434f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c21va2V8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60')";break;
                case 'Mist' : document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1545294477-c0a0b8033797?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWlzdHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60')";break;
                case 'Tornado' : document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1581059729226-c493d3086748?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dG9ybmFkb3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60')";break;
                case 'Haze' : document.body.style.backgroundImage = "url('https://images.unsplash.com/36/STzPBJUsSza3mzUxiplj_DSC09775.JPG?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGF6ZXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60')";break;
                default: document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1584265851308-4583e08717fa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjA3fHx3ZWF0aGVyfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60')";
            }
        }
    })
    .catch((err)=>{
        console.log(err.message);
    })  
}
$("input").keypress(function(e){
    if(e.which == 13){
    getWeather(inp.value);}
})

$("button").click(function(){
    const search = inp.value;
    getWeather(search);
})

$("input").focus(function(){
    $("input").css({"backgroundColor": "#1d3557", "color": "#a8dadc", "outline": "none"})
})

$("input").focusout(function(){
    $("input").css({"backgroundColor": "#a8dadc", "color": "#1d3557", "outline": "none"})
})
