ybird = 300
pipes = []
gravity = 0
score = 0
playing = true

function setup() {
  createCanvas(400, 600);
  for (i = 0; i<3; i++){
    pipes.push({
      h : random(height/2)+height/4,
      x : width*1.5 + i * width/1.8
    })
  }
}

function draw() {
  if (playing){

     background(220);

    for(i=0; i<pipes.length; i++){
      rect(pipes[i].x, pipes[i].h+height/8, 60, 500)
      rect(pipes[i].x, pipes[i].h-height/8, 60, -500)
      pipes[i].x -= 3
      if(pipes[i].x < width/4+10 && pipes[i].x+80>=width/4-10
        &&
        (pipes[i].h-height/8>ybird || pipes[i].h+height/8<=ybird)
        ||
        (ybird<0 || ybird>height)){
        playing = false
      }
    }
    ellipse(width/4,ybird, 40)
    ybird += gravity
    gravity += 0.3
    if (pipes[0].x< -60){
      pipes.push({
        h : random(height/2)+height/4,
        x : pipes[pipes.length-1].x + width/1.8
      })
      score+=1
      pipes.splice(0,1)
    }
    textSize(20)
  	text(score, 20, 30)
    textAlign(CENTER)
  }else{
		background(255,0,0)
    for(i = 0; i<pipes.length; i++){
      rect(pipes[i].x, pipes[i].h+height/8, 60, 500)
      rect(pipes[i].x, pipes[i].h-height/8, 60, -500)
    }
    ellipse(width/4,ybird, 40)
    textSize(20)
  	text(score, 20, 30)
    textAlign(CENTER)
    textSize(height/10)
    text('RETRY', width/2, height/2)

  }
}

function mouseClicked(){
  if (playing) gravity = -5
  else {
  	playing = true
    ybird= 300
    pipes = []
    gravity = 0
    score = 0
    setup()
  }
}
