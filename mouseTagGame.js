
let xPos
let yPos

let ySpeed = 2
let xSpeed = 2

let furby

let mouseDist

let score = 0

let bloop

let startGameBool = true
let winScreenBool = false

let rotation = 0

function preload(){
  furby = loadImage('furby.png')
  bloop = loadSound('bloop.mp3')
}


function setup(){
  createCanvas(windowWidth, windowHeight)

  xPos = random(windowWidth)
  yPos = random(windowHeight)

  textAlign(CENTER)
  imageMode(CENTER)


}


function draw(){
  if(startGameBool == true){
    startGame()
  }

  if(winScreenBool == true){
    winGame()


  }

}

function startGame(){
  background(0)
  fill(255)
  textSize(40)
  text(score, windowWidth/2, 50)


  mouseDist = dist(mouseX, mouseY, xPos, yPos)

  image(furby, xPos, yPos, 30, 30)
  xPos = xPos +xSpeed
  yPos = yPos +ySpeed

  if(xPos >= windowWidth - 15 || xPos<= 0){
    xSpeed = xSpeed * -1
  }

  if(yPos >= windowHeight - 15 || yPos <= 0){
    ySpeed = ySpeed * -1
  }

  if(mouseDist <= 15){
    xPos = random(15, windowWidth - 15)
    yPos = random(15, windowHeight - 15)
    score++
    ySpeed * 1.2
    xSpeed * 1.2

    bloop.play()
  }

  if(score >= 5){
    startGameBool = false
    winScreenBool = true
  }
}

function winGame(){
  background( 170, 45, 120)
  fill(255)
  textSize(40)
  text("You won!!", windowWidth/2, 50)
  rotation++
  push()
  translate(windowWidth/2, windowHeight/2)
  rotate(radians(rotation))
  image(furby, 0, 0, 300, 300)
  pop()

}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)}
