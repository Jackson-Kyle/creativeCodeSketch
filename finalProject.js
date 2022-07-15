//moveable character
let character
let king

//levels
let castle
let firstBackground
let secondBackground
let thirdBackground
let attack

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
let transition
//enemies
let bigHut
let hut
let goblin
let skeleton
let bigMans
let sword
let miner
let skeleton2

// character's position
let xPos
let yPos

// party members
let goblinXPos
let goblinYPos

let goblinNoBool = false
let goblinYesBool = false

let skeletonXPos
let skeletonYPos

let skeletonNoBool = false
let skeletonYesBool = false



let startScreenBool = true
castleBool = false
let firstLevelBool = false
let secondLevelBool = false
let thirdLevelBool = false
let endScreenBool = false
//let endMusicBool = false
let endTransitionBool = false
let goblinTransitionBool = false
let skeletonTransitionBool = false
let demonTransitionBool = false
let font

let timerValue = 1




function preload(){
  character = loadImage('chrono.webp')
  king = loadImage('king.png')
  castle = loadImage('castle.jpeg')
  castleTheme = loadSound('CastleMusic.mp3')
  firstBackground = loadImage('grassBackground.png')
  firstMusic = loadSound('forest.mp3')
  secondBackground = loadImage('cave.jpeg')
  secondMusic = loadSound('zelda.mp3')
  thirdBackground = loadImage('lavaBackground.jpeg')
  thirdMusic = loadSound('J-E-N-O-V-A.mp3')
  endLevel = loadImage('victory.gif')
  kai = loadImage('kaiCenat.gif')
  kaiCenat = loadImage('demonSmoke.gif')
  victory = loadSound('keef.mp3')
  font = loadFont('Pixeboy-z8XGD.ttf')
  bigHut = loadImage('bigHut.png')
  hut = loadImage('hut.png')
  goblin = loadImage('goblin.webp')
  skeleton = loadImage('skeleton.webp')
  bigMans = loadImage('bigMans.webp')
  sword = loadImage('sword.webp')
  attack = loadImage('cronoAttack.gif')
  miner = loadImage('miner.gif')
  skeleton2 = loadImage('skeleton2.png')
  transition = loadSound('majora.mp3')
}

function setup(){
  //background setup
  createCanvas(windowWidth, windowHeight)
  imageMode(CENTER)

  xPos = windowWidth/2
  yPos = windowHeight - 50

  goblinXPos= windowWidth/2
  goblinYPos = windowHeight/2 +70

  skeletonXPos = windowWidth/2
  skeletonYPos = windowHeight/2

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
  if(goblinTransitionBool == true){
    goblinTransition()

  }
  if(firstLevelBool == true){
    firstLevel()
    characterMovement()
    audioToggle2()



  }
  if(goblinNoBool == true){
    goblinNo()
  }
  if(goblinYesBool== true){
    goblinYes()
  }
  if(skeletonTransitionBool == true){

    skeletonTransition()
  }
  if(secondLevelBool == true){
    secondLevel()
    characterMovement()
    audioToggle3()

  }
  if(skeletonNoBool == true){
    skeletonNo()
  }
  if(skeletonYesBool== true){
    skeletonYes()
  }
  if(demonTransitionBool == true){

    demonTransition()
  }
  if(thirdLevelBool == true){
    thirdLevel()
    characterMovement()
    audioToggle5()

  }
  if(endTransitionBool == true){
    endTransition()
  }
  if(endScreenBool == true){
    endScreen()
    audioToggle()
    //if(endMusicBool == true){
    //    victoryMusic()
    }
  }

