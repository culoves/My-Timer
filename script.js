let startCount = document.getElementById("start");
let stopCount = document.getElementById("stop");
let resetCount = document.getElementById("reset");
let seconds = 00;
let tens = 00;
let tensCount = document.getElementById("tens");
let secondsCount = document.getElementById("seconds");
let Interval;

function increaseCount() {
  seconds++;
  if (seconds <= 9) {
    secondsCount.innerHTML = "0" + seconds;
  }

  if (seconds > 9) {
    secondsCount.innerHTML = seconds;
  }

  if (seconds > 99) {
    tens++;
    tensCount.innerHTML = "0" + tens;

    seconds = 0;
    secondsCount.innerHTML = "0" + 0;
  }

  if (tens > 9) {
    tensCount.innerHTML = tens;
  }
}

startCount.onclick = function () {
  clearInterval(Interval);
  Interval = setInterval(increaseCount, 10);
};

stopCount.onclick = function () {
  clearInterval(Interval);
};

resetCount.onclick = function () {
  clearInterval(Interval);
  tens = "00";
  seconds = "00";
  tensCount.innerHTML = tens;
  secondsCount.innerHTML = seconds;
};
