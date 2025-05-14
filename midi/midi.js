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
        binNum = [];
        bin7sep = [];
        for (let i = 0; i < bin.length; i++) {
            binNum.push(bin[i]);
        }
        document.getElementById("wee").textContent = bin[1] + " " + bin + " " + binNum
        
    }
}