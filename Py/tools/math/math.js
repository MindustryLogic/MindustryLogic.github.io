import * as mathPhy from './mathPhy.js';
mathPhy.initPhy.expandE();
console.log(mathPhy.eExpand);
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
const rounding = document.getElementById("rounding");
let RoundTo = 6;
let HowManyStuffInConv = 5;
let CalcForWidthOfConvThingCusInputHasMarginButNowItPixel = 100;
window.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault();
    rounding.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            RoundTo = Number(event.target.value);
        }
    })
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
                    CalcForWidthOfConvThingCusInputHasMarginButNowItPixel = vw / HowManyStuffInConv - 5;
                    document.querySelectorAll("#innerContent input, #innerContent label").forEach(slot => slot.style.width = CalcForWidthOfConvThingCusInputHasMarginButNowItPixel + "px");
                    break;
                case 1:
                    ConvPlace.innerHTML = LengthConvThing();
                    HowManyStuffInConv = document.querySelectorAll("#innerContent input").length;//seems like it isn't working
                    CalcForWidthOfConvThingCusInputHasMarginButNowItPixel = vw / HowManyStuffInConv - 5;
                    document.querySelectorAll("#innerContent input, #innerContent label").forEach(slot => slot.style.width = CalcForWidthOfConvThingCusInputHasMarginButNowItPixel + "px");
                    break;
                case 2:
                    ConvPlace.innerHTML = AreaConvThing();
                    HowManyStuffInConv = document.querySelectorAll("#innerContent input").length;
                    CalcForWidthOfConvThingCusInputHasMarginButNowItPixel = vw / HowManyStuffInConv - 5;
                    document.querySelectorAll("#innerContent input, #innerContent label").forEach(slot => slot.style.width = CalcForWidthOfConvThingCusInputHasMarginButNowItPixel + "px");
                    break;
            }
        }
    }));
    AnyButton.forEach(button => button.addEventListener("click", function () {
        ConvInput.removeEventListener('keydown', Conv);
        setTimeout(() => { ConvInput.addEventListener('keydown', Conv); }, 450);
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
                Kelvin.value = parseFloat((whatKey + 273.15).toPrecision(RoundTo));
                Fahrenheit.value = parseFloat(((whatKey * 9 / 5) + 32).toPrecision(RoundTo));
                Rankine.value = parseFloat(((whatKey * 9 / 5) + 491.67).toPrecision(RoundTo));
                Romer.value = parseFloat(((whatKey * 21 / 40) + 7.5).toPrecision(RoundTo));
                break;
            case 'Kelvin':
                Celsius.value = parseFloat((whatKey - 273.15).toPrecision(RoundTo));
                Fahrenheit.value = parseFloat(((whatKey - 273.15) * 9 / 5 + 32).toPrecision(RoundTo));
                Rankine.value = parseFloat(((whatKey * 9 / 5)).toPrecision(RoundTo));
                Romer.value = parseFloat(((whatKey - 273.15) * 21 / 40 + 7.5).toPrecision(RoundTo));
                break;
            case 'Fahrenheit':
                Celsius.value = parseFloat(((whatKey - 32) * 5 / 9).toPrecision(RoundTo));
                Kelvin.value = parseFloat(((whatKey - 32) * 5 / 9 + 273.15).toPrecision(RoundTo));
                Rankine.value = parseFloat((whatKey + 459.67).toPrecision(RoundTo));
                Romer.value = parseFloat(((whatKey - 32) * 7 / 24 + 7.5).toPrecision(RoundTo));
                break;
            case 'Rankine':
                Celsius.value = parseFloat(((whatKey - 491.67) * 5 / 9).toPrecision(RoundTo));
                Kelvin.value = parseFloat((whatKey * 5 / 9).toPrecision(RoundTo));
                Fahrenheit.value = parseFloat((whatKey - 459.67).toPrecision(RoundTo));
                Romer.value = parseFloat(((whatKey - 491.67) * 7 / 24 + 7.5).toPrecision(RoundTo));
                break;
            case 'Romer':
                Celsius.value = parseFloat(((whatKey - 7.5) * 40 / 21).toPrecision(RoundTo));
                Kelvin.value = parseFloat(((whatKey - 7.5) * 40 / 21 + 273.15).toPrecision(RoundTo));
                Fahrenheit.value = parseFloat(((whatKey - 7.5) * 24 / 7 + 32).toPrecision(RoundTo));
                Rankine.value = parseFloat(((whatKey - 7.5) * 24 / 7 + 491.67).toPrecision(RoundTo));
                break;
            case 'Meter':
                inch.value = parseFloat((whatKey * (1 / 0.0254)).toPrecision(RoundTo));
                foot.value = parseFloat((whatKey * (1 / 0.3048)).toPrecision(RoundTo));
                yard.value = parseFloat((whatKey * (1 / 0.9144).toPrecision(RoundTo)));
                KMeter.value = parseFloat((whatKey / 1000).toPrecision(RoundTo));
                mile.value = parseFloat((whatKey * (1 / 1609.344)).toPrecision(RoundTo));
                nm.value = parseFloat((whatKey * (1 / 1852)).toPrecision(RoundTo));
                ls.value = parseFloat((whatKey * (1 / 299792458)).toPrecision(RoundTo));
                ly.value = parseFloat((whatKey * (1 / 9460730472580800)).toPrecision(RoundTo));
                parsec.value = parseFloat((whatKey * (1 / 30856775814913600)).toPrecision(RoundTo));
                break;
            case 'inch':
                Meter.value = parseFloat((whatKey * 0.0254).toPrecision(RoundTo));
                foot.value = parseFloat((whatKey / 12).toPrecision(RoundTo));
                yard.value = parseFloat((whatKey / 36).toPrecision(RoundTo));
                KMeter.value = parseFloat((whatKey * 0.0000254).toPrecision(RoundTo));
                mile.value = parseFloat((whatKey / 63360).toPrecision(RoundTo));
                nm.value = parseFloat((whatKey / 72913.3858).toPrecision(RoundTo));
                ls.value = parseFloat((whatKey * 0.0254 / 299792458).toPrecision(RoundTo));
                ly.value = parseFloat((whatKey * 0.0254 / 9460730472580800).toPrecision(RoundTo));
                parsec.value = parseFloat((whatKey * 0.0254 / 30856775814913600).toPrecision(RoundTo));
                break;
            case 'foot':
                break;//i got lazy :p
            case 'KMeter':
                Meter.value = parseFloat((whatKey * 1000).toPrecision(RoundTo));
                break;
            case 'cm2':
                m2.value = parseFloat((whatKey / (100 * 100 * 100)).toPrecision(RoundTo));
                break;
            case 'm2':
                cm2.value = parseFloat((whatKey * (100 * 100 * 100)).toPrecision(RoundTo));
                break;
        }//yep length part did not work.probably need to refresh targetId(successfully did it)
    }
};

