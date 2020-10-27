
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score
var survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,400);
  
  
  monkey = createSprite(80,310,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,900,20);
  ground.veloctyX=-4;
  ground.x = ground.width /2;
 
  score=0;
  
  survivalTime=0;
  
  obstacleGroup = new Group();
  
  foodGroup = new Group();
  
}


function draw() {
  background("white");
  
  stroke("white");
  textSize=(20);
  fill("white");
  text("SCORE :  "+ score ,500,50)
  
  stroke("black");
  textSize=(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survivalTime:  "+ survivalTime,100,50);
  
  monkey.collide(ground);
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    if(keyDown("space")&& monkey.y >= 300) {
        monkey.velocityY = -18;
        
    }
    
    monkey.velocityY = monkey.velocityY + 1.0
  
  if(obstacleGroup.isTouching(monkey)){
    ground.velocityX=0;
    monkey.velocityY=0;
    obstacleGroup.setVelocityXEach(0);
    foodGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1);
    foodGroup.setLifetimeEach(-1);
  }
 
food();
obstaclerock ();
drawSprites();  
}

function obstaclerock () {
  //write code here to spawn the clouds
  if (frameCount % 300 === 0) {
    var obstacle= createSprite(800,320,10,40);
    //obstacle.y = Math.round(random(500,300));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.15;
    obstacle.velocityX = -3;
  
    obstacle.lifetime = 300;
    
    obstacleGroup.add(obstacle);
  }
}

function food () {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var banana= createSprite(130,370,10,40);
    banana.y = Math.round(random(160,300));
    banana.addImage(bananaImage);
    banana.scale = 0.100;
    banana.velocityX = -3;
  
    banana.lifetime = 250;
    
    foodGroup.add(banana);
  }
}


