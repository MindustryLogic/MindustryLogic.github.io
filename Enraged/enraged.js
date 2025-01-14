//reformat
let begin = false;
let sleep_done = false;
function beginTheChaos(){
    begin = true;
    beginChaos();
}
function startTitleShake(){
    var vert = Math.round((40*Math.random())-20);
    document.querySelectorAll('.start').forEach(el => {
        el.style.setProperty('--vert-shake',vert);
    })
}
function blank(){
    sleep_done = true;
    console.log(sleep_done);
}
function beginChaos(){
    if (begin == true){
        setTimeout(blank,3000);
        if (sleep_done == true){
        console.log("hi");
        var bgMusic = new Audio('RGC.mp3');
        var music = document.querySelector("audio");
        music.addEventListener('play',console.log("it plays"));
        let theButton = document.querySelector(".the-button");
        theButton.style.setProperty("display",'none');
        bgMusic.play();
        const theShake = setInterval(startTitleShake,50);
        setTimeout(()=>{
            clearInterval(theShake);
        },10000);
        document.querySelectorAll(":root").forEach(el => {
            el.style.setProperty('--main-anim-ctrl', "running");
        });
    } else {
        setTimeout(beginChaos,3000);
    }}
}
