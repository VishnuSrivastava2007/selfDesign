var player,playerImg,playerGun;
var bg;
var zombie,zombieImg;

function preload() {

  bg=loadImage("self design game haloween.jpg");
  playerImg=loadImage("images/sleepingshooter.png");
  playerGun=loadImage("images/shooter_3.png");
  zombieImg=loadImage("images/enimyPlayer2walk.jpg")
}

function setup() {

  createCanvas(windowWidth, windowHeight);

  player=createSprite(160,550,70,70);
  player.addImage(playerImg);
  player.scale=0.5

  zombie=createSprite(300,550,70,70);
  zombie.addImage(zombieImg);
  
}


function draw() {

  background(bg);

  if(keyDown("W")){

    player.y=player.y-10

  }

  if(keyDown("S")){
    player.y=player.y+10
  }
  if(keyDown("space")){
player.addImage(playerGun);

  }
  else if(keyWentUp("space")){
   player.addImage(playerImg)
  }

  drawSprites();

}
