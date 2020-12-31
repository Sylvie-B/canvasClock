let frameSec = document.getElementById('frameSec');
frameSec.style.border = '28px solid blue';
frameSec.style.borderRadius = '50%';
frameSec.style.width = '300px';
frameSec.style.height = '300px';
frameSec.style.margin = '15px';

let frameMin = document.getElementById('frameMin');
frameMin.style.border = '28px solid teal';
frameMin.style.borderRadius = '50%';
frameMin.style.width = '240px';
frameMin.style.height = '240px';
frameMin.style.margin = '45px';

let frameHour = document.getElementById('frameHour');
frameHour.style.border = '28px solid cyan'
frameHour.style.borderRadius = '50%';
frameHour.style.width = '180px';
frameHour.style.height = '180px';
frameHour.style.margin = '75px';

let rectSec = frameSec.getContext('2d');
rectSec.fillStyle = 'blue';
rectSec.fillRect(148, 0, 4, 30);

let rectMin = frameMin.getContext('2d');
rectMin.fillStyle = 'teal';
rectMin.fillRect(145, 0, 10, 30);

let rectHour = frameHour.getContext('2d');
rectHour.fillStyle = 'cyan';
rectHour.fillRect(142, 0, 16, 45);

setInterval(function (){
    let time = new Date();
    console.log(time);

    frameSec.style.transformOrigin = 'center center';
    frameSec.style.transform = 'rotate(' + time.getSeconds() * 6 + 'deg)';

    frameMin.style.transformOrigin = 'center center';
    frameMin.style.transform = 'rotate(' + time.getMinutes() * 6 + 'deg)';

    frameHour.style.transformOrigin = 'center center';
    frameHour.style.transform = 'rotate(' + time.getHours() * 30 + 'deg)';

}, 1000);
