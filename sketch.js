var Car,Wall;
var speed,weight,deformation;

function setup() {
  createCanvas(1600,400);

  speed = random(50,70);
  weight = random(400,1500);

  Car = createSprite(50,200,50,50);
  Car.shapeColor = "blue";
  Car.velocityX = speed;
  
  Wall = createSprite(1500,200,60,height/2);  
  Wall.shapeColor = "red";
}

function draw() {
  background(225); 

   deformation = 0.5*weight*speed*speed/22500;

   if(Wall.x - Car.x <= Wall.width/2 + Car.width/2) {
     Car.velocityX = 0;

     if(deformation < 100) {
      Car.shapeColor = "green";
      Car.velocityX = 0;
     }
     if(deformation > 100 && deformation < 180) {
      Car.shapeColor = "yellow";
      Car.velocityX = 0;
     }
     if(deformation > 180) {
      Car.shapeColor = "red";
      Car.velocityX = 0;
     }
   }
  drawSprites();
}