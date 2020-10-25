var rec1,rec2,rec3,rec4,rec5,rec6;
function setup() {
  createCanvas(800,400);
rec1=createSprite (100,100,50,50);
rec2=createSprite (200,200,100,100);
rec3=createSprite (300,100,90,90);
rec4=createSprite (100,100,100,100);
rec5=createSprite (400,200,100,100);
rec6=createSprite (50,50,100,100);
rec2.velocityX=4;
rec5.velocityX=-4;
}

function draw() {
  background(255,255,255); 
  rec1.x=mouseX;
  rec1.y=mouseY;
  isTouching(rec1,rec4);
  bounce(rec2,rec5);
  drawSprites();
}
