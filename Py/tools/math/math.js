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
function tempConvFromC(){
let C = document.getElementById("Celsius");
C.addEventListener(, alert("hi"));
}