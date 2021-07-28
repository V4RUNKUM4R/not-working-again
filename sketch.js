var garden,rabbit;
var gardenImg,rabbitImg;
var apples;
var leaves;
var apple_Img;
var leaves_Img;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  apple_Img.loadImage("apple.png");
  leaves_Img.loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=World.mouseX;

  if(frameCount % 80 === 0){
  spawnApples();
  }

  drawSprites();
}

function spawnApples(){

  apples=createSprite(600,100,40,10);
  apples.addImage(apple_Img);
  apples.y = Math.round(random(10,390));
  apples.scale = 0.4;
  apples.velocityY = -3;
    
   
  //assigning lifetime to the variable
  apples.lifetime = 134
  
}
