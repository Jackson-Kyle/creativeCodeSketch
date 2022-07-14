//moveable character
let character
let king

//levels
let castle
let firstBackground
let secondBackground
let thirdBackground

//final screen
let endLevel
let kai
let kaiCenat

// music
let victory
let firstMusic
let secondMusic
let thirdMusic
let castleTheme
//enemies
let hut
let goblin
let skeleton
let bigMans

// character's position
let xPos
let yPos

let startScreenBool = true
castleBool = false
let firstLevelBool = false
let secondLevelBool = false
let thirdLevelBool = false
let endScreenBool = false
//let endMusicBool = false
let font




function preload(){
  character = loadImage('chrono.webp')
  king = loadImage('king.png')
  castle = loadImage('castle.jpeg')
  castleTheme = loadSound('CastleMusic.mp3')
  firstBackground = loadImage('grassBackground.png')
  firstMusic = loadSound('forest.mp3')
  secondBackground = loadImage('cave.jpeg')
  //secondMusic = loadSound('Tyrano Lair.mp3')
  thirdBackground = loadImage('lavaBackground.jpeg')
  thirdMusic = loadSound('J-E-N-O-V-A.mp3')
  endLevel = loadImage('victory.gif')
  kai = loadImage('kai.gif')
  kaiCenat = loadImage('kaiCenat.gif')
  victory = loadSound('Final Fantasy 7 Victory Fanfare.mp3.crdownload')
  font = loadFont('Pixeboy-z8XGD.ttf')
  hut = loadImage('hut.png')
  goblin = loadImage('goblin.webp')
  skeleton = loadImage('skeleton.webp')
  bigMans = loadImage('bigMans.webp')
}

function setup(){
  //background setup
  createCanvas(windowWidth, windowHeight)
  imageMode(CENTER)

  xPos = windowWidth/2
  yPos = windowHeight - 50

}

function draw(){
  if(startScreenBool == true){
    startScreen()
    if(keyIsPressed){
    audioToggle4()}
  }
  if(castleBool == true){
    castleScreen()
    characterMovement()
  }
  if(firstLevelBool == true){
    firstLevel()
    characterMovement()
    audioToggle2()


  }
  if(secondLevelBool == true){
    secondLevel()
    characterMovement()
    //audioToggle3()
  }
  if(thirdLevelBool == true){
    thirdLevel()
    characterMovement()
    audioToggle5()
  }
  if(endScreenBool == true){
    endScreen()
    audioToggle()
    //if(endMusicBool == true){
    //    victoryMusic()
    }
  }

