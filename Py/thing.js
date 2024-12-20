function getResolution(){
    const screenW = window.screen.width;
    const screenH = window.screen.height;
    document.getElementById("Resolution").innerHTML = screenH + "px in height, " + screenW + "px in width";
}