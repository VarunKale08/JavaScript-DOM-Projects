// Variables for button

const startStopBtn = document.querySelector('#startStopBtn');

const resetBtn = document.querySelector('#resetBtn');

// variables for time values

let seconds = 0;
let minutes = 0;
let hours = 0;

// variab;es for leading zero

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// variables for setInterval & timerStatus

let timerInterval = null;
let timerStatus = "stopped";

// stopwatch function

function stopWatch(){

    seconds++;

    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;
    }

    if(minutes / 60 === 1){
        minutes = 0;
        hours++;
    }

    // to add the extra zero when single digits are present e.g 1, 2, 3 will become 01, 02, 03
    if(seconds < 10){
        leadingSeconds = "0" + seconds.toString();
    } else {
        leadingSeconds = seconds;
    }
    // same for minutes
    if(minutes < 10){
        leadingMinutes = "0" + minutes.toString();
    } else {
        leadingMinutes = minutes;
    }

    //same for hours
    if(seconds < 10){
        leadingHours = "0" + hours.toString();
    } else {
        leadingHours = hours;
    }    

    let displayTimer = document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}



// to see if the function stopWatch() works
//we invoke this function as the browser loads but we need more functionality and control on it via Buttons
// window.setInterval(stopWatch, 1000);

// adding functionality to the buttons

startStopBtn.addEventListener('click', function(){

    //when the timer is started from 'stopped to started'
    if(timerStatus === "stopped"){
        timerInterval = window.setInterval(stopWatch, 1000);
        // converts play button to pause button
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-pause" id= "pause"> </i> `;
        timerStatus = "started";
    } else {
        // when the timer is stopped from 'started to stopped'  
        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerHTML = `<i class = "fa-solid fa-play" id= "play"> </i>`
        timerStatus = "stopped"
    }
});


// adding functionality to reset button
//clearInterval() - stops the exceution of setInterval()
resetBtn.addEventListener('click', function(){
    window.clearInterval(timerInterval);
    // resetting the values to zero
    seconds =0;
    minutes =0;
    hours =0;

    document.getElementById('timer').innerHTML= "00:00:00";
});