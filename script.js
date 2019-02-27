
function setCountdown(){
var today = new Date().getTime();
var birthday = new Date(2019, 6, 29, 12, 0, 0).getTime();
var milli = Math.round(birthday - today);
var converttosecond = Math.round(milli / 1000);
var converttominute = Math.round(converttosecond / 60);
var converttohour = Math.round(converttominute / 60);
var converttoday = Math.round(converttohour / 24);
var converttoweek = Math.round(converttoday / 7);

// if (converttosecond == 0){
	// clearInterval(timer);
// }
// else{
document.getElementById("event").innerHTML= "Week:" + converttoweek +" | "+ " Day:" +converttoday+ " | "+" Hour:" + converttohour+ " | "+ " Minute:" + converttominute+ " | "+" Second:"+ converttosecond
}
// }


var timer = setInterval(setCountdown,1000);

function changeColor(){
	var event = document.getElementById('event')
	event.style.backgroundColor = "#795f7f";
}
changeColor()

function reverseColor(){
	var event = document.getElementById('event')
	event.style.backgroundColor = "#a79575";
}
reverseColor()
