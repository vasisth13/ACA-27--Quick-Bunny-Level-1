
var player;
var carrot;


function setup() {
createCanvas(600,600);


player = createSprite(40,550,15,15); 
carrot = createSprite(560,40,30,30);
obs1 = createSprite(80,280,90,20);
obs2 = createSprite(10,330,90,20);
obs3 = createSprite(160,330,90,20);
obs4 = createSprite(310,330,90,20);
obs5 = createSprite(460,330,90,20);
obs6 = createSprite(610,330,90,20);
obs7 = createSprite(230,280,90,20);
obs8 = createSprite(380,280,90,20);
obs9 = createSprite(530,280,90,20);
carrot.shapeColor = "orange"
obs1.shapeColor = "red"
obs2.shapeColor = "red"
obs3.shapeColor = "red"
obs4.shapeColor = "red"
obs5.shapeColor = "red"
obs6.shapeColor = "red"
obs7.shapeColor = "red"
obs8.shapeColor = "red"
obs9.shapeColor = "red"
}

function draw() {
background("green");  



if(keyDown("up")){
  player.y=player.y-3;
}
if(keyDown("down")){
  player.y=player.y+3;
}
if(keyDown("left")){
  player.x=player.x-3;
}
if(keyDown("right")){
  player.x=player.x+3;
}
if(player.isTouching(carrot)){
  text("YOU WIN",200,200);
}
if(player.isTouching(obs1)){
  player.x=30
  player.y=500
  text("YOU LOSE");
}
if(player.isTouching(obs2)){
  player.x=30
  player.y=500
  text("YOU LOSE");
}
if(player.isTouching(obs3)){
  player.x=30
  player.y=500
  text("YOU LOSE");
}
if(player.isTouching(obs4)){
  player.x=30
  player.y=500
  text("YOU LOSE");
}
if(player.isTouching(obs5)){
  player.x=30
  player.y=500
  text("YOU LOSE");
}
if(player.isTouching(obs6)){
  player.x=30
  player.y=500
  text("YOU LOSE");
}
if(player.isTouching(obs7)){
  player.x=30
  player.y=500
  text("YOU LOSE");
}
if(player.isTouching(obs8)){
  player.x=30
  player.y=500
  text("YOU LOSE");
}
if(player.isTouching(obs9)){
  player.x=30
  player.y=500
  text("YOU LOSE");
}
  drawSprites();
}



