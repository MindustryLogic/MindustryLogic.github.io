let mode = 1;
let submode = 1;
function HTMLconsole(str){
    console.log("ye");
    const leString = new String(str);
    const para = document.createElement("p");
    const node = document.createTextNode(leString.toString());
    para.appendChild(node);
    const element = document.getElementById("debug");
    element.appendChild(para);
}
const modeSwitchButtons = document.getElementById("modeSwitch");
const subModeButtons = document.querySelectorAll("div#unit-conv buttons");
const Celsius = document.getElementById("Celsius");
const Kelvin = document.getElementById("Kelvin");
const Fahrenheit = document.getElementById("Fahrenheit");
const Rankine = document.getElementById("Rankine");
const Romer = document.getElementById("Romer");
HTMLconsole(subModeButtons);
//TODO:Find out how to swap the html
modeSwitchButtons.addEventListener("click", () => {
    subModeButtons.innerHTML = "what";
});/*Put on hold i can't think again*/
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
}
function ModeSwitchThing(){
    switch (mode){
        case (1):/*Unit conversion*/
            subModeButtons.innerHTML = "test";
                case (1):/*Temperature conversion*/
                    document.getElementById("innerContent").innerHTML = TemperatureConvThing();
                    break;
                case (2):/*Length conversion*/
                    break;
        case (2):/*I really don't know rn*/
            switch(submode){
                case (1):
                    break;
            }
    }
};/*yea there is a few placeholders*/