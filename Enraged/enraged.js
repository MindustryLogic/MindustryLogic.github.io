function ranmove(){
    var just_random_it = Math.random();
    document.querySelectorAll('.animated-element').forEach(el => {
        el.style.setProperty('--random-x', just_random_it);
        el.style.setProperty('--random-y', just_random_it);
    });
    console.log(just_random_it,"AHHHHHHHHHHHHHHHHHH");
    console.log(--random-x)}
function Test_random(){
    var blink = document.querySelector("p");
    blink.style.setProperty('--timeRan', test_random_handle + "s")
    console.log(test_random_handle,"here");
}
function cc(){
    document.querySelector(".Main").style.animation="cc 10s";
    const music = new Audio('RGC.mp3');
    music.play();
}
var enable = false
function startTime() {
    if (enable === true){
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
    }
    else{
        return(null)
    }
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
function logging(){
    if (enable === true){
    loop_count = 0
    while(loop_count < 100){
        setTimeout(function(){
            console.log("this is running")
            loop_count += 1
        },1000);/* i have to see is the thing even running
        ok why is the log not even appearing*/
    }}
    else{
        return(null)
    }
}
var test_random_handle = 10*(0.5-Math.random())
var test_random_handle_round = Math.round(test_random_handle)
function ran(){
    console.log(test_random_handle)
    setTimeout(function(){
        document.querySelector(".tes").innerHTML = test_random_handle
    }, 2000);
    console.log("hi")
}/* i have a feeling tht this will be extremely fucking nested*/