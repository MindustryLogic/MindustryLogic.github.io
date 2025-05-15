//so yea midi stuff
//variable length quantity converter(deci to hex)
const deciInput = document.getElementById("deciInput");
let deciInputVal = Number(deciInput.value);
deciInput.addEventListener("keydown", deciToVLQ)
let vlqOutput = document.getElementById("vlqOutput");
let vlqHex = [""];
function deciToVLQ(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        deciInputVal = Number(deciInput.value);
        bin = Array.from(deciInputVal.toString(2));
        binNum = [];
        vlqHex = [];
        bin7sep = [];
        justHex = "";
        let itr = Math.floor((bin.length - 1) / 7);
        for (let i = 0; i < itr; i++) {
            for (let n = 0; n <= 6; n++){
                binNum.push(bin[bin.length-1]);
                bin.pop();
            };
            binNum.reverse();
            if(i==0){
                binNum.unshift(0);
            } else {
                binNum.unshift(1);
            }
            bin7sep.unshift(binNum.join(""));
            binNum = [];
        }
        if (deciInputVal > 127) {
            binNum.push(bin.join(""))
            for (let n = 0; n < 7 - bin.length; n++) {
                binNum.unshift(0);
            }
            
            binNum.unshift(1);
            bin7sep.unshift(binNum.join(""));
        } else {
            if (deciInputVal.toString(16).length == 1) {
                vlqHex.push("0" + deciInputVal, toString(16));
            } else {
                vlqHex.push(deciInputVal.toString(16));
            }
        }
        //back to hex
        for (let i = 0; i < bin7sep.length; i++) {
            let doubleDigitCheck = parseInt(bin7sep[i], 2).toString(16);
            if (doubleDigitCheck.length == 1) {
                doubleDigitCheck = "0" + doubleDigitCheck;
            }
            vlqHex.push(doubleDigitCheck);
        }
        justHex = hexSolve(deciInputVal);





        vlqOutput.textContent = vlqHex.join(" ") + "  hexadecimal: " + justHex;
        
    }
}
function hexSolve(num) {
    let hex = num.toString(16);
    if (hex.length % 2 != 0) {
        hex = "0" + hex;
    }
    return hex;
    }