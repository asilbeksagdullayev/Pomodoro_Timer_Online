const pomo25 = document.querySelector("#timer")
const pomo15 = document.querySelector("#alarm")
const pomo5 = document.querySelector("#break")
const center1 = document.querySelector(".Pomodoro")
const center2 = document.querySelector(".Short_Break")
const center3 = document.querySelector(".Long_Break")

center2.onclick = function click() {
 pomo5.style.display = "block";
 pomo25.style.display = "none";

};
center3.onclick = function click() {
 pomo5.style.display = "none";
 pomo25.style.display = "none";
 pomo15.style.display = "block";

};
center1.onclick = function click() {
 pomo5.style.display = "none";
 pomo25.style.display = "block";
 pomo15.style.display = "none";

};








function startTimer(duration, display) {
 var timer = duration;
 var minutes, seconds;

 var countdown = setInterval(function () {
   minutes = parseInt(timer / 60, 10);
   seconds = parseInt(timer % 60, 10);

   minutes = minutes < 10 ? "0" + minutes : minutes;
   seconds = seconds < 10 ? "0" + seconds : seconds;

   display.textContent = minutes + ":" + seconds;

   if (--timer < 0) {
     clearInterval(countdown);
     // Timer has finished, you can perform any desired actions here
     alert("Timer has ended!");
   }
 }, 1000);
}

var durationInMinutes = 25;
var display = document.querySelector("#timer");
var alarmInMinutes = 5;
var disp = document.querySelector("#alarm");
var breakInMinutes = 15;
var dis = document.querySelector("#break");

startTimer(durationInMinutes * 60, display);
startTimer(alarmInMinutes * 60, disp);
startTimer(breakInMinutes * 60, dis);