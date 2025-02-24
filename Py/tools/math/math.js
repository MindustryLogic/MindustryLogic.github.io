let mode = 0;
let submode = 0;
let fromJSON = [];
async function CALLTHEJSON(){
    const grabbed = await fetch("words.json");
    const grabbedWords = await grabbed.json();
    const wordArrays = Object.values(grabbedWords);
    fromJSON = wordArrays[mode];
    console.log(fromJSON);
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
const AnyButton = document.querySelectorAll("button");
const modeDisplay = document.querySelector("div#mode-display p");
const ConvPlace = document.getElementById("innerContent");
const vw = window.innerWidth;
let HowManyStuffInConv = 5;
let CalcForWidthOfConvThingCusInputHasMarginButNowItPixel = 100;
window.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault();
    modeSwitchButtons.forEach(button => button.addEventListener("click", function () {
        CALLTHEJSON();
        console.log(mode + "this is mode num");
        console.log(submode + "this is submode num");
        console.log(fromJSON);
        setTimeout(() => { for (let i = 0; i < fromJSON.length; i++) { subModeButtons[i].textContent = fromJSON[i]; } }, 250);//This thingy here need to click 2 times probably due to getting the words from a JSON is async and it does not sync ig
        switch (mode) {
            case 0:
                modeDisplay.textContent = "Unit";
                break;
            case 1:
                modeDisplay.textContent = "Thing";
                break;
        }
    }));
    subModeButtons.forEach(button => button.addEventListener("click", function () {
        if (mode === 0) {
            switch (submode) {
                case 0:
                    ConvPlace.innerHTML = TemperatureConvThing();
                    HowManyStuffInConv = document.querySelectorAll("#innerContent input").length;
                    CalcForWidthOfConvThingCusInputHasMarginButNowItPixel = vw / HowManyStuffInConv - 7;
                    document.querySelectorAll("#innerContent input, #innerContent label").forEach(slot => slot.style.width = CalcForWidthOfConvThingCusInputHasMarginButNowItPixel + "px");
                    break;
                case 1:
                    ConvPlace.innerHTML = LengthConvThing();
                    HowManyStuffInConv = document.querySelectorAll("#innerContent input").length;//seems like it isn't working
                    CalcForWidthOfConvThingCusInputHasMarginButNowItPixel = vw / HowManyStuffInConv - 7;
                    document.querySelectorAll("#innerContent input, #innerContent label").forEach(slot => slot.style.width = CalcForWidthOfConvThingCusInputHasMarginButNowItPixel + "px");
                    break;
                case 2:
                    ConvPlace.innerHTML = AreaConvThing();
                    HowManyStuffInConv = document.querySelectorAll("#innerContent input").length;
                    CalcForWidthOfConvThingCusInputHasMarginButNowItPixel = vw / HowManyStuffInConv - 7;
                    document.querySelectorAll("#innerContent input, #innerContent label").forEach(slot => slot.style.width = CalcForWidthOfConvThingCusInputHasMarginButNowItPixel + "px");
                    break;
            }
        }
    }));
    AnyButton.forEach(button => button.addEventListener("click", function () {
        ConvInput.removeEventListener('keydown', Conv);
        setTimeout(() => { ConvInput.addEventListener('keydown', Conv); }, 250);
    }));
});
//TODO:Find out how to swap the html
//or should i just like hide it
// Put on hold i can't think again
const ConvInput = document.getElementById('innerContent');
ConvInput.addEventListener('keydown', Conv);
function Conv(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const targetId = event.target.id;
        const whatKey = Number(event.target.value);
        switch (targetId) {
            case 'Celsius':
                Kelvin.value = whatKey + 273.15;
                Fahrenheit.value = (whatKey * 9 / 5) + 32;
                Rankine.value = (whatKey * 9 / 5) + 491.67;
                Romer.value = (whatKey * 21 / 40) + 7.5;
                break;
            case 'Kelvin':
                Celsius.value = whatKey - 273.15;
                Fahrenheit.value = (whatKey - 273.15) * 9 / 5 + 32;
                Rankine.value = (whatKey * 9 / 5);
                Romer.value = (whatKey - 273.15) * 21 / 40 + 7.5;
                break;
            case 'Fahrenheit':
                Celsius.value = (whatKey - 32) * 5 / 9;
                Kelvin.value = (whatKey - 32) * 5 / 9 + 273.15;
                Rankine.value = whatKey + 459.67;
                Romer.value = (whatKey - 32) * 7 / 24 + 7.5;
                break;
            case 'Rankine':
                Celsius.value = (whatKey - 491.67) * 5 / 9;
                Kelvin.value = whatKey * 5 / 9;
                Fahrenheit.value = whatKey - 459.67;
                Romer.value = (whatKey - 491.67) * 7 / 24 + 7.5;
                break;
            case 'Romer':
                Celsius.value = (whatKey - 7.5) * 40 / 21;
                Kelvin.value = (whatKey - 7.5) * 40 / 21 + 273.15;
                Fahrenheit.value = (whatKey - 7.5) * 24 / 7 + 32;
                Rankine.value = (whatKey - 7.5) * 24 / 7 + 491.67;
                break;
            case 'Meter':
                inch.value = whatKey * (1 / 0.0254);
                foot.value = whatKey * (1 / 0.3048);
                yard.value = whatKey * (1 / 0.9144);
                Kmeter.value = whatKey / 1000;
                mile.value = whatKey * (1 / 1609.344);
                nm.value = whatKey * (1 / 1852);
                ls.value = whatKey * (1 / 299792458)
                break;
            case 'inch':
                Meter.value = whatKey * 0.0254;
                foot.value = whatKey / 12;
                yard.value = whatKey / 36;
                Kmeter.value = whatKey * 0.0000254;
                mile.value = whatKey / 63360;
                nm.value = whatKey / 72913.3858;
                ls.value = whatKey / (1.1802852677 * 10 ^ 13);
                ly.value = whatKey / (3.7246174803 * 10 ^ 20);
                parsec.value = whatKey / (1.12148336925 * 10 ^ 21);
            case 'Kmeter':
                Meter.value = whatKey * 1000;
                break;
            case 'cm2':
                m2.value = whatKey / (100 * 100 * 100);
                break;
            case 'm2':
                cm2.value = whatKey * (100 * 100 * 100);
                break;
        }//yep length part did not work.probably need to refresh targetId(successfully did it)
    }
};

