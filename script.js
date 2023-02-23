var html = document.getElementById("html");
var reshoot = document.getElementById("reshoot");
var ball = document.getElementById("ball");
var root = document.documentElement;
var cupsOut = [];


function shootY() {
    let top = window.getComputedStyle(ball).getPropertyValue("top");
    ball.classList.remove("shootY");
    ball.classList.add("shootX");
    ball.style.top= top;
    let onclick = "shootX(' ".concat(top.toString()," ')");
    html.setAttribute("onclick", onclick);  
}