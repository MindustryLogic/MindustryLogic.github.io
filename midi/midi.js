//so yea midi stuff
//variable length quantity converter(deci to hex)
/*const deciInput = document.getElementById("deciInput");
let deciInputVal = Number(deciInput.value);
deciInput.addEventListener("keydown", deciToVLQ)
let vlqOutput = document.getElementById("vlqOutput");
let vlqHex = [""];*/
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
function vlqToHexArray(vlqArray) {
    if (!Array.isArray(vlqArray) || vlqArray.length === 0) return [];

    // Decode VLQ to integer
    let value = 0;
    for (let i = 0; i < vlqArray.length; i++) {
        value = (value << 7) | (vlqArray[i] & 0x7F);
        if ((vlqArray[i] & 0x80) === 0) break;
    }

    // Convert integer to hex array in 0x00 format
    let hex = value.toString(16);
    if (hex.length % 2 !== 0) hex = "0" + hex;
    let hexArray = [];
        hexArray = hex.match(/.{1,2}/g).map(byte => "0x" + byte);

    return hexArray;
}//AI stuff it works but i am not sure how it works
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
function parseHexToDeci(whatever) {
    if (typeof (whatever) == "string") {
        if (whatever.startsWith("0x")) {
            return (Number(whatever))
        } else {
            return (Number("0x" + whatever));
        }
    }
    if (typeof (whatever) == "number") {
        return (whatever);
    }
    //if (typeof (whatever) == "Array") {
        //let toDeci = [];}
}
//testing midi note thing and download file and stuff, proof of concept
const testMidiConfig = ["0x4D","0x54","0x68","0x64","0x00","0x00","0x00","0x06","0x00","0x01","0x00","0x01"]//First 4 byte header,fixed 00000006,mode (0=single track,1=multi track,2=multi song),num of tracks(is 1)
const testMidiTrack = ["0x4D","0x54","0x72","0x6B"]//Track header
//const pageHexClientView = document.getElementById("testHexOut");
const testMidiTrackConfig = ["0x00","0xFF","0x51","0x03","0x07","0xA1","0x20","0x00","0xFF","0x58","0x04","0x04","0x02","0x18","0x08"]//tempo 120","time signature 4/4","and the midi clock that probably don't matter
/*const testTB = document.getElementById("TimeBase");
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
})*/
//All commented out for future reference and i feel like i need it a lot
//alright cool test fucking works very nice.
//Time to find a graphics library to set up gui for actual midi stuff
/*Main process*/
const FileLoaded = new Event("FileLoaded");
const MidiFileIn = document.getElementById("MidiIn");
let MidiFileInHex = [];
let parsedMidi = [];
MidiFileIn.addEventListener("change", function () {
    let file = MidiFileIn.files[0];
    let reader = new FileReader();
    let buffer = [];
    reader.onload = function (e) {
        let arrayBuffer = e.target.result;
        let byteArray = new Uint8Array(arrayBuffer);
        for (let n = 0; n < byteArray.length; n++){
            buffer.push(parseHex(byteArray[n]).join(" "));
            MidiFileInHex.push(parseHex(byteArray[n]).join(" "));
        }
        console.log(buffer);
        console.log(MidiFileInHex);
    }
    reader.readAsArrayBuffer(file);
    //Oh yea right readAsArrayBuffer is async so i need to heckin' setTimeout
    //Yea imma make it 1 whole second lol
    console.log(MidiFileInHex);
    console.log(reader)
    setTimeout(function () {
        console.log("Timeout done");
        console.log(MidiFileInHex);
        window.dispatchEvent(FileLoaded);
    }, 1000);
})
//how do i sent a event again
window.addEventListener("FileLoaded", function () {
    document.getElementById("MidiInDebug")
})
window.addEventListener("FileLoaded", parseMidi);

