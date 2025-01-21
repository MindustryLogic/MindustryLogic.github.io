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
let DegreeC = 0;
let K = 0;
const Kelvin = document.getElementById("Kelvin");
Celsius.addEventListener("keydown", function(event){
    if (event.key === "Enter"){
        event.preventDefault();
        const whatKey = Celsius.value;
        DegreeC = whatKey
        console.log(whatKey + "hey");
        Kelvin.setAttribute("value", whatKey);
    }
});
Kelvin.addEventListener("keydown", function(event){
    if (event.key === "Enter"){
        event.preventDefault();
        const whatKey = Kelvin.value;
        K = whatKey;
        console.log(whatKey + "hey");
    }
});