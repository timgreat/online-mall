//用于闪购倒计时
var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");
var inputTime = new Date("2021-1-19 00:00:00");
countDown();//调用一次防止空白
setInterval(countDown, 1000);
function countDown() {
var nowTime = new Date();
var times = (inputTime - nowTime) / 1000;
var h = parseInt((times / 60 / 60) % 24);
h = h < 10 ? "0" + h : h;
hour.innerHTML = h;
// console.log(h);
var m = parseInt((times / 60) % 60);
m = m < 10 ? "0" + m : m;
minute.innerHTML = m;
// console.log(m);
var s = parseInt(times % 60);
s = s < 10 ? "0" + s : s;
second.innerHTML = s;
// console.log(s);
}