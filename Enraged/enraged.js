function cc(){
    document.querySelector(".Main").style.animation="cc 10s";
    const music = new Audio('RGC.mp3');
    music.play();
}
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
function mili(){
    if (typeof x === "number"){
    let x = 0;} else{
        x+1;
    document.getElementById('tes').innerHTML= x;
}}
/*WTF*/
