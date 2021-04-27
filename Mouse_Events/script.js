var btn = document.getElementById("top-btn")

btn.addEventListener("mousedown",function() {
    console.log("MouseDown")
})

btn.addEventListener("mouseup",function() {
    console.log("MouseUp")
})

btn.addEventListener("click",function() {
    console.log("MouseClicked")
})

btn.addEventListener("dblclick",function() {
    console.log("MouseDoubleClicked")
})

var over = document.getElementById("over")
var enter = document.getElementById("enter")
var move = document.getElementById("move")
var down = document.getElementById("down")
var up = document.getElementById("up")
var click = document.getElementById("click")

var cnt=[-1,0,0,0,0,0,0];

over.addEventListener("mouseover",function() {
    console.log("Mouse Over")
    cnt[1]++;
    document.getElementById("cnt1").innerText = cnt[1];
})

enter.addEventListener("mouseenter",function() {
    console.log("Mouse Enter")
    cnt[2]++;
    document.getElementById("cnt2").innerText = cnt[2];
})

move.addEventListener("mousemove",function() {
    console.log("Mouse Move")
    cnt[3]++;
    document.getElementById("cnt3").innerText = cnt[3];
})

down.addEventListener("mousedown",function() {
    console.log("Mouse Down")
    cnt[4]++;
    document.getElementById("cnt4").innerText = cnt[4];
})

up.addEventListener("mouseup",function() {
    console.log("Mouse Move")
    cnt[5]++;
    document.getElementById("cnt5").innerText = cnt[5];
})

click.addEventListener("click",function() {
    console.log("Mouse Move")
    cnt[6]++;
    document.getElementById("cnt6").innerText = cnt[6];
})

document.getElementById("top-btn").addEventListener("click",function() {
    for(var i=1;i<=6;i++) {
        cnt[i] = 0;
        document.getElementById("cnt"+i).innerText = cnt[i];
    }
})