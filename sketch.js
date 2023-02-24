var box; 

function setup() {
  createCanvas(700,700);
  box = createSprite(350,350, 50, 50);
  box.shapeColor = "yellow";
}


function draw() 
{
  background("blue");
  if (keyIsDown(LEFT_ARROW)) {
    box.position.x = box.position.x - 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    box.position.x = box.position.x + 5;
  }
  if (keyIsDown(UP_ARROW)) {
    box.position.y = box.position.y - 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    box.position.y = box.position.y + 5;
  }
  
  drawSprites();
}




