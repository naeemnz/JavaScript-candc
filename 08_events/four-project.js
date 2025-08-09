//generate a random colour
let randomColor = function(){
    let hex = "0123456789ABCDEF"
    let colour = "#"
    for (let i = 0; i < 6; i++) {
        colour += hex[Math.floor(Math.random()*16)]
    }
    return colour
}
console.log(randomColor())
let intervalId
const startChangingColour = function() {
    if(!intervalId)
    {
        intervalId = setInterval(changeBgColour, 1000)
    }
    function changeBgColour(){
        document.body.style.backgroundColor = randomColor()
    }
}
const stopChangingColor = function() {
    clearInterval(intervalId)
    intervalId = null
}

document.querySelector('#Start').addEventListener('click', startChangingColour)
document.querySelector('#Stop').addEventListener('click', stopChangingColor)