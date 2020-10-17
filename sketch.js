const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies

var ourEngine, ourWorld;
var box1;
var box2;
var ground;
function setup() {
  createCanvas(400,400);
  ourEngine=Engine.create()
  ourWorld=ourEngine.world;
  
  box1=new Box(225,300,50,50);
  //console.log(object.position.x);
  
  box2= new Box(200,50,50,100);

  ground=new Ground(200,380,400,50)
}

function draw() {
  background("black");  
  Engine.update(ourEngine);
  box1.display();
  box2. display();
  ground.display()
  
}