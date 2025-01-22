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
const Celsius = document.getElementById("Celsius");
const Kelvin = document.getElementById("Kelvin");
const Fahrenheit = document.getElementById("Fahrenheit");
const Rankine = document.getElementById("Rankine");
const Romer = document.getElementById("Romer");
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
})