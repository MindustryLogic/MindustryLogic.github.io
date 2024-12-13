function ranmove(){
    document.querySelectorAll('.animated-element').forEach(el => {
        el.style.setProperty('--random-x', Math.random());
        el.style.setProperty('--random-y', Math.random());
    });
    console.log(Math.random())}
const label = document.querySelector("p");
label.style.animationDuration = Math.random() + "s";
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
function ran(){
    console.log(Math.random())
    setTimeout(function(){
        document.getElementById("tes").innerHTML = Math.round(10*(0.5-Math.random()))
    }, 2000);
}/* i have a feeling tht this will be extremely fucking nested*/
