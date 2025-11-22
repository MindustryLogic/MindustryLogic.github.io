const gridHeight = 8 // top (8) is trigger area for win, useable 1-7
const gridWidth = 8 //side walls so useable 6 , 1-7
function mapSetup() {
    //i feel like i can use the canvas to draw the map + mild trolling in random color with no care of contrast for background & player
    //first up map randomization
    let mCorX = Math.ceil(Math.random() * 6)+1
    let mCorY = Math.ceil(Math.random() * 7)
    //map setup
    const map = document.getElementById("mapArea");
    const ctx = map.getContext("2d");
    //amount of stuff that need to be randomized for maximum discomfort :
    //bg(floor) color, player color, wall color and probably a very poorly made bgm using the oscillator node
    let randomColors = []
    for (let i = 0; i < 3; i++){
        let color = Math.floor((Math.random() * 16777215)).toString(16)
        randomColors.push(color)
    }
    document.getElementById("p").textContent = randomColors
    ctx.fillStyle = "#"+randomColors[0] //bg
    ctx.fillRect(0,0,map.width,map.height)
}
mapSetup()