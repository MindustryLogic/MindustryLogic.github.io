function getResolution(){
    const windowW = window.innerWidth;
    const windowH = window.innerHeight;
    const screenW = window.screen.width;
    const screenH = window.screen.height;
    document.getElementById("Resolution").innerHTML = windowH + "px in height, " + windowW + "px in width" + " of window space";
    document.getElementById("outer_res").innerHTML = screenH + "px in height, " + screenW + "px in width" + " of screen space." + "This does not account for orientation";
}