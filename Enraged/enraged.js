//really should nuke it
//nuked time to rebuild
function random_test(){
    var num = Math.random()
    console.log(num)
    document.querySelectorAll('.random_test').forEach(el => {
        el.style.setProperty('--ran-num', num);
    })
}
function loop_set_func(a,b,c){
    var n = 0
    if (n < c) {
    setInterval(a,b);
    n += 1
    console.log(n,"aaaaa")
    } else {
        return(null)
    }
}