
let x = []
let y = []

let furby

function preload(){
  furby = loadImage('furby.png')
}

function setup(){
  createCanvas(windowWidth, windowHeight)
  imageMode(CENTER)


}

function draw(){
background(0)
for(let i=0; i < x.length; i++){
  image(furby, x[i], y[i], 70, 70)
//  if(dist(mouseX, mouseY, x[i], y[i])< 30){
  //  x.splice(i, 1)
  //  x.splice(i, 1)
//  }
}

}
function mouseReleased(){
  x.push(mouseX)
  y.push(mouseY)
}

function keyPressed(){

  if(key === 'a'){
    x.splice(0, 1)
    x.splice(0, 1)
  }
}
