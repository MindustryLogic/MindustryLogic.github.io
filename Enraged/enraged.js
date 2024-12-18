//really should nuke it
//nuked time to rebuild
function random_test(){
    var num = Math.random()
    console.log(num)
    document.querySelectorAll('.random_test').forEach(el => {
        el.style.setProperty('--ran-num', num);
    })
}
let n = 0
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