function firstLevel(){
  if(castleTheme.isPlaying()){
    castleTheme.stop()}
  image(firstBackground, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
  image(character, xPos, yPos, 50, 50)
  for(let i = 0; i < 4; i++){
    image(hut, 200 * i, 200 * i, 120, 120)
  }
    for(let i = 0; i < 4; i++){
      image(goblin, 200 * i, 200 * i, 50, 50)
    }
      image(hut, windowWidth/2, windowHeight/2, 120, 120)
      image(goblin, 1500, 800, 50, 50)
      if(xPos>= 120 && yPos <= 250 && yPos >= 120 && xPos <= 250){
        textBox()
        image(goblin, windowWidth/2 - 600, 55, 40, 40)
        image(goblin, windowWidth/2 + 600, 55, 40, 40)
        text('Goblin: *Random goblin noises*', windowWidth/2, 55)
      }
      if(xPos>= 320 && yPos <= 450 && yPos >= 320 && xPos <= 450){
        textBox()
        image(goblin, windowWidth/2 - 600, 55, 40, 40)
        image(goblin, windowWidth/2 + 600, 55, 40, 40)
        text('Goblin: I hate paying these demon taxes', windowWidth/2, 55)
      }
      if(xPos>= 520 &&  yPos <= 650 && yPos >= 520 && xPos <= 650){
        textBox()
        image(goblin, windowWidth/2 - 600, 55, 40, 40)
        image(goblin, windowWidth/2 + 600, 55, 40, 40)
        text('goblin: Please kill the demon lord, he is such an asshole', windowWidth/2, 55)
      }
      if(xPos < 0){
        startScreenBool = false
        castleBool = true
        firstLevelBool = false
        secondLevelBool = false
        thirdLevelBool= false
        xPos = windowWidth - 40
        if(firstMusic.isPlaying()){
          firstMusic.stop()}}

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
  if(firstMusic.isPlaying()){
    firstMusic.stop()}

  imageMode(CENTER)
  image(secondBackground, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
  image(character, xPos, yPos, 50, 50)
  if(xPos >= windowWidth){
    startScreenBool = false
    firstLevelBool = false
    secondLevelBool = false
    thirdLevelBool= true
    xPos = 0}
    if(xPos < 0){
      startScreenBool = false
      firstLevelBool = true
      secondLevelBool = false
      thirdLevelBool= false
      xPos = windowWidth - 40}
    for(let i = 0; i < 4; i++){
      image(skeleton, 200 * i, 200 * i, 100, 100)}
      if(xPos>= 120 && yPos <= 250 && yPos >= 120 && xPos <= 250){
        textBox()
        image(skeleton, windowWidth/2 - 600, 55, 40, 40)
        image(skeleton, windowWidth/2 + 600, 55, 40, 40)
        text('skeleton: the demon lord didnt let me leave this cave to see my child be born *starts crying*', windowWidth/2, 55)
      }
      if(xPos>= 320 && yPos <= 450 && yPos >= 320 && xPos <= 450){
        textBox()
        image(skeleton, windowWidth/2 - 600, 55, 40, 40)
        image(skeleton, windowWidth/2 + 600, 55, 40, 40)
        text('skeleton: the demon lord doesnt give us any healthcare', windowWidth/2, 55)
      }
      if(xPos>= 520 &&  yPos <= 650 && yPos >= 520 && xPos <= 650){
        textBox()
        image(skeleton, windowWidth/2 - 600, 55, 40, 40)
        image(skeleton, windowWidth/2 + 600, 55, 40, 40)
        text('skeleton: i get paid enough to fight you', windowWidth/2, 55)
      }
}

function thirdLevel(){

  image(thirdBackground, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
  image(character, xPos, yPos, 50, 50)
  image(bigMans, 900, windowHeight/2, 400, 400)
  if(xPos >= windowWidth){
    startScreenBool = false
    firstLevelBool = false
    secondLevelBool = false
    thirdLevelBool= false
    endScreenBool = true}
    if(xPos < 0){
      startScreenBool = false
      firstLevelBool = false
      secondLevelBool = true
      thirdLevelBool= false
      xPos = windowWidth - 40
      if(thirdMusic.isPlaying()){
        thirdMusic.stop()}
      }
}

function endScreen(){
  if(thirdMusic.isPlaying()){
    thirdMusic.stop()}
  background(0)
  image(endLevel, windowWidth/2, windowHeight/2, windowWidth/2, windowHeight/2)
  image(kaiCenat, 250, windowHeight/2, 350, 350)
  image(kai, 1150, windowHeight/2, 350, 350)
  //victory.play()
  endMusicBool = true
    endMusicBool = false
}
//function victoryMusic(){
//  victory.loop()
  //endMusicBool = false;
//}


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
    castleBool = true
    firstLevelBool = false
    secondLevelBool = false
    thirdLevelBool= false
  }
}
function castleScreen(){
  image(castle, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
  image(character, xPos, yPos, 50, 50)
  image(king, xPos - 70, yPos, 50, 50)
  textBox()
  image(king, windowWidth/2 - 600, 55, 40, 40)
  image(king, windowWidth/2 + 600, 55, 40, 40)
  text('King: Hero, you have to go defeat the tyrant demon lord and save our kingdom', windowWidth/2, 55)
  if(xPos >= windowWidth){
    startScreenBool = false
    castleBool = false
    firstLevelBool = true
    secondLevelBool = false
    thirdLevelBool= false
    endScreenBool = false
    xPos = 0}
}

function audioToggle(){
  if(!victory.isPlaying()){
    victory.loop()
  }
}

function audioToggle2(){
  if(!firstMusic.isPlaying()){
    firstMusic.loop()
  }
}

//function audioToggle3(){
//  if(!secondMusic.isPlaying()){
  //  secondMusic.loop()
//  }
//}
function audioToggle4(){
  if(!castleTheme.isPlaying()){
    castleTheme.loop()
  }
}

function audioToggle5(){
  if(!thirdMusic.isPlaying()){
    thirdMusic.loop()
}
}
function textBox(){
  stroke(0)
  fill(255)
  rectMode(CENTER)
  rect(windowWidth/2, 51, windowWidth - 200, 100, 20)
  fill(0)
  textAlign(CENTER)
  textSize(30)
}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight)}
