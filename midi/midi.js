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
//testing midi note thing and download file and stuff, proof of concept
const testMidiConfig = [0x4D, 0x54, 0x68, 0x64, 0x00, 0x00, 0x00, 0x06, 0x00, 0x01, 0x00, 0x01]//First 4 byte header,fixed 00000006,mode (0=single track,1=multi track,2=multi song),num of tracks(is 1)
const testMidiTrack = [0x4D, 0x54, 0x72, 0x68]//Track header
const pageHexClientView = document.getElementById("testHexOut");
const testMidiTrackConfig = [0x00,0xFF,0x51,0x03,0x07,0xA1,0x20,0x00,0xFF,0x58,0x04,0x04,0x02,0x18,0x08]//tempo 120,time signature 4/4,and the midi clock that probably don't matter
const testTB = document.getElementById("TimeBase");
const testKey = document.getElementById("key");
const testVe = document.getElementById("velocity");
const testDur = document.getElementById("duration");
const testNoteBuild = document.querySelectorAll("#TimeBase, #key, #velocity, #duration");
testNoteBuild.forEach(testField => {
    testField.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            console.log(testNoteBuild.length)
            if (testNoteBuild.length == 4) {
                testMidi();
            } else {
                console.log("lol fill the blanks in")
            }
        }
    })
})
function testMidi() {
    let testWholeShebang = []
    testWholeShebang.splice(1, 0, testMidiConfig.join(" "));
    console.log(testWholeShebang);
    let testTBf = testTB.value;
    testWholeShebang.push(testTBf);
    console.log(testTBf)
    console.log(testWholeShebang.length + "o");
    console.log(testWholeShebang);
    pageHexClientView.textContent = testWholeShebang
}
document.getElementById("testdownload").addEventListener('click',function testDownload() {
    let testData = "Bla bla bla";
    let testBlob = new Blob([testData], { type: "text/plain" });
    let testUrl = document.createElement("a");
    testUrl.href = URL.createObjectURL(testBlob);
    testUrl.download = "test.txt";
    testUrl.click();
    URL.revokeObjectURL(testUrl.href)
})
