//so yea midi stuff
//variable length quantity converter(deci to hex)
const deciInput = document.getElementById("deciInput");
let deciInputVal = Number(deciInput.value);
deciInput.addEventListener("keydown", deciToVLQ)
let vlqOutput = document.getElementById("vlqOutput");
let vlqHex = [""];
function deciToVLQ(num = deciInputVal) {
    let deciInputVal = num;
    if (typeof(num) != "number") {
        deciInputVal = Number(deciInput.value);
    } else {
        deciInputVal = Number(num);
    }
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
            vlqHex.push("0x" + String(doubleDigitCheck));
        }
    justHex = String(hexSolve(deciInputVal));
    if (typeof (num) != "number") {
        vlqOutput.textContent = vlqHex.join(" ") + "  hexadecimal: " + justHex;
    } else {
        if (num < 128) {
            return ("0x" + justHex);
        } else {
            return vlqHex.join(" ");
        }
    }
}
function hexSolve(num) {
    let hex = num.toString(16);
    if (hex.length % 2 != 0) {
        hex = "0" + hex;
    }
    return hex;
}
function parseHex(deci) {
    //this functions returns a proper hex number in 0x00 format (from deci)
    let hex = deci.toString(16);
    if (hex.length % 2 != 0) {
        hex = "0" + hex;
    }
    hex = hex.match(/.{1,2}/g);
    let returnHex = [];
    for (let i = 0; i < hex.length; i++){
        let insert0 = 0;
        if (hex[i].length == 1) {
            insert0 = "0" + String(hex[i]);
        }
        returnHex.push("0x" + hex[i]);
    }
    return (returnHex);
}
//testing midi note thing and download file and stuff, proof of concept
const testMidiConfig = ["0x4D","0x54","0x68","0x64","0x00","0x00","0x00","0x06","0x00","0x01","0x00","0x01"]//First 4 byte header,fixed 00000006,mode (0=single track,1=multi track,2=multi song),num of tracks(is 1)
const testMidiTrack = ["0x4D","0x54","0x72","0x6B"]//Track header
const pageHexClientView = document.getElementById("testHexOut");
const testMidiTrackConfig = ["0x00","0xFF","0x51","0x03","0x07","0xA1","0x20","0x00","0xFF","0x58","0x04","0x04","0x02","0x18","0x08"]//tempo 120","time signature 4/4","and the midi clock that probably don't matter
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
let testMidiOut = [];
let testData = [];
let TrackRam = [];
function testMidi() {
    let testWholeShebang = []
    let testHexSep = [];
    let testTrack = [];
    testWholeShebang.push(testMidiConfig.join(" "));
    let testTBf = Number(testTB.value);
    testHexSep = parseHex(testTBf);
    testWholeShebang.push(testHexSep.join(" "));
    testWholeShebang.join(" ");
    testWholeShebang.push(testMidiTrack.join(" "));
    testWholeShebang.join(' ')
    testMidiOut= testWholeShebang.join(" ")
    console.log(testMidiOut+"testMidiOut");
    console.log(testWholeShebang.length + "o");
    console.log(testWholeShebang);//after set time base start track thing, length is last calculated after user confirm output
    testTrack.push(testMidiTrackConfig.join(" "));
    console.log(testTrack + " " + "testTrack")
    let testKeyf = parseHex(Number(testKey.value));
    let testVef = parseHex(Number(testVe.value));
    let testDurf = deciToVLQ(Number(Math.round(Number((testDur.value / 32) * 256))));
    //After some tweaking deciToVLQ works both case(the html convert & function call)
    //so midi thing first Dur than key then velocity and this test case assume the dur is the length of note
    //so it will be 0x00 + 0x90(noteOn event) + key + velocity then dur + 0x80(noteOff event) + key + 0x00(velocity 0 = mute)
    //Fuck i forget MTrk (4d 54 72 6b)
    let noteRam = ["0x00", "0x90"];
    noteRam.push(testKeyf.join(" "), testVef.join(" "), testDurf, "0x80", testKeyf.join(" "), "0x00");
    TrackRam.push(noteRam);
}
document.getElementById("testConfirm").addEventListener('click',function testConfirm() {
    let testTrackThing = TrackRam
    testTrackThing.join(" ");
    let testTrackLength = testTrackThing.toString()
    console.log(testTrackLength.length+"ohk");
    console.log(testTrackLength);
    let annoyingBypass = testTrackLength.split(",").join(" ");
    //alright so basically parseHex but it give 4 bytes
    let testTLength = ((testTrackLength.length +1 + 75)/5 +4).toString(16)
    console.log(testTLength);
    if (testTLength.length % 2 != 0) {
        testTLength = "0" + testTLength;
    }
    console.log(testTLength);
    testTLength = testTLength.match(/.{1,2}/g);
    let returntestTLength = [];
    for (let i = 0; i < testTLength.length; i++){
        let insert0 = 0;
        if (testTLength[i].length == 1) {
            insert0 = "0" + String(testTLength[i]);
        }
        returntestTLength.push("0x" + testTLength[i]);
        console.log(returntestTLength);
    };
    for (let i = returntestTLength.length; i < 4; i++){
        returntestTLength.unshift("0x00");
    }
    console.log(returntestTLength);
    testMidiOut = testMidiOut + " " + String(returntestTLength.join(" "));
    console.log((String(parseHex((testTrackLength.length + 1) / 5) + 5)) + " " + "need 0");
    //oh this fucks up the file ^
    console.log(String(parseHex((testTrackLength.length + 1) / 5 + 4)) + " " + "should be 14");
    //how do i fill up the 0
    testMidiOut = testMidiOut + " " + testMidiTrackConfig.join(" ") + " " + annoyingBypass;
    console.log(annoyingBypass)
    console.log(String(parseHex((testTrackLength.length + 1) / 5)));
    testMidiOut = testMidiOut + " " + "0x00" + " " + "0xFF" + " " + "0x2F" + " " + "0x00";
    console.log(testMidiOut);
    console.log(testMidiOut.split(" "))
    document.getElementById("testFinalCheck").textContent = testTrackLength;
    //finally turn all hex string to a array of hex numbers
    let testBeforeDownlaod = testMidiOut.split(" ");
    for (let i = 0; i < testBeforeDownlaod.length; i++){
        testData.push(Number(testBeforeDownlaod[i]));
    }
    
})
document.getElementById("testDownload").addEventListener("click", function () {
    let testprep = new Uint8Array(testData);
    let testBlob = new Blob([testprep], { type: "audio/midi" });
    let testUrl = document.createElement("a");
    testUrl.href = URL.createObjectURL(testBlob);
    testUrl.download = "Untitled.mid";
    testUrl.click();
    URL.revokeObjectURL(testUrl.href)
})
//alright cool test fucking works very nice.
//Time to find a graphics library to set up gui for actual midi stuff
/*Main process*/