
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground,invisibleground;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 monkey=createSprite(80,315,20,20)
  monkey.addAnimation("monkey running",monkey_running); 
 monkey.scale=0.1;

   ground = createSprite(700,350,600,20);
  ground.x = ground.width /2;
  
  invisibleground =createSprite(200,350,400,20);
  invisibleground.visible=false;
  
  FoodGroup = createGroup();
  obstacleGroup=createGroup();
  
  score=0;
  
 // banana.addImage(bananaImage);
  //obstacle.addImage(obstacleImage);
}


function draw() {
  createCanvas(600,400);
background("green");
ground.velocityX=-4;
  
  score=score+Math.round(getFrameRate()/30)
  
  stroke("white");
  fill("white");
  textSize(20);
  text("survivalTime: " + score,260,50);
  
 // invisibleground.velocityX=-4;
   if (ground.x < 300){
      ground.x = ground.width/2;
     //ground.x=300;
    }
  // console.log(ground.x) 
monkey.collide(invisibleground);
  
  if(keyDown("space") && monkey.y>= 200) 
    {
    monkey.velocityY=-10;  
    }
  monkey.velocityY=monkey.velocityY+0.8;
  
  food();
  spawnobstacles();
drawSprites();  
}
function food()
{
  if(frameCount%80===0)
  {
    banana=createSprite(600,Math.round(random(100,150)),20,20)
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-4;
    banana.lifetime=160;
    FoodGroup.add(banana);
  }
  }

function spawnobstacles()
{
  if(frameCount%300===0)
    {
     obstacle=createSprite(300,325,20,20);
      obstacle.addImage(obstacleImage);
      obstacle.scale=0.1;
      obstacle.velocityX=-4;
      obstacle.lifetime=160;
      obstacleGroup.add(obstacle);
    }
}





