function start() {
    document.getElementById("text").style.display = "none";
    newCookie();
}

function newCookie() {
    const image = document.createElement("img");
    image.src = "download.png";
    image.id = "cookie";

    const x = Math.floor(Math.random()*window.innerWidth) - 50;
    const y = Math.floor(Math.random()*window.innerHeight) - image.height;

    image.style.left = x+"px"; 
    image.style.top = y+"px";

    document.getElementById("main").appendChild(image);
}