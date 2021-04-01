
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function preload()
{
	binImg=loadImage("distbin.png");
	
}


function setup() {
	createCanvas(800, 400);
  

	engine = Engine.create();
	world = engine.world;



  ground = new Ground(400,380,800,10);

  bin = createSprite(610,314,10,10);
  bin.addImage(binImg);
  bin.scale = 0.5;
  

  leftSide= new Dustbin(550, 315, 10, 120);
  bottom= new Dustbin(610, 365, 90, 20);
  rightSide= new Dustbin(670, 315, 10, 120);

  paper = new Paper(100, 100,10);
  rope = new Rope(paper.body,{x:200,y:100});  
  

}


function draw() {
 

  background("Red");

  Engine.update(engine);

  paper.display();
  rope.display();
  ground.display();
 

  leftSide.display();
  bottom.display();
  rightSide.display();
  bin.display();
  

  drawSprite();

}

function mouseDragged(){
  Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
   rope.fly();
}