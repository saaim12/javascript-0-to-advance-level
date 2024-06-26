let start_btn = document.getElementById("start");
let stop_btn = document.getElementById("stop");
let reset_btn = document.getElementById("reset");
let clock = document.getElementById("time");

let interval;
let seconds = 0;
let minutes = 0;
let hours = 0;



function updateClock(){
    seconds++;
    if(seconds >= 60){
        seconds=0;
        minutes++;
        if (minutes>=60) {
            minutes=0;
            hours++;
            
        }
    }
    clock.innerHTML = 
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" +
    (seconds > 9 ? seconds : "0" + seconds);
}

start_btn.addEventListener("click", () => {
    if (!interval) {
        interval = setInterval(updateClock, 1000);
    }
});

stop_btn.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
});

reset_btn.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
    seconds = 0;
    minutes = 0;
    hours = 0;
    clock.innerHTML = "00:00:00";
});
