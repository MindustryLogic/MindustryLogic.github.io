/*pseudo code place
basically a input which have a eventListener of every key which lags and put out the translated thing in a non input-able input from a json i guess
the json file gonna be so big oh god
also ipa is mixed in there cuz why not
and X-sampa also cuz UTAU
*/
FromJSON = []
InputLang = document.getElementById("InputLangSelect").value;
OutputLang = document.getElementById("OutputLangSelect").value;
UserInput = document.getElementById("InputStuff").value;
OutputDisplay = document.getElementById("OutputStuff").value;
IsInputOutputLangSame = true;
window.addEventListener("DOMContentLoaded", function (event) {
    event.preventDefault();
})
async function GetWordsFromJSON(thing) {
    const Grabbed = await fetch("dict.json");
    const Words = await Grabbed.json();
    const ToArray = Object.values(Words);
    FromJSON = ToArray[thing];
}
function autoFormSelectLangOption() {
    GetWordsFromJSON(0);
    for (i = 0; i < FromJSON.length; i++){
        const Langs = String(FromJSON[i]);
        const options = document.createElement("option");
        options.forEach((attribute) => {
            attribute.textContent = Langs;
            attribute.value = Langs;
        });
        const MakeText = document.createTextNode(Langs.toString())
        options.appendChild(MakeText);
        document.querySelectorAll("#InputLangSelect", "#OutputLangSelect").forEach((LangSelect) => {
            LangSelect.appendChild(options);
        });
    }//absolutely not working
}
UserInput.addEventListener("keydown", function (event) {
    event.preventDefault();
    UserInput = document.getElementById("InputStuff").value;
    //User input sanitation
    UserInputValue = UserInput
    if (UserInputValue.match(/[\s_-]/g)) {
        OutputDisplay.value = "Ay bro you forget to press the space bar";
    } else {
        //Detect is Input and Output lang is same or not
        if (InputLang === OutputLang) {
            IsInputOutputLangSame = true;
            OutputDisplay.value = UserInputValue;
        } else {
            //placeholder
        }
    }
})
