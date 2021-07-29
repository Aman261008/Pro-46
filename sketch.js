
var background1;
var bg;
var jet,jet1;
var obstacles1,obstacles1Img,obstacles2,obstacles2Img,obstacles3,obstacles3Img,obstacles4,obstacles4Img;

function preload(){
bg=loadImage("images/bg2.jpg");
jet1=loadImage("images/fj.gif");
obstacles1Img=loadImage("images/comet.png");
obstacles2Img=loadImage("images/ufo.png");
obstacles3Img=loadImage("images/alien.png");
}

function setup(){
createCanvas(displayWidth,displayHeight);
background1=createSprite(displayWidth,displayHeight);
background1.addImage(bg);

background1.scale=5;

jet =createSprite(displayWidth/2.5,displayHeight/1.1,50,50);
jet.addImage(jet1);
jet.scale=0.2;
}

function draw(){
    background(255);  

    if(keyIsDown(LEFT_ARROW)){
        jet.x=jet.x-10;
    }
    if(keyIsDown(RIGHT_ARROW)){
        jet.x=jet.x+10;
    }
spawnComets();
spawnUFO();  
spawnAlien();
drawSprites();
}
function spawnAlien(){
    if(frameCount%60===0){
        obstacles3=createSprite(random(0,displayWidth),displayHeight/4,50,50);
        obstacles3.addImage(obstacles3Img);
        obstacles3.scale=0.2;
        obstacles3.velocityY=4;  
    }
}
function spawnUFO(){
    if(frameCount%120===0){
        obstacles2=createSprite(random(0,displayWidth),displayHeight/4,50,50);
        obstacles2.addImage(obstacles2Img);
        obstacles2.scale=0.2;
        obstacles2.velocityY=4;  
    }
}
function spawnComets(){
 
    if(frameCount%60===0){
      obstacles1=createSprite(random(0,displayWidth),displayHeight/4,50,50);
      obstacles1.addImage(obstacles1Img);
      obstacles1.scale=0.2;
      obstacles1.velocityY=4;  
  }  
}