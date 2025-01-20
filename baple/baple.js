const broWidth = window.innerWidth;
const broHeight = window.innerHeight;
let AdjRatio = broWidth / (16 / 9)
const showWindowRes = document.getElementById("brores").innerHTML = broWidth + "width" + broHeight + "height" + AdjRatio + "16:9"
function HTMLconsole(arg){
    console.log(arg);
    document.getElementById("HTMLconsole")
}
function theHTMLconsoleShowThing(){
    if (document.querySelector(":root").getAttribute("--console-open") === "none") {
        document.querySelector(":root").style.setProperty("--console-open", "table");
        HTMLconsole("it open");
    }else{
        document.querySelector(":root").style.setProperty("--console-open", "none");
    }
}