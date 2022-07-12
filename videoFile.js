let canvas

let playButton

let playing = false

let t100

function setup(){
  canvas = createCanvas(windowWidth, windowHeight)
  canvas.style('z-Index', '-1')
  background(0)
  t100 = createVideo(['T1000Reforming.mp4'])
  t100.position(200, 300)

  playButton = createButton('Play')
  playButton.position(10,35)
  playButton.mousePressed(toggleVid)
}


function toggleVid(){
  if(playing){
    t100.pause()
    playButton.html('play')
  }else{ t100.loop()
    playButton.html('pause')


  }
  playing = !playing
}

function draw(){
if(frameCount % 180 == 0){
  t100.time(random(t100.duration()))

}


}