function TemperatureConvThing(){
    return '<div id="innerContent">'
        + '<div class="labels">'
        +   '<label for="Celsius">°C(Celsius)</label>'
        +   '<label for="Kelvin">K(Kelvin)</label>'
        +   '<label for="Fahrenheit">°F(Fahrenheit)</label>'
        +   '<label for="Rankine">°Ra(Rankine)</label>'
        + '<label for="Romer">°Rø(Rømer)</label>'
        + '</div>'
        + '<div class="inputs">'
        +   '<input type="number" id="Celsius" name="Celsius"  min="-273.15" />'
        +   '<input type="number" id="Kelvin" name="Kelvin"  min="0" />'
        +   '<input type="number" id="Fahrenheit" name="Fahrenheit"  min="-459.67" />'
        +   '<input type="number" id="Rankine" name="Rankine"  min="0" />'
        + '<input type="number" id="Romer" name="Romer"  min="-135.9" />'
        + '</div>'
        +'</div>'
};
function LengthConvThing() {
    return '<div id="innerContent">'
        + '<div class="labels">'
        + '<label for="Meter">m(Meter)</label>'
        + '<label for="inch">Inch</label>'
        + '<label for="foot">Foot</label>'
        + '<label for="yard">Yard</label>'
        + '<label for="KMeter">km(Kilometer)</label>'
        + '<label for="mile">Mile</label>'
        + '<label for="nm">Nautical Mile</label>'
        + '<label for="ls">Light Second</label>'
        + '<label for="ly">Light Year</label>'
        + '<label for="parsec">Parsec</label>'
        + '</div>'
        + '<div class="inputs">'
        + '<input type="number" id="Meter" name="Meter" step="0.01" min="0" />'
        + '<input type="number" id="inch" name="inch" step="0.01" min="0" />'
        + '<input type="number" id="foot" name="foot" step="0.01" min-"0" />'
        + '<input type="number" id="yard" name="yard" step="0.01" min="0" />'
        + '<input type="number" id="KMeter" name="KMeter" step="0.01" min="0" />'
        + '<input type="number" id="mile" name="mile" step="0.01" min="0" />'
        + '<input type="number" id="nm" name="nm" step="0.01" min="0" />'
        + '<input type="number" id="ls" name="ls" step="0.01" min="0" />'
        + '<input type="number" id="ly" name="ly" step="0.01" min="0" />'
        + '<input type="number" id="parsec" name="parsec" step="0.01" min="0" />'
        + '</div>'
    + '</div>'
}
function AreaConvThing() {
    return '<div id="innerContent">'
        + '<div class="labels">'
        + '<label for="cm2">cm2</label>'
        + '<label for="m2">m2</label>'
        + '</div>'
        + '<br>'
        + '<div class="inputs">'
        + '<input type="number" id="cm2" name="cm2" step="0.01" min="0" />'
        + '<input type="number" id="m2" name="m2" step="0.01" min="0" />'
        + '</div>'
        + '</div>'
}
function PlaceholderForConv() {
    return '<div id="innerContent">'
        + '<label for="placeholder">placeholder</label>'
        + '<input type="number" id="placeholder" name="placeholder"/> '
        + '</div>'
}
//i think its working