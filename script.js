
let timeSpent = 0; // Time spent in seconds
const timeElement = document.getElementById("time");


function updateTimeDisplay() {
    const minutes = Math.floor(timeSpent / 60);
    const seconds = timeSpent % 60;
    timeElement.textContent = `You've spent here: ${minutes} minute(s) and ${seconds} second(s)`;
}


setInterval(() => {
    timeSpent++;
    updateTimeDisplay();
}, 1000);


updateTimeDisplay();




var elem = document.documentElement;
const iframe = document.querySelector("iframe");

function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { 
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { 
    elem.msRequestFullscreen();
  }


if (iframe) {

    iframe.style.height = "975px";
}
}


function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { 
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { 
    document.msExitFullscreen();
  }

    if (iframe) {
        iframe.style.height = "815px";
    }
}

vcuvdlktkjhhjjwnkxsgtxrdpoebxwhlso