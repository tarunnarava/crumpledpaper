
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground;
var line1,line2,line3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ball=new Ball(100,300,10);
 
ground=new Ground(width/2,400,width,10);

line1=new Line(850,325,20,150);
//line1.shapeColor=color("red");
line2=new Line(1177,325,20,150);
//line2.shapeColor=color("red");
line3=new Line(1009,388,325,20);
//line3.shapeColor=color("red");



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
ball.display();
ground.display();

line1.display();
line2.display();
line3.display();

  drawSprites();
 
}



function keyPressed()
{
	if (keyCode===UP_ARROW)
	{
		Matter.Body.applyForce(ball.body,ball.body.position,{x:20,y:-20});
	}
}