function firstLevel(){
  if(transition.isPlaying()){
    transition.stop()}
  if(castleTheme.isPlaying()){
    castleTheme.stop()}
    if(secondMusic.isPlaying()){
      secondMusic.stop()}
  image(firstBackground, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
  image(character, xPos, yPos, 50, 50)
  for(let i = 0; i < 4; i++){
    image(hut, 200 * i, 200 * i, 120, 120)
  }
    for(let i = 0; i < 4; i++){
      image(goblin, 200 * i, 200 * i, 50, 50)
    }
      image(bigHut, windowWidth/2, windowHeight/2, 200, 200)
      image(goblin, goblinXPos, goblinYPos, 75, 75)
      image(hut, windowWidth -250, windowHeight-200, 150, 150)
      image(hut, windowWidth -250, windowHeight/2 - 200, 150, 150)
      image(hut, windowWidth/2, windowHeight/2 - 300, 150, 150)
      image(hut, 150, windowHeight - 200, 100, 100)
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
      if(xPos>= 520 &&  yPos <= 650 && yPos >= 520 && xPos <= 650){
        textBox()
        image(goblin, windowWidth/2 - 600, 55, 40, 40)
        image(goblin, windowWidth/2 + 600, 55, 40, 40)
        text('goblin: Please kill the demon lord, he is such an asshole', windowWidth/2, 55)
      }
      if(xPos>= windowWidth/2 -80 &&  yPos <= windowHeight/2 +80 && yPos >= windowHeight/2 - 80 && xPos <= windowWidth/2 +80){
        textBox()
        image(goblin, windowWidth/2 - 600, 55, 40, 40)
        image(goblin, windowWidth/2 + 600, 55, 40, 40)
        text('goblin chief: Let me join your party to defeat the demon lord', windowWidth/2, 55)
        text('[Y] or [N]', windowWidth/2, 95)
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
    skeletonTransitionBool = true
    secondLevelBool = false
    thirdLevelBool= false
    xPos = 0
  }

}

function goblinNo(){

  textBox()
  image(goblin, windowWidth/2 - 600, 55, 40, 40)
  image(goblin, windowWidth/2 + 600, 55, 40, 40)
  text('goblin chief: i wont take no for an answer', windowWidth/2, 55)
  goblinXPos = xPos - 50
  goblinYPos = yPos + 20
}

function goblinYes(){
  textBox()
  image(goblin, windowWidth/2 - 600, 55, 40, 40)
  image(goblin, windowWidth/2 + 600, 55, 40, 40)
  text('goblin chief: thats what i like to hear', windowWidth/2, 55)
  goblinXPos = xPos - 50
  goblinYPos = yPos +20
}

function keyPressed(){
  if(firstLevelBool == true){
  if(key === 'n'){
    goblinNoBool = true
  }
}

  if(firstLevelBool == true){
  if(key === 'y'){
    goblinYesBool = true
  }
}
if(secondLevelBool == true){
if(key === '1'){
  skeletonNoBool = true
}
}
if(secondLevelBool == true){
if(key === '2'){
  skeletonYesBool = true
}
}
}




function secondLevel(){
  createCanvas(windowWidth, windowHeight)
  background(0)
  if(firstMusic.isPlaying()){
    firstMusic.stop()}
    if(transition.isPlaying()){
      transition.stop()}

  imageMode(CENTER)
  image(secondBackground, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
  image(character, xPos, yPos, 50, 50)
  image(goblin, goblinXPos, goblinYPos, 75, 75)
  image(skeleton, skeletonXPos, skeletonYPos, 150, 150)
  image(miner, windowWidth - 150, windowHeight/2 - 100, 65, 65)
  image(skeleton2, windowWidth - 200, windowHeight - 200, 120, 120)
  if(xPos >= windowWidth){
    startScreenBool = false
    firstLevelBool = false
    secondLevelBool = false
    demonTransitionBool = true
    thirdLevelBool= false
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
        text('skeleton: i dont get paid enough to fight you', windowWidth/2, 55)
      }
      if(xPos>= windowWidth/2 -80 &&  yPos <= windowHeight/2 +80 && yPos >= windowHeight/2 - 80 && xPos <= windowWidth/2 +80){
        textBox()
        image(skeleton, windowWidth/2 - 600, 55, 40, 40)
        image(skeleton, windowWidth/2 + 600, 55, 40, 40)
        text('Nathaniel B: Let me join your party to defeat the demon lord', windowWidth/2, 55)
        text('[1] or [2]', windowWidth/2, 95)
      }
      if(thirdMusic.isPlaying()){
        thirdMusic.stop()}

}
function skeletonNo(){

  textBox()
  image(skeleton, windowWidth/2 - 600, 55, 40, 40)
  image(skeleton, windowWidth/2 + 600, 55, 40, 40)
  text('Nathaniel B: betttttt', windowWidth/2, 55)
  skeletonXPos = xPos - 50
  skeletonYPos = yPos - 70
}

function skeletonYes(){
  textBox()
  image(skeleton, windowWidth/2 - 600, 55, 40, 40)
  image(skeleton, windowWidth/2 + 600, 55, 40, 40)
  text('Nathaniel B: my guy!', windowWidth/2, 55)
  skeletonXPos = xPos - 50
  skeletonYPos = yPos - 70
}

function thirdLevel(){
  if(transition.isPlaying()){
    transition.stop()}
  if(secondMusic.isPlaying()){
    secondMusic.stop()}
  image(thirdBackground, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
  image(character, xPos, yPos, 50, 50)
  image(goblin, goblinXPos, goblinYPos, 75, 75)
  image(skeleton, skeletonXPos, skeletonYPos, 150, 150)
  image(bigMans, 900, windowHeight/2, 400, 400)
  image(sword, windowWidth - 200, windowHeight/2, 100, 100)
  textBox()
  image(bigMans, windowWidth/2 - 600, 55, 60, 60)
  image(bigMans, windowWidth/2 + 600, 55, 60, 60)
  text('since you made it this far i will give you one free hit', windowWidth/2, 55)
  if(xPos >= windowWidth - 240 && xPos <= windowWidth -160 && yPos>= windowHeight/2 - 60 && yPos <= windowHeight/2 + 60){
    startScreenBool = false
    firstLevelBool = false
    secondLevelBool = false
    thirdLevelBool= false
    endTransitionBool = true
    endScreenBool = false}


}

function endTransition(){
  setInterval(timeIt4, 2400)
  image(attack, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
  if(timerValue == -3){
    endTransitionBool = false
    endScreenBool = true
  }
}
function goblinTransition(){

  setInterval(timeIt, 4500)
  if(castleTheme.isPlaying()){
    castleTheme.stop()}

  if(!transition.isPlaying()){
    transition.loop()}
  background(0)
  textSize(80)
  fill(255)
  text('goblin village', windowWidth/2, windowHeight/2)
  if(timerValue ==0){
    goblinTransitionBool = false
    firstLevelBool = true
    clearInterval(timeIt)
  }
}

function skeletonTransition(){
  setInterval(timeIt2, 4500)
  if(firstMusic.isPlaying()){
    firstMusic.stop()}
  if(!transition.isPlaying()){
    transition.loop()}
  background(0)
  textSize(80)
  fill(255)
  text('cave of skeletons', windowWidth/2, windowHeight/2)
  if(timerValue == -1){
    skeletonTransitionBool = false
    secondLevelBool = true
    clearInterval(timeIt)
  }
}
function demonTransition(){
    setInterval(timeIt3, 4500)
  if(secondMusic.isPlaying()){
    secondMusic.stop()}

  if(!transition.isPlaying()){
    transition.loop()}
  background(0)
  textSize(80)
  fill(255)
  text('Demon lords mountain', windowWidth/2, windowHeight/2)
  if(timerValue == -2){
    demonTransitionBool = false
    thirdLevelBool = true
    clearInterval(timeIt)
  }
}


function endScreen(){
  if(thirdMusic.isPlaying()){
    thirdMusic.stop()}
  background(0)
  image(endLevel, windowWidth/2, windowHeight/2, windowWidth/2, windowHeight/2)
  image(kaiCenat, 250, windowHeight/2, 350, 350)
  image(kai, 1150, windowHeight/2, 350, 350)
  fill(255)

  text('Congratulations', windowWidth/2, windowHeight/7)
  //victory.play()
  endMusicBool = true
    endMusicBool = false
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
    castleBool = true
    firstLevelBool = false
    secondLevelBool = false
    thirdLevelBool= false
  }
}
function castleScreen(){
  if(firstMusic.isPlaying()){
    firstMusic.stop()}
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
    goblinTransitionBool = true
    firstLevelBool = false
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

function audioToggle3(){
 if(!secondMusic.isPlaying()){
   secondMusic.loop()
  }
}
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

function timeIt(){

  if(timerValue > 0){
    timerValue--
  }
}
function timeIt2(){

  if(timerValue > -1){
    timerValue--
  }
}
function timeIt3(){

  if(timerValue > -2){
    timerValue--
  }
}
function timeIt4(){

  if(timerValue > -3){
    timerValue--
  }
}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight)}
