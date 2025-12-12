const gridHeight = 8 // top (8) is trigger area for win, useable 0-7
const gridWidth = 8 //side walls so useable 6 , 1-7
function mapSetup() {
    //800px by 800px with a 5 px border per grid do its like at 100*[1...7]-2.5
    //i feel like i can use the canvas to draw the map + mild trolling in random color with no care of contrast for background & player
    //first up map randomization
    //map setup
    const map = document.getElementById("mapArea");
    const ctx = map.getContext("2d", { alpha: true });
    //amount of stuff that need to be randomized for maximum discomfort :
    //bg(floor) color, player color, wall color and probably a very poorly made bgm using the oscillator node
    ctx.fillStyle = "grey"
    ctx.strokeRect(0, 0, map.width, map.height)
    let randomColors = []
    for (let i = 0; i < 3; i++) {
        let color = Math.floor((Math.random() * 16777215)).toString(16)
        randomColors.push(color)
    }
    document.getElementById("p").textContent = randomColors
    ctx.fillStyle = "#" + randomColors[0] //bg
    ctx.fillRect(0, 0, 800, 800)
    //confidently invert the color the wrong way for grid border
    //switch the hex to deci to turn into rgba
    ctx.fillStyle = "rgba(255,255,255,0)"
    //hex to deci stuff
    let invertGridColor = randomColors[0]
    let invertGridColorDeci = []
    for (let i = 0; i < 3; i++) {
        invertGridColorDeci.push(invertGridColor.slice(i * 2, i * 2 + 2))
        invertGridColorDeci[i] = 255 - parseInt(invertGridColorDeci[i], 16)
    }
    document.getElementById("p").textContent += " " + invertGridColorDeci
    ctx.strokeStyle = "rgba(" + invertGridColorDeci[0] + "," + invertGridColorDeci[1] + "," + invertGridColorDeci[2] + ",1)"
    ctx.lineWidth = 5
    //This is the most brute force way to draw the grid by using a few Rect
    //ctx.strokeRect(0,0,100,800) + this works
    for (let i = 0; i < 7; i++) {
        ctx.strokeRect(100 * i, 0, 100, 800)
        ctx.strokeRect(0, 100 * i, 800, 100)
    }
    //So you know like a grid need coordinates right this is the word display
    /*ctx.fillStyle = "black"
    ctx.font = "20px Arial";
    ctx.fillText("A", 820, 820) //Where text*/
    ctx.fillStyle = "black"
    ctx.font = "20px Arial";
    // x is number y is letter
    for (let i = 0; i < 8; i++) {
        ctx.fillText(i, i * 100 + 50, 840)
    };
    const letters = ["A", "B", "C", "D", "E", " F", "G", "H"]
    for (let i = 0; i < 8; i++) {
        ctx.fillText(letters[i], 820, i * 100 + 50)
    }
    
    //Walls with color from second element
    ctx.fillStyle = "#" + randomColors[1]
    //fixed walls (it overshoots the intended area)
    for (let i = 0; i < 8; i++) {
        ctx.fillRect(2.5, 2.5 + 100 * i, 95, 95)
        ctx.fillRect(702.5, 2.5 + 100 * i, 95, 95)
        //the grid look funny due to stroke clipping (non applicable)
    }
    //ctx.fillRect(2.5, 2.5, 97.5, 97.5)
    //ctx.fillRect(2.5, 102.5, 97.5, 97.5) //OH OK I AM DUMB
    //random walls 
    let randomWallCount = Math.ceil(Math.random() * 7)
    console.log(randomWallCount)//yea
    //coordinate rng
    let rWallX = [];
    let rWallY = [];
    for (let i = 0; i < randomWallCount; i++){
        //actually no lol
        let wallXGen = Math.ceil(Math.random() * 7) 
        rWallX.push(wallXGen)
        let wallYGen = Math.ceil(Math.random() * 7)
        rWallY.push(wallYGen)
    }
    console.log(rWallX, " ", rWallY)
    //wall painting
    ctx.fillStyle = "#" + randomColors[1]
    for (let i = 0; i < randomWallCount; i++){
        ctx.fillRect((rWallX[i])*100+2.5, (rWallY[i])*100+2.5, 95, 95)
    }//this actually works
}
setTimeout(mapSetup(), 1000)
//player init location (x only) and some global variables
let cPlayerX = Math.ceil(Math.random() * 6)
let cPlayerY = 0
let playCoordHistoryX = [cPlayerX]
let playCoordHistoryY = [0]
let mCorX = Math.ceil(Math.random() * 6) + 1
let mCorY = Math.ceil(Math.random() * 7)
//game logic part
//well dang 
window.addEventListener("keydown",(event) =>{
    event.preventDefault()
    switch (event.key) {
        case ("ArrowUp"):
            console.log("uuuuuuuuuuuuuuuuuuuuuu")
            break
        case ("ArrowDown"):
            console.log("ddddddddddddddddddddd")
            break
        case ("ArrowLeft"):
            console.log("lllllllllllllllllll")
            break
        case ("ArrowRight"):
            console.log("rrrrrrrrrrrrrrrrrrrr")
            break
    }
    //player location trace

})

