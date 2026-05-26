let testStuff = document.getElementById("testing").textContent
console.log(testStuff)
console.log(testStuff.match(/\)\/\(+\b/g))
console.log(testStuff.match(/([a-z])+/g))
console.log(testStuff.match(/([0-9])+/g))
let letterPos = testStuff.match((/([a-z])+/g))
let numPos = testStuff.match(/([0-9])+/g)
for (let i = 0; i < testStuff.length; i++){
    if (letterPos[0] == testStuff[i] & typeof letterPos[0] == "string") {
        letterPos.push(i)
        letterPos.splice(0,1)
    }
    if (numPos[0] == testStuff[i] & typeof numPos[0] == "string") {
        numPos.push(i)
        numPos.splice(0,1)

    }
}
console.log(letterPos)
console.log(numPos)
