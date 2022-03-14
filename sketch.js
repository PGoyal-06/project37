var monkey,ground,obstaclesGroup,score,bg,bananaImage,obstacleImage,foodGroup;
var bgSprite, monkeySprite;


function preload(){
  
bg = loadImage("jungle.jpg");

monkey = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
bananaImage = loadImage("banana.png");
obstacleImage = loadImage("stone.png");  
  
}

function setup() {
  createCanvas(400, 400);
  
bgSprite = createSprite(200,200,400,20);
bgSprite.addImage(bg);  
bg.velocityX = -6;
bg.x = bg.width/2;
ground = createSprite(200,390,400,10);  
 //ground.visible = false;
  
monkeySprite = createSprite(50,340,20,20); 
monkeySprite.addAnimation("m",monkey); 
monkeySprite.scale = 0.1;  
foodGroup = new Group();
obstaclesGroup = new Group();
score = 0;
}

function draw() {
  background(220);
  
if(bg.x<0){
bg.x = bg.width/2;  
}
  
if(keyDown("space")&& monkeySprite.y>250){
  camera.position.x = displayWidth/2;
  camera.position.y = monkeySprite.y;
}    
monkeySprite.velocityY = monkeySprite.velocityY + 0.8;

monkeySprite.collide(ground);

console.log(monkeySprite.y);
  
Obstacles();  
  
food();  
if(foodGroup.isTouching(monkeySprite)){
 score = score+2;
 foodGroup.destroyEach();  
 }   
  
 switch(score){
   case 10 : monkeySprite.scale = 0.12;
              break;
   case 20 : monkeySprite.scale = 0.14;
              break;
   case 30 : monkeySprite.scale = 0.16;
              break;
   case 40 : monkeySprite.scale = 0.18;
              break;
       default : break;
       
}     

 if(obstaclesGroup.isTouching(monkeySprite)){
    monkeySprite.scale = 0.1; 
   }
  
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("score:"+score,300,50);
}
function food(){
if(frameCount%80===0){
var banana = createSprite(400,random(120,250),20,20);
banana.addImage(bananaImage);
banana.velocityX = -6;
foodGroup.add(banana);
banana.lifetime = 400/6;
banana.scale = 0.1;  
}  
}
function Obstacles(){
if(frameCount%70===0){
var Obstacle = createSprite(400,360,30,20)
Obstacle.velocityX = -6;
Obstacle.addImage(obstacleImage)  
Obstacle.scale = 0.2; 
 Obstacle.lifetime = 400/6;
 obstaclesGroup.add(Obstacle); 
}  
}