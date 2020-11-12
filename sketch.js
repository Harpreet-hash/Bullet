
var bullet, wal,speed,weight,damage,thickness;
function setup() {
  createCanvas(1600,400);
 
  speed=random(223,331)
  weight=random(30,52)
  thickness=random(22,83)

  bullet=createSprite(50,200,100,20);
  bullet.shapeColor="white"

  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor=rgb(80,80,80)

  bullet.velocityX=speed;
  damage=0.5*weight*speed*speed/(thickness*thickness*thickness)

 
  
console.log(damage)
}

function draw() {
  background(0,0,0);  
  if(hasCollided(bullet,wall)){

    bullet.velocityX=0;
    if(damage>10){
      bullet.shapeColor=rgb(255,0,0)
      
    }else {
      bullet.shapeColor=rgb(0,255,0)     
    }


  }  
  
  drawSprites();
}
function hasCollided(bullet,wall){
  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    return true;    
  }
  

}
  
  
  drawSprites();
}
