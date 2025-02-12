let mode = 0;
let submode = 0;
let fromJSON = [];
async function CALLTHEJSON(){
    const grabbed = await fetch("words.json");
    const grabbedWords = await grabbed.json();
    const wordArrays = Object.values(grabbedWords);
    fromJSON = wordArrays[mode];
    HTMLconsole(fromJSON);
    fromJSON = wordArrays["modes"];
    HTMLconsole(fromJSON);
}
CALLTHEJSON();
function HTMLconsole(str){
    console.log("ye");
    const leString = new String(str);
    const para = document.createElement("p");
    const node = document.createTextNode(leString.toString());
    para.appendChild(node);
    const element = document.getElementById("debug");
    element.appendChild(para);
}
const modeSwitchButtons = document.querySelectorAll("button#modeSwitch");
const subModeButtons = document.querySelectorAll("div#unit-conv button");
const modeDisplay = document.querySelector("div#mode-display p");
const Celsius = document.getElementById("Celsius");
const Kelvin = document.getElementById("Kelvin");
const Fahrenheit = document.getElementById("Fahrenheit");
const Rankine = document.getElementById("Rankine");
const Romer = document.getElementById("Romer");
window.addEventListener('DOMContentLoaded', (event) =>{
    event.preventDefault();
    modeSwitchButtons.forEach(button => button.addEventListener("click", function () {
        CALLTHEJSON();
        console.log(mode + "this is mode num");
        console.log(submode + "this is submode num");
        console.log(fromJSON);
        setTimeout(() => { for (let i = 0; i < fromJSON.length; i++) { subModeButtons[i].textContent = fromJSON[i]; } }, 100);//This thingy here need to click 2 times probably due to getting the words from a JSON is async and it does not sync ig
    }));
    subModeButtons.forEach(button => button.addEventListener("click", function () {
        
    }))
})
//TODO:Find out how to swap the html
//or should i just like hide it
// Put on hold i can't think again
const temperatureInputs = document.getElementById('innerContent');

temperatureInputs.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const targetId = event.target.id;
        const whatKey = Number(event.target.value);
        switch (targetId) {
            case 'Celsius':
                Kelvin.value = whatKey + 273.15;
                Fahrenheit.value = (whatKey * 9/5) + 32;
                Rankine.value = (whatKey * 9/5) + 491.67;
                Romer.value = (whatKey * 21/40) + 7.5;
                break;
            case 'Kelvin':
                Celsius.value = whatKey - 273.15;
                Fahrenheit.value = (whatKey - 273.15) * 9/5 + 32;
                Rankine.value = (whatKey * 9/5);
                Romer.value = (whatKey - 273.15) * 21/40 + 7.5;
                break;
            case 'Fahrenheit':
                Celsius.value = (whatKey - 32) * 5/9;
                Kelvin.value = (whatKey - 32) * 5/9 + 273.15;
                Rankine.value = whatKey + 459.67;
                Romer.value = (whatKey - 32) * 7/24 + 7.5;
                break;
            case 'Rankine':
                Celsius.value = (whatKey - 491.67) * 5/9;
                Kelvin.value = whatKey * 5/9;
                Fahrenheit.value = whatKey - 459.67;
                Romer.value = (whatKey - 491.67) * 7/24 + 7.5;
                break;
            case 'Romer':
                Celsius.value = (whatKey - 7.5) * 40/21;
                Kelvin.value = (whatKey - 7.5) * 40/21 + 273.15;
                Fahrenheit.value = (whatKey - 7.5) * 24/7 + 32;
                Rankine.value = (whatKey - 7.5) * 24/7 + 491.67;
                break;
        }
    }
});
//i need to banish a few things and start some reduced test case guh

function TemperatureConvThing(){
    return '<div id="innerContent">'
        +   '<label for="Celsius">°C(Celsius)</label>'
        +   '<label for="Kelvin">K(Kelvin)</label>'
        +   '<label for="Fahrenheit">°F(Fahrenheit)</label>'
        +   '<label for="Rankine">°Ra(Rankine)</label>'
        +   '<label for="Romer">°Rø(Rømer)</label><br>'
        +   '<input type="number" id="Celsius" name="Celsius" step="0.01" min="-273.15" />'
        +   '<input type="number" id="Kelvin" name="Kelvin" step="0.01" min="0" />'
        +   '<input type="number" id="Fahrenheit" name="Fahrenheit" step="0.01" min="-459.67" />'
        +   '<input type="number" id="Rankine" name="Rankine" step="0.01" min="0" />'
        +   '<input type="number" id="Romer" name="Romer" step="0.01" min="-135.9" />'
        +'</div>'
};
//i think its working
/*RTC (reduced test case) stuff here*/
let RTC = Boolean();
RTC = true;
let test = 0;
function RTCReplace1(){
    return'<div id="RTC">HEY'
    +    '<button type="button" id="RCTInvoke" onclick="RTCFunc()">RTC invoked</button>'
    +'</div>'
};
function RTCReplace2(){
    return'<div id="RTC">TWO'
    +    '<button type="button" id="RTCInvoke" onclick="RTCFunc();">RTC invoked</button>'
    +'</div>'
}
document.getElementById("c").addEventListener("click", RTCFunc);
function RTCFunc(){
    if(test == 0){
        document.getElementById("RTC").innerHTML = RTCReplace1();
    }else{
        document.getElementById("RTC").innerHTML = RTCReplace2();
    }
};//i have no idea why isn't it working - it's RTC boolean fault - actually no the if thing don't want to work with my button i even use addEventListener and it will not work still - turns out pause on exception is the problem
console.log("I can't use replace with a button that is included in the replace?");

