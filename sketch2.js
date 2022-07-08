
let yeetkid

let boolyeet = false

function preload(){
  yeetkid = loadImage('yeetkid.gif')
}

function setup(){

createCanvas(windowWidth, windowHeight)
background(255)
}

function draw(){
  ;
  stroke(0)
  noFill()
  ellipse(201, 150, 100, 100)
  fill(0)
  strokeWeight(10)
  point(180, 150)
  point(222, 150)
  strokeWeight(3)
  line(170, 142, 190, 142)
  line(215, 142, 230, 142)
  strokeWeight(2)
  line(199,172, 191, 175)
  line(203, 172, 211, 175)
  strokeWeight(1)
  line(201, 160, 208, 165)
  line(208, 165, 201, 165)
  line( 191, 180, 211, 180)
  ellipse(201, 100, 150, 70)
  ellipse(201, 40, 100, 60)
  rect(155, 40, 91, 70)
  noFill()
  stroke(111, 77, 0)
  ellipse(222, 150, 15, 15)
  fill(0)
  triangle(196, 200, 206, 200, 201, 205)
  text('Click x', windowWidth/2, windowHeight/2)

  if(boolyeet == true){
    image(yeetkid, 600, 100, 300, 300)
  }


}


function keyTyped(){

  if(key === 'x'){
    boolyeet = true
  }

  }
