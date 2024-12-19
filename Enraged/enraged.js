//really should nuke it
//nuked time to rebuild
let n = 0;
const loop_count = setInterval(() => {
    n++;
},1000);
//well that works
//time to rewrite loop iteration count thing
//const loop_set_func = setInterval(temp_sep,50,random_test,1000,10);
const the_2nd = setInterval(startTitleShake,50);
setTimeout(() => {
    clearInterval(the_2nd);
}, 10000);
//this works idk how
let fadeIn = 0
function startTitleShake(){
    var vert = Math.round((40*Math.random())-20);
    fadeIn += 1;
    document.querySelectorAll('.start').forEach(el => {
        el.style.setProperty('--vert-shake',vert);
        el.style.setProperty('--opac',fadeIn);
    })
}
function random_test(){
    var num = Math.random()
    console.log(num)
    document.querySelectorAll('.random_test').forEach(el => {
        el.style.setProperty('--ran-num', num);
        el.style.setProperty('--loop-count',n);
    })
}
let count = 0;
let count_real = 0;
const timer = setInterval(() => {
    count++;
    count_real = count * 50;
}, 50);

// Optional: Stop timer after certain duration
/*setTimeout(() => {
    clearInterval(timer);
}, 5000); // Stops after 5 seconds */
