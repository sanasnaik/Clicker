let count = 0;
let time = 10;
let timeInt;

function start() {
    document.getElementById("para").style.visibility = "hidden";
    document.getElementById("counter").innerHTML = time;
    timeInt = setInterval(updateTime, 1000)
    newCookie();
}

function updateTime() {
    time--;
    if (time < 0) {
        clearInterval(timeInt);
        end();
    }
    document.getElementById("counter").innerHTML = time;
}

function newCookie() {
    const image = document.createElement("img");
    image.src = "download.png";
    image.id = "cookie";

    let x = Math.floor(Math.random()*window.innerWidth);
    let y = Math.floor(Math.random()*window.innerHeight);

    if (x > window.innerWidth - 50) {
        x = window.innerWidth - 50;
    }
    if (y > window.innerHeight-image.height) {
        y = window.innerHeight-image.height;
    }
    
    image.style.left = x + "px";
    image.style.top = y + "px";

    document.getElementById("main").appendChild(image);
    document.getElementById("cookie").onclick = function() {changePos()};
}

function changePos() {
    count++;
    
    let x = Math.floor(Math.random()*window.innerWidth);
    let y = Math.floor(Math.random()*window.innerHeight);

    if (x > window.innerWidth-50) {
        x = window.innerWidth - 50;
    }
    if (y > window.innerHeight-document.getElementById("cookie").height) {
        y = window.innerHeight-document.getElementById("cookie").height;
    }

    document.getElementById("cookie").style.left = x + "px";
    document.getElementById("cookie").style.top = y + "px";
}

function end() {
    document.getElementById("cookie").style.visibility = "hidden";
    document.getElementById("counter").innerHTML = "Your score is: " + count;
    
    document.getElementById("startButton").innerHTML = "Play Again?";
    document.getElementById("startButton").onclick = function() {location.replace("index.html")};
    document.getElementById("startButton").style.visibility = "visible";
}