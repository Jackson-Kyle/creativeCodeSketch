let furby
let johnwall

function preload(){
  furby = loadImage('furby.png')
  johnwall = loadImage('johnwall.gif')
}
function setup(){
createCanvas(windowWidth, windowHeight)

background(90, 120, 76)

for(let i=0; i<windowWidth; i = i+10) {
  line(i, 0, i, windowHeight)
  line(0, i, windowWidth, i)
}

ellipse(100, 100, 50, 50)
for(let i = 0; i < 10; i++){
  image(johnwall, random(windowWidth), random(windowHeight), 120, 120)
}
}



function draw(){

}
