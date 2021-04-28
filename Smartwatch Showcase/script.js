var hr = document.getElementById("hr")
var min = document.getElementById("min")
var sec = document.getElementById("sec")

setInterval(function() {
    var current = new Date()
    var hrVal = current.getHours();
    var minVal = current.getMinutes();
    var secVal = current.getSeconds();
    if(hrVal < 10) {
        hrVal = '0'+String(hrVal);
    }
    if(minVal < 10) {
        minVal = '0'+String(minVal);
    }
    if(secVal < 10) {
        secVal = '0'+String(secVal);
    }
    hr.innerText = hrVal;
    min.innerText = minVal;
    sec.innerText = secVal;
},1000)

var colors = [
    "NoColor",
    "./assets/BlackClock.png",
    "./assets/RedClock.png",
    "./assets/BlueClock.png",
    "./assets/PurpleClock.png"
]

function onClickEvent() {
    var imgColor = document.getElementById("smart-image")
    imgColor.src = colors[Number(this.id[5])];
}

var btn1 = document.getElementById("color1")
var btn2 = document.getElementById("color2")
var btn3 = document.getElementById("color3")
var btn4 = document.getElementById("color4")

btn1.addEventListener("click",onClickEvent)
btn2.addEventListener("click",onClickEvent)
btn3.addEventListener("click",onClickEvent)
btn4.addEventListener("click",onClickEvent)

var timeFeature = document.getElementById("feature1");
var rateFeature = document.getElementById("feature2");

timeFeature.addEventListener("click",function() {
    var Time = document.getElementById("time")
    var heartRate = document.getElementById("heart-rate")
    Time.style.display = "flex";
    heartRate.style.display = "none";
})

rateFeature.addEventListener("click",function() {
    var Time = document.getElementById("time")
    var heartRate = document.getElementById("heart-rate")
    Time.style.display = "none";
    heartRate.style.display = "block";
})