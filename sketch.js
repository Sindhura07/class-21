var fixedRect, movingRect;
var a,b;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
   movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  a=createSprite(100,400,50,80);
  b=createSprite(500,400,50,80);
}

function draw() {
  background(0,0,0); 
  bounceOff(movingRect,fixedRect)
  a.x=World.mouseX
  
  if(isTouching(a,b)){
    a.shapeColor="blue"
    b.shapeColor="blue"
  }
    

  drawSprites();
}
