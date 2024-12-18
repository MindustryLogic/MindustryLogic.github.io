//really should nuke it
//nuked time to rebuild
let n = 0
function loop_num(){
    n+=1
}
function random_test(){
    var num = Math.random()
    console.log(num)
    document.querySelectorAll('.random_test').forEach(el => {
        el.style.setProperty('--ran-num', num);
        el.style.setProperty('--loop-count',n);
    })
}
function loop_set_func(a,b,c){
    if (n < c) {
    setInterval(a,b)
    n += 1
    console.log(n,"aaaaa")
    document.getElementsByClassName('random_test').innerHTML = "hello world" , n
    } else {
        return(null)
    }
}
let count = 0;
const timer = setInterval(() => {
    count++;
    console.log(count * 50 + 'ms');
}, 50);

// Optional: Stop timer after certain duration
setTimeout(() => {
    clearInterval(timer);
}, 5000); // Stops after 5 seconds
