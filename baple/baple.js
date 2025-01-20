const broWidth = window.innerWidth;
const broHeight = window.innerHeight;
let AdjRatio = broWidth / (16 / 9)
const showWindowRes = document.getElementById("brores").innerHTML = broWidth + "width" + broHeight + "height" + AdjRatio + "16:9"
const fixRatio = document.querySelectorAll(":root").forEach(cssVar => {
    cssVar.style.setProperty("--window-height", (broWidth * 9/16) + "px");
    cssVar.style.setProperty("--window-width", broWidth + "px");
});/* ya idk why am i doing this but anyway*/
function HTMLconsole(str){
    console.log(str);
    document.getElementById("HTMLconsole").innerHTML = str;
}
function theHTMLconsoleShowThing(){
    if (window.getComputedStyle(document.querySelector(":root")).getPropertyValue("--console-open") === "none") {
        document.querySelector(":root").style.setProperty("--console-open", "table");
        HTMLconsole("it open");
        document.getElementById("measure").style.height = AdjRatio + "px";
    }else{
        document.querySelector(":root").style.setProperty("--console-open", "none");
    }
}
