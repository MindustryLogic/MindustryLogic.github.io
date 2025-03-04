/*pseudo code place
basically a input which have a eventListener of every key which lags and put out the translated thing in a non input-able input from a json i guess
the json file gonna be so big oh god
also ipa is mixed in there cuz why not
and X-sampa also cuz UTAU
*/
FromJSON = []
InputLang = document.getElementById("InputLangSelect").value;
OutputLang = document.getElementById("OutputLangSelect").value;
UserInput = document.getElementById("InputStuff");
OutputDisplay = document.getElementById("OutputStuff");
IsInputOutputLangSame = true;
window.addEventListener("DOMContentLoaded", function (event) {
    event.preventDefault();
    autoFormSelectLangOption();
})
async function GetWordsFromJSON(thing) {
    const Grabbed = await fetch("dict.json");
    const Words = await Grabbed.json();
    const ToArray = Object.values(Words);
    FromJSON = ToArray[thing];
}
function autoFormSelectLangOption() {
    GetWordsFromJSON(0);
    setTimeout(() => {
        if (FromJSON.length > 0) {
            for (i = 0; i < FromJSON.length; i++) {
                let Langs = String(FromJSON[i]);
                let Option = ["<option value='", Langs, "'>", Langs, "</option>"];
                document.getElementById("InputLangSelect").innerHTML += Option.join("");
                document.getElementById("OutputLangSelect").innerHTML += Option.join("");                
            }//absolutely working as intended
        } else {
            console.error("this should not happen");
        }
    }, 5000);
}
UserInput.addEventListener('keydown', Translate);
function Translate (event) {
    UserInputValue = document.getElementById("InputStuff").value;
    //User input sanitation
    if (UserInputValue.length > 0) {
        if (UserInputValue.match(/[\s_-]/g) === true) {
            OutputDisplay.value = "ay bro";
        } else if (InputLang == OutputLang) {
            OutputDisplay.value = UserInputValue;
        }
    } else {
        OutputDisplay.value = "";
    }
    UserInputValue = document.getElementById("InputStuff").value;
}
