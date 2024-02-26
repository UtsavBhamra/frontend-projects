let hrs= document.querySelector('#hours');
let min=document.querySelector('#minutes');
let sec=document.querySelector('#seconds');

let currentTime= new Date();

console.log(currentTime);

setInterval(() => {
    let currentTime= new Date();

hrs.innerHTML = currentTime.getHours();
min.innerHTML = currentTime.getMinutes();
sec.innerHTML = currentTime.getSeconds();
},1000);