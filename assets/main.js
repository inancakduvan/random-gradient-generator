function generate() {
    var firstColor = "rgb(" + Math.floor(Math.random()*255) + ", " + Math.floor(Math.random()*255) + ", " + Math.floor(Math.random()*255) + ")"
    var secondColor = "rgb(" + Math.floor(Math.random()*255) + ", " + Math.floor(Math.random()*255) + ", " + Math.floor(Math.random()*255) + ")"
    document.getElementById("box").style.background = "linear-gradient(to right, " + firstColor + ", " + secondColor + " )"
    document.getElementById("code").innerHTML = "linear-gradient(to right, " + firstColor + ", " + secondColor + ")"
} 