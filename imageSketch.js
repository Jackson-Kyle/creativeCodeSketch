
let ballx = 60
let bally = 70
let balls = 200
let furby
let johnwall

function preload(){
  furby = loadImage('furby.png')
  johnwall = loadImage('johnwall.gif')


}

function setup(){
createCanvas(windowWidth, windowHeight)
background(140, 110, 50)
imageMode(CENTER)
}

function draw(){
noCursor()
  if (mouseX > windowWidth/2 && mouseY > windowHeight/2){
    background(200, 200, 150)

  }else{
    background(100, 150, 100)

  }
ellipse(ballx, bally, balls, balls)

image(furby, mouseX, mouseY, 100, 100)
if(mouseIsPressed == true){
  ballx = windowWidth/2
  bally = windowHeight/2
  balls = 50
  image(johnwall, windowWidth/2, windowHeight/2)
  text('John Wall', windowWidth/2, windowHeight/5)
}else{
  ballx = 100
  bally = 100
  balls = 200
}
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}
