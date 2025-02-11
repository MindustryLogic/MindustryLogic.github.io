let mode = 0;
let submode = 0;
let fromJSON = [];
async function CALLTHEJSON(){
    const grabbed = await fetch("words.json");
    const grabbedWords = await grabbed.json();
    const wordArrays = Object.values(grabbedWords);
    fromJSON = wordArrays[mode];
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
const modeDisplay = document.getElementById("mode-display").innerText;
const Celsius = document.getElementById("Celsius");
const Kelvin = document.getElementById("Kelvin");
const Fahrenheit = document.getElementById("Fahrenheit");
const Rankine = document.getElementById("Rankine");
const Romer = document.getElementById("Romer");
var i = 0;
window.addEventListener('DOMContentLoaded', (event) =>{
    event.preventDefault();
    modeSwitchButtons.forEach(button => button.addEventListener("click", function(){
        CALLTHEJSON();
        console.log(mode + "this is mode num");
        console.log(submode + "this is submode num");
        console.log(fromJSON);
    }))
})
//TODO:Find out how to swap the html
//or should i just like hide it
// Put on hold i can't think again
Celsius.addEventListener("keydown", function fromCelsius (event){
    if (event.key === "Enter"){
        event.preventDefault();
        const whatKey = Number(Celsius.value);
        console.log(whatKey + "hey");
        Kelvin.value = whatKey + 273.15;
        Fahrenheit.value = (whatKey / (5 / 9) + 32);
        Rankine.value = (whatKey / (5 / 9) + 32 + 459.67);
        Romer.value = (whatKey * 21/40  + 7.5);
    };
});
Kelvin.addEventListener("keydown", function fromKelvin(event){
    if (event.key === "Enter"){
        event.preventDefault();
        const whatKey = Number(Kelvin.value);
        console.log(whatKey + "hey");
        Celsius.value = (whatKey - 273.15);
        Fahrenheit.value = ((whatKey-273.15)/ (5 / 9) + 32);
        Rankine.value = ((whatKey-273.15)/ (5 / 9) + 32 + 459.67);
        Romer.value = ((whatKey - 237.15)  * 21/40 + 7.5);
    };
});
Fahrenheit.addEventListener("keydown", function fromFahrenheit(event){
    if (event.key === "Enter"){
        event.preventDefault();
        const whatKey = Number(Fahrenheit.value);
        console.log(whatKey + "hey");
        Celsius.value = (whatKey - 32) * 5 / 9;
        Kelvin.value = ((whatKey - 32) * 5 / 9)+273.15;
        Rankine.value = ((whatKey + 459.67));
        Romer.value = ((whatKey - 32)* 7/24 + 7.5);
    };
});
Rankine.addEventListener("keydown", function fromRankine(event){
    if (event.key === "Enter"){
        event.preventDefault();
        const whatKey = Number(Rankine.value);
        Celsius.value = ((whatKey - 32 - 459.67) * 5 / 9);
        Kelvin.value = ((whatKey - 32 - 459.67) * 5 / 9 + 273.15);
        Fahrenheit.value = ((whatKey - 459.67));
        Romer.value = ((whatKey -491.67)* 7/24 + 7.5);
    }
});
Romer.addEventListener("keydown", function fromRomer(event){
    if (event.key === "Enter"){
        event.preventDefault();
        const whatKey = Number(Romer.value);
        Celsius.value = ((whatKey-7.5) * 40/21);
        Kelvin.value = ((whatKey - 7.5) * 40/21 + 237.15);
        Fahrenheit.value = ((whatKey -  7.5) * 24/7 + 32);
        Rankine.value = ((whatKey - 7.5) * 24/7 + 419.67);
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
function modeSwitchPlaceholder(){
    return '<div id="innerContent">'
    +    '<p>Hi i guess</p>'
    +'</div>'
};
function ModeSwitchThing(){
    switch (mode){
        case (0):{
            switch (submode){
                case (0):{
                    console.log("E");
                    break;
                }
            }break;
        }
    }
}
/*yea there is a few placeholders*/
//i honestly have no idea is it working or not
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
};//i have no idea why isn't it working - it's RTC boolean fault - actually no the if thing don't want to work with my button i even use addEventListener and it will not work still
console.log("I can't use replace with a button that is included in the replace?");

