//renewed math operation it now (fake) ai powered math solver, the unit conversion thing now at temp_stor.js (TODO)
//also everything is still contained in 1 browser section lol

//eq input purging and eval
new Event('beginProc');
const input = document.getElementById(leqInput);
input.addEventListener('keydown', function (run) {
    run.preventDefault();
    let stuff = input.value
    if (run.key === 'Enter') {
        if (stuff.length != 0) {
            if (stuff.match(/\b[a-zA-Z]+\b/g)) {
                document.appendChild("Sentence comprehension not implemented yet, reload the page")
                input.value = ""
            } else {
                window.dispatchEvent(beginProc);
                console.warning("Proc begin, all logs under this event is to be assumed from the processing")
            }
        } else {
            console.log("I ani't hearing no bell")
            alert("Where is your equation at I need it to help you")
        }
    }//I am fairly certain event are not suppose to be called like this
}
)
