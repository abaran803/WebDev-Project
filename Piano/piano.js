var button = document.getElementsByClassName("piano-button");
var body = document.getElementsByTagName("body")[0];
body.addEventListener("keydown", function(e) {
    if(e.keyCode === 65) {
        document.getElementById("clap").play();
        button[0].style.borderColor = "yellow";
        button[0].style.boxShadow = "0px 0px 5px 0 yellow";
    } else if(e.keyCode === 83) {
        document.getElementById("hihat").play();
        button[1].style.borderColor = "yellow";
        button[1].style.boxShadow = "0px 0px 5px 0 yellow";
    } else if(e.keyCode === 68) {
        document.getElementById("kick").play();
        button[2].style.borderColor = "yellow";
        button[2].style.boxShadow = "0px 0px 5px 0 yellow";
    } else if(e.keyCode === 70) {
        document.getElementById("openhat").play();
        button[3].style.borderColor = "yellow";
        button[3].style.boxShadow = "0px 0px 5px 0 yellow";
    } else if(e.keyCode === 71) {
        document.getElementById("boom").play();
        button[4].style.borderColor = "yellow";
        button[4].style.boxShadow = "0px 0px 5px 0 yellow";
    } else if(e.keyCode === 72) {
        document.getElementById("ride").play();
        button[5].style.borderColor = "yellow";
        button[5].style.boxShadow = "0px 0px 5px 0 yellow";
    } else if(e.keyCode === 74) {
        document.getElementById("snare").play();
        button[6].style.borderColor = "yellow";
        button[6].style.boxShadow = "0px 0px 5px 0 yellow";
    } else if(e.keyCode === 75) {
        document.getElementById("tom").play();
        button[7].style.borderColor = "yellow";
        button[7].style.boxShadow = "0px 0px 5px 0 yellow";
    } else if(e.keyCode === 76) {
        document.getElementById("tink").play();
        button[8].style.borderColor = "yellow";
        button[8].style.boxShadow = "0px 0px 5px 0 yellow";
    }
})

body.addEventListener("keyup", function() {
    for(var i=0;i<button.length;i++) {
        if(button[i].style.borderColor === "yellow") {
            button[i].style.borderColor = "rgb(58, 33, 33)";
            button[i].style.boxShadow = "";
        }
    }
})