function TemperatureConvThing(){
    return '<div id="innerContent">'
        +   '<label for="Celsius">°C(Celsius)</label>'
        +   '<label for="Kelvin">K(Kelvin)</label>'
        +   '<label for="Fahrenheit">°F(Fahrenheit)</label>'
        +   '<label for="Rankine">°Ra(Rankine)</label>'
        +   '<label for="Romer">°Rø(Rømer)</label><br>'
        +   '<input type="number" id="Celsius" name="Celsius"  min="-273.15" />'
        +   '<input type="number" id="Kelvin" name="Kelvin"  min="0" />'
        +   '<input type="number" id="Fahrenheit" name="Fahrenheit"  min="-459.67" />'
        +   '<input type="number" id="Rankine" name="Rankine"  min="0" />'
        +   '<input type="number" id="Romer" name="Romer"  min="-135.9" />'
        +'</div>'
};
function LengthConvThing() {
    return '<div id="innerContent">'
        + '<label for="Meter">m(Meter)</label>'
        + '<label for="inch">Inch</label>'
        + '<label for="foot">Foot</label>'
        + '<label for="yard">Yard</label>'
        + '<label for="Kmeter">km(Kilometer)</label>'
        + '<label for="mile">Mile</label>'
        + '<label for="nm">Nautical Mile</label>'
        + '<label for="ls"Light Second</label>'
        + '<label for="ly">Light Year</label>'
        + '<label for="parsec">Parsec</label>'
        + '<br>'
        + '<input type="number" id="Meter" name="Meter" step="0.01" min="0" />'
        + '<input type="number" id="inch" name="inch" step="0.01" min="0" />'
        + '<input type="number" id="foot" name="foot" step="0.01" min-"0" />'
        + '<input type="number" id="yard" name="yard" step="0.01" min="0" />'
        + '<input type="number" id="Kmeter" name="Kmeter" step="0.01" min="0" />'
        + '<input type="number" id="mile" name="mile" step="0.01" min="0" />'
        + '<input type="number" id="nm" name="nm" step="0.01" min="0" />'
        + '<input type="number" id="ls" name="ls" step="0.01" min="0" />'
        + '<input type="number" id="ly" name="ly" step="0.01" min="0" />'
        + '<input type="number" id="parsec" name="parsec" step="0.01" min="0" />'
    + '</div>'
}
function AreaConvThing() {
    return '<div id="innerContent">'
        + '<label for="cm2">cm2</label>'
        + '<label for="m2">m2</label>'
        + '<br>'
        + '<input type="number" id="cm2" name="cm2" step="0.01" min="0" />'
        + '<input type="number" id="m2" name="m2" step="0.01" min="0" />'
        + '</div>'
}
function PlaceholderForConv() {
    return '<div id="innerContent">'
        + '<label for="placeholder">placeholder</label>'
        + '<input type="number" id="placeholder" name="placeholder"/> '
        + '</div>'
}
//i think its working