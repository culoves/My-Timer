
let startCount = document.getElementById('start');
let stopCount = document.getElementById('stop');
let resetCount = document.getElementById('reset');
let seconds = 00;
let tens = 00;
let tensCount = document.getElementById('tens');
let secondsCount = document.getElementById('seconds');
let Interval;


function increaseCount() {
    seconds++;
    if (seconds <= 9){
        secondsCount.innerHTML = seconds;
        secondsCount.innerHTML.padStart(2, '0');
    }
    if(seconds > 9){
        secondsCount.innerHTML = seconds;
    }
    if (seconds > 99){
        tens++;
        tensCount.innerHTML = tens;
        // tensCount.innerHTML.padStart(2, '0');
        seconds = 0;
        console.log("secondsCount => ", secondsCount);
        secondsCount.innerHTML = 0;
        secondsCount.innerHTML.padStart(2, '0');
    }
    if (tens < 9){
        tensCount.innerHTML = tens;
    }
};

startCount.onclick = function(){
    clearInterval(Interval);
    Interval = setInterval(increaseCount, 10)
}

stopCount.onclick = function(){
    clearInterval(Interval);
}

resetCount.onclick = function (){
    clearInterval(Interval);
    tens = '00';
    seconds= '00';
    tensCount.innerHTML = tens;
    secondsCount.innerHTML = seconds;
}


