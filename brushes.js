
let lineBrushBool = false
let squareBrushBool = false
let boolcircle = false


  function setup(){
  createCanvas(windowWidth, windowHeight)

  rectMode(CENTER)

  background(255)

  }

  function draw(){

    if(lineBrushBool == true){
      lineBrush()
    }
    if(squareBrushBool == true){
      squareBrush()
    }
if(boolcircle == true){
  circledraw()
}



  }

  function lineBrush(){
    if(mouseIsPressed){
      strokeWeight(4)
      stroke(random(255), random(255), random(255))
      line(pmouseX, pmouseY, mouseX, mouseY)
    }
  }

  function squareBrush(){
    if(mouseIsPressed){
      rect(mouseX, mouseY, 70, 70)
    }
  }

  function circledraw(){
    if(mouseIsPressed){
      fill(130, 99, 90)
      ellipse(mouseX, mouseY, 60, 60)
    }
  }

  function keyTyped(){

    if(key === 'q'){
      lineBrushBool = true
      squareBrushBool = false
      boolcircle = false
    }

    if(key === 'w'){
      lineBrushBool = false
      squareBrushBool = true
      boolcircle = false
    }

    if(key === 'a'){
      lineBrushBool = false
      squareBrushBool = false
      boolcircle = true

    }

    if(key === 's'){
      save('drawing.jpg')
    }
  }
