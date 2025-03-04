/*pseudo code place
basically a input which have a eventListener of every key which lags and put out the translated thing in a non input-able input from a json i guess
the json file gonna be so big oh god
also ipa is mixed in there cuz why not
and X-sampa also cuz UTAU
*/
FromJSON = []
DetectLang = ""
async function GetWordsFromJSON(thing) {
    const Grabbed = await fetch("dict.json");
    const Words = await grabbed.json();
    const ToArray = Object.values(words);
    FromJSON = toArray[thing];
}
function autoFormSelectLangOption() {
    GetWordsFromJSON(0);
    for (i = 0; i < FromJSON.length; i++){
        const Langs = String(FromJSON[i]);
        const options = document.createElement("option");
        options.forEach((attribute) => {
            attribute.textContent = Langs;
            attribute.value = Langs;
        }
    }
}