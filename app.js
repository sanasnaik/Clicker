let count = 0;

function start() {
    document.getElementById("text").style.display = "none";
    setTimeout(end, 3000);
    newCookie();
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
    location.assign("endgame.html");
    document.getElementById("showScore").innerHTML = "Your score is: " + count;
}