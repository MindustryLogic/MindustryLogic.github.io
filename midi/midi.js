//so yea midi stuff
//variable length quantity converter(deci to hex)
const deciInput = document.getElementById("deciInput");
let deciInputVal = Number(deciInput.value);
deciInput.addEventListener("keydown", deciToVLQ)
let vlqOutput = document.getElementById("vlqOutput");
let vlqHex = "";
function deciToVLQ(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        deciInputVal = Number(deciInput.value);
        bin = deciInputVal.toString(2);
        for (let i = 1; i<=bin.length; i++){
            binNum = [];
            bin7sep = [];
            if (i % 6 == 0) {
                
            }
        }
    }
}