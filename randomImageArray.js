
let imgs = []

let randomButton

let canvas

let namesArray = [
  'jon',
  'emily',
  'bob',
  'jessica',
  'andrea'
]

let name = 0
let randImage = 0

function preload(){
  for(i=0; i>3; i++){
    imgs[i] = loadImage(i + '.jpg')
  }
}


function setup(){
  canvas = createCanvas(windowWidth, windowHeight)
  canvas.style('z-index', '-1')
  canvas.position(0,0)
  randomButton = createButton('Random Image And Name')

  randomButton.mousePressed(randImageName)

  imageMode(CENTER)

}

function randImageName(){
  randImage = random(imgs.length)
  name = int(random(namesArray.length))
}

function draw(){
background(255)
image(imgs[randImage], windowWidth/2, windowHeight/2)
textSize(40)
fill(100, 200, 79)
text(namesArray[name], windowWidth/2, windowHeight/2)

}
