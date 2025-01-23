function HTMLconsole(item){
    const inputStr = String(item);
    const newStr = document.createElement("p");
    const newText = document.createTextNode(inputStr.toString());
    newStr.appendChild(newText);
    const thePlace = document.getElementById("Console");
    thePlace.appendChild(newStr);
}
const inputField = document.getElementById("stuff");
inputField.addEventListener("keydown", function(press){
    if (press.key === "Enter"){
        press.preventDefault();
        const input = press.value;
        HTMLconsole(input);
    };
})
HTMLconsole("hi")