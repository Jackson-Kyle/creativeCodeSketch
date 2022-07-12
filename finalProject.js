//moveable character
let character
let firstBackground
let secondBackground
let thirdBackground

//final screen
let endLevel
let kai
let kaiCenat
let victory
//enemies
let goblin
let skeleton
let bigMans

// character's position
let xPos
let yPos

let startScreenBool = true
let firstLevelBool = false
let secondLevelBool = false
let thirdLevelBool = false
let endScreenBool = false

let font




function preload(){
  character = loadImage('chrono.webp')
  firstBackground = loadImage('grassBackground.png')
  secondBackground = loadImage('cave.jpeg')
  thirdBackground = loadImage('lavaBackground.jpeg')
  endLevel = loadImage('victory.gif')
  kai = loadImage('kai.gif')
  kaiCenat = loadImage('kaiCenat.gif')
  victory = loadSound('Final Fantasy 7 Victory Fanfare.mp3.crdownload')
  font = loadFont('Pixeboy-z8XGD.ttf')
  goblin = loadImage('goblin.webp')
  skeleton = loadImage('skeleton.webp')
  bigMans = loadImage('bigMans.webp')
}

function setup(){
  //background setup
  createCanvas(windowWidth, windowHeight)
  imageMode(CENTER)

  xPos = 0
  yPos = windowHeight/2
}

function draw(){
  if(startScreenBool == true){
    startScreen()
  }
  if(firstLevelBool == true){
    firstLevel()
    characterMovement()
  }
  if(secondLevelBool == true){
    secondLevel()
    characterMovement()
  }
  if(thirdLevelBool == true){
    thirdLevel()
    characterMovement()
  }
  if(endScreenBool == true){
    endScreen()
  }







}
function firstLevel(){
  image(firstBackground, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
  image(character, xPos, yPos, 50, 50)
  if(xPos >= windowWidth){
    startScreenBool = false
    firstLevelBool = false
    secondLevelBool = true
    thirdLevelBool= false
    xPos = 0
  }
}

function secondLevel(){
  createCanvas(windowWidth, windowHeight)
  background(0)

  imageMode(CENTER)
  image(secondBackground, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
  image(character, xPos, yPos, 50, 50)
  if(xPos >= windowWidth){
    startScreenBool = false
    firstLevelBool = false
    secondLevelBool = false
    thirdLevelBool= true
    xPos = 0}
}

function thirdLevel(){

  image(thirdBackground, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
  image(character, xPos, yPos, 50, 50)
  if(xPos >= windowWidth){
    startScreenBool = false
    firstLevelBool = false
    secondLevelBool = false
    thirdLevelBool= false
    endScreenBool = true}
}

function endScreen(){
  background(0)
  image(endLevel, windowWidth/2, windowHeight/2, windowWidth/2, windowHeight/2)
  image(kaiCenat, 250, windowHeight/2, 350, 350)
  image(kai, 1200, windowHeight/2, 350, 350)
  //victory.play()
}

function characterMovement(){
  if(keyIsDown(UP_ARROW)){
    yPos -= 5

  }
  if(keyIsDown(LEFT_ARROW)){
    xPos -= 5

  }
  if(keyIsDown(DOWN_ARROW)){
    yPos += 5

  }
  if(keyIsDown(RIGHT_ARROW)){
    xPos += 5

  }

}
function startScreen(){
  background(0)
  textFont(font)
  fill(255)
  textAlign(CENTER)
  textSize(windowWidth/4)
  text('start', windowWidth/2, 300)
  textSize(50)
  text('Press X', windowWidth/2, 500)

  if(keyIsPressed === true){
    startScreenBool = false
    firstLevelBool = true
    secondLevelBool = false
    thirdLevelBool= false
  }
}



function windowResized(){
  resizeCanvas(windowWidth, windowHeight)}
