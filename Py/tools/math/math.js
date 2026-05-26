//renewed math operation it now (fake) ai powered math solver, the unit conversion thing now at temp_stor.js (TODO)
//also everything is still contained in 1 browser section lol

//eq input purging and eval
const proc = new Event("beginProc");
const input = document.getElementById("eqInput");
input.addEventListener('keydown', function (run) {
    let stuff = input.value
    if (run.key === 'Enter') {
        if (stuff.length != 0) {
            if (stuff.match(/\b[a-zA-Z]+\b/g)) {
                alert("Sentence comprehension not implemented yet, reload the page")
                input.value = ""
            } else {
                setTimeout(() => { window.dispatchEvent(proc) },50)
                console.warn("Proc begin, all logs under this event is to be assumed from the processing")
            }
        } else {
            console.log("I ani't hearing no bell")
            alert("Where is your equation at I need it to help you")
        }
    }//I am fairly certain event are not suppose to be called like this
}
)
const Proc = function () {
    let stuff = input.value
    console.log("hi")
    console.log(eval(stuff))//screw you sorcery i filtered every letter
    //TODO add the Proc im bored now
}
window.addEventListener("beginProc", Proc)































//Testing stuff all the way down here
//lalelulolu