function parseMidi() {
    //This parse midi file like the name suggest
    //find midi header if not found throw error(in console)
    //find track header and end if not found also throw error(in console)
    //basiclly if find things wrong throw error 
    //use MidiFileInHex.
    //first up restructure the array and sep it
    let sepMidi = [];
    let sepCheck = [];
    let problem = false;
    let doneErrorCheck = false;
    for (let i = 0; i < MidiFileInHex.length; i++) {
        if (problem == false) {
            if (sepMidi.length == MidiFileInHex.length) {
                doneErrorCheck = true;
            }
            try {
                if (problem == true) {
                    throw new SyntaxError("Midi file contain improper byte arrangement(not following standard MIDI file format) you should probably check the bytes");
                }
                sepMidi.push(Number(MidiFileInHex[i]))
                switch (i) {
                    case 3:
                        if (sepMidi[0] + sepMidi[1] + sepMidi[2] + sepMidi[3] != 365) {
                            //check does first 4 byte is MThd
                            console.error("This is not a midi header");
                            problem = true;
                        }
                        break;
                    case 7:
                        if (sepMidi[4] + sepMidi[5] + sepMidi[6] + sepMidi[7] != 6) {
                            //check is it 6
                            console.error("byte 4 to 7 must be 00 00 00 06");
                            problem = true;
                        }
                        break;
                    case 9:
                        if (sepMidi[9] < 3 && sepMidi[9] < 0) {
                            //check format
                            console.error("byte 8 is not 0,1 or 2, cannot get midi type");
                            problem = true;
                        }
                        break;
                    case 11:
                        //check num. of tracks
                        if (sepMidi[9] = 0 && sepMidi[11] != 1) {
                            console.error("The mode is single track only and you either don't have a track or more than 1 track")
                            problem = true;
                        } else if (sepMidi[11] < 1) {
                            console.error("Dude where is your track i can't find it");
                            problem = true;
                        }
                        break;
                    case 13:
                        //check time base 
                        if (sepMidi[12] + sepMidi[13] > 510 || sepMidi[12] + sepMidi[13] < 1) {
                            console.error("I am pretty sure time base is not negative(or 0) or more than 510");
                            problem = true;
                        }
                        break;
                    //then i will only check does track header exist and does the track end exist
                    case 17:
                        if (sepMidi[14] + sepMidi[15] + sepMidi[16] + sepMidi[17] != 382) {
                            console.error("Where is track header");
                            problem = true;
                        }
                        break;
                }
            
            } catch (e) {
                console.error(e);
                problem = true;
            }
        }
        if (problem == true) {
            break;
        };
    };
    
    if (doneErrorCheck == true) {
        //well if you see clearly you will realise that this only check for track end 1 time only because i don't think people will actually make a midi file in machine code but i will cover it somehow
        try {
            if (sepMidi[sepMidi.length] + sepMidi[sepMidi.length - 1] + sepMidi[sepMidi.length - 2] != 302) {
                console.error("I guess your song last forever");
                problem = true
            }
            if (problem == true) {
                throw new SyntaxError("Midi file contain improper byte arrangement(not following standard MIDI file format) you should probably check the bytes");
            }
        } catch (e) {
            console.error(e);
            problem = true;
        }
    };
    //parse timeBase
    let timeBase = Number("0x" + Number(MidiFileInHex[12]).toString(16) + MidiFileInHex[13].replace("0x", ""));
    console.log("TimeBase=" + timeBase);
    //How to differentiate delta time and note event
    //check meta event first anyway
    //byte 19-22(index 18-21) should be chunk length
    console.log(MidiFileInHex.toString(""));
    let trackCount = 0;
    let trackLength = 0
    trackCount = MidiFileInHex.toString("").match(/0x4d,0x54,0x72,0x6b/g).length;
    let tracks = [];
    let tracksSplit = [];
    for (let i = 14; i < MidiFileInHex.length; i++) {
        tracks.push(MidiFileInHex[i]);
    }
    console.log(tracks);
    trackLength = (tracks.toString("").indexOf("0xff,0x2f,0x00")) / 5 + 3
    console.log(tracks.toString("").indexOf("0xff,0x2f,0x00"));
    console.log(trackLength);
    for (let n = 0; n < trackCount; n++) {
        let trackMergeSep = [];
        for (let i = 0; i < trackLength; i++) {
            trackMergeSep.push(tracks[0]);
            tracks.shift();
        };
        tracksSplit.push(trackMergeSep);
        trackLength = (tracks.toString("").indexOf("0xff,0x2f,0x00")) / 5 + 3;
    } console.log(tracksSplit);
    //separated now what
    let trackParse = []; //hexadecimal
    let trackComprehend = [];//in string lol
    for (let i = 0; i < tracksSplit.length; i++){
        let splitTrack = tracksSplit[i]
        for (let index = 0; index < tracksSplit[i].length; index++){
            //first sep dT from event
            if (splitTrack[index] == "0xff") {
                if (splitTrack[index + 1] == "0x7f" && splitTrack[index + 3] == "0x7f") {
                    //it is da data specific stuff ignore it but still need to account for length
                    //i am gonna leave it blank so here's a TODO: FIND THIS SUCKER AND NUKE IT FROM THE FACE OF THIS UNIVERSE
                }
                //skip ff 00 02(seq.num), ff 01 (text event), ff 02 (copyright notice), ff 05(lyrics), ff 06(marker(what does it mean)), ff 07(cue point) and ff 7f (program name). supposedly after that is the length of the thing so just yeet the entire thing to trackParse
                if (splitTrack[index + 1] == "0x00" || splitTrack[index + 1] == "0x01" || splitTrack[index + 1] == "0x02" || splitTrack[index + 1] == "0x05" || splitTrack[index + 1] == "0x06" || splitTrack[index + 1] == "0x07" || splitTrack[index + 1] == "0x7f") {
                    let length = Number(splitTrack[index + 2]);
                    for (let n = 0; n < length; n++) {
                        trackParse.push(splitTrack[index + n]);
                    }
                    index += length;
                }
                //prepare for massive console spam
                switch (splitTrack[index + 1]) {
                    case "0x03":
                        //is track name
                        console.log("track name");
                        let trackNameLength = Number(splitTrack[index + 2]);;
                        let trackName = [];
                        for (let name = 0; name < trackNameLength; name++) {
                            //yes this expect ASCII i blame it on user for wrong display name
                            trackName.push(String.fromCharCode(parseHexToDeci(splitTrack[index + 3 + name])));
                        }
                        console.log("name=" + trackName.join(""));
                        //dT is assumed to be 0 even if the file says otherwise
                        trackComprehend.push("dT=0" + "ff03" + trackName.join(""));
                }
            }
        }
    }
    
}