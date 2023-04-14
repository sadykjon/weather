// // fetch
// let API="https://api.nasa.gov/planetary/apod?api_key=L9xDOU3eTcbwYXPt9Re37iTeUAa0dTplqqW5XvbQ"
// fetch(API)
// .then(res => res.json())
// .then(json =>{
//     console.log("json>>",json);
//     let h1=document.querySelector("h1")
//     let p=document.querySelector("p")
// let img=document.querySelector("img")
// let h2=document.querySelector("h2")
// h1.innerHTML=json.date
// p.innerHTML=json.explanation
// img.src=json.url
// h2.innerHTML=json.title
// })
// let city_name="london"
// let weather=`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=metric&appid=6621546e1a94625a215c063e4320d66d`
// fetch(weather)
// .then(res => res.json())
// .then(json =>{
//     console.log("weather>>",json)
//     let inp=document.querySelector(".input")
//     let btn=document.querySelector("button")
//     let name=document.querySelector(".name")
//     let temp=document.querySelector(".temp")
//     let sky=document.querySelector(".sky")
//     let speed=document.querySelector(".speed")
//     let img=document.querySelector("img")
//     btn.onclick=()=>{
//     inp.value=city_name
//     name.innerHTML=city_name
// temp.innerHTML=json.main.temp
// sky.innerHTML="Cloud"
// speed.innerHTML=json.wind.speed
// img.srs=json.weather.icon
//     }

//     })

let btn = document.querySelector("button");
        btn.onclick = () => {
            let inp = document.querySelector(".input");
            let city_name = inp.value;
            let weather = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=metric&appid=6621546e1a94625a215c063e4320d66d`;
            fetch(weather)
            .then(res => res.json())
            .then(json => {
                console.log("weather>>",json);
                let name = document.querySelector(".name");
                let temp = document.querySelector(".temp");
                let sky = document.querySelector(".sky");
                let speed = document.querySelector(".speed");
                let img = document.querySelector("img");
                name.innerHTML = city_name;
                temp.innerHTML = json.main.temp;
                sky.innerHTML = json.weather[0].description;
                speed.innerHTML = json.wind.speed;
                img.src = `http://openweathermap.org/img/w/${json.weather[0].icon}.png`;
            });
        };
    