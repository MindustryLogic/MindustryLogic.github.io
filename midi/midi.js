//so yea midi stuff
//variable length quantity converter(deci to hex)
const deciInput = document.getElementById("deciInput");
let deciInputVal = Number(deciInput.value);
deciInput.addEventListener("keydown", deciToVLQ)
let vlqOutput = document.getElementById("vlqOutput");
let vlqHex = [];
function deciToVLQ(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        deciInputVal = Number(deciInput.value);
        bin = Array.from(deciInputVal.toString(2));
        binNum = [];
        bin7sep = [];
        console.log(bin);
        for (let i = 0; i < (Math.floor(bin.length / 7)); i++) {
            for (let n = 0; n <= 6; n++){
                binNum.push(bin[bin.length-1]);
                bin.pop();
            }
            console.log(binNum)
            if(i==0){
                binNum.unshift(0);
            } else {
                binNum.unshift(1);
            }
            bin7sep.unshift(binNum.join(""));
            binNum = [];
            console.log(bin7sep)
        }
        console.log(bin.length)
        console.log(bin)
        if (deciInputVal > 127) {
            binNum.unshift(bin)
            for (let n = 0; n < 7 - bin.length; n++) {
                binNum.unshift(0);
            }
            
            binNum.unshift(1);
            bin7sep.unshift(binNum.join(""));
            console.log(bin7sep);
        }
        //back to hex
        for (let i = 0; i < bin7sep.length; i++) {
            let doubleDigitCheck = parseInt(bin7sep[i], 2).toString(16);
            if (doubleDigitCheck.length == 1) {
                doubleDigitCheck = "0" + doubleDigitCheck;
            }
            vlqHex.push(doubleDigitCheck);
        }
        console.log(vlqHex)






        vlqOutput.textContent = vlqHex.join(" ");
        document.getElementById("wee").textContent = bin[1] + " " + bin + " " + binNum
        
    }
}