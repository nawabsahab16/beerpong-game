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

function shootX(valueY) {
    html.setAttribute("onclick", "");
    let top = valueY;
    let topInt = paresInt(valueY);
    let left = window.getComputedStyle(ball).getPropertyValue("left");
    let leftInt = paresInt(left);
    let newtop = topInt-325;
    root.style.setProperty('--top', (topInt)+" px");
    rootstyle.setProperty('--top325',  (newtop) + "px" );


    ball.classList.remove("shootX");
    ball.classList.add("Shoot");
    ball.style.top= newtop.toString(). concat("px");
    ball.style.left= left;

    if(-20<topInt && topInt < 20  && -125<leftInt && leftInt<-60){
        removeCup("1");

    }

    if(-20<topInt && topInt < 20 && -40<leftInt && leftInt< 40) {
        removeCup("2");
    }

   
                                                                    

}