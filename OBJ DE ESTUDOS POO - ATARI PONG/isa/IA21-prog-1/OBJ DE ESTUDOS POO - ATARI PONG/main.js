const canvas = document.createElement("canvas") //uma constante chamada canvas, cria um elemento//
const context = canvas.getContext("2d") //uma contante chamada context que cria o contexto de uma elemento 2d

canvas.width = 800 //define altura do elemento canvas
canvas.height = 600 //define largura do elemento canvas

let position = 100 //define posiçao da barrinha
let directionY = 0 //define direçao da barrinha 
let barSize = 100 //define tamanho total da barrinha

document.addEventListener("keydown", ev => {
    if (ev.code == "KeyS" && !ev.repeat) {
        return directionY = 5
    }

    if (ev.code == "KeyW" && !ev.repeat) {
        return directionY = -5
    }
})

document.addEventListener("keyup", ev => {
    if (ev.code == "KeyS" || ev.code == "KeyW")
        return directionY = 0
})

function mainLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height) // apaga 
    context.fillRect(10, position, 20, barSize)// renderizar a barrinha 
    position += directionY

    if (position <= 0 || position > canvas.height - barSize) {
        directionY = 0
    }

    requestAnimationFrame(mainLoop)
}

requestAnimationFrame(mainLoop)
document.body.append(canvas)