function start() {
    document.getElementById("home").style.display = "none";
    newCookie();
}

function newCookie() {
    let image = document.createElement("img");
    image.src = "download.png";
    document.getElementById("main").appendChild(image); 
}

function cookieClicked() {

}