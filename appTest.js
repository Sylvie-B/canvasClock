let frameSec = document.getElementById('frameSec');
let frameMin = document.getElementById('frameMin');
let frameHour = document.getElementById('frameHour');

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
