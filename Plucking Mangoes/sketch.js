
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, ground, boy, mango1, mango2, mango3, mango4, mango5, 
mango6, mango7, mango8;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(900, 435, 350, 500);
	ground = new Ground(width/2, height - 20, width, 40);
	boy = new Boy(200, 600, 125, 250);
	mango1 = new Mangoes(870, 375, 50, 50) 
	mango2 = new Mangoes(900, 350, 50, 50) 
	mango3 = new Mangoes(950, 390, 50, 50) 
	mango4 = new Mangoes(800, 390, 50, 50) 
	mango5 = new Mangoes(1025, 370, 50, 50) 
	mango6 = new Mangoes(950, 250, 50, 50) 
	mango7 = new Mangoes(960, 320, 50, 50) 
	mango8 = new Mangoes(850, 300, 50, 50) 
	stone = new Stone(150, 500, 70);
	launcher = new Launcher(stone.body, {x:150, y:500});
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  ground.display();
  tree.display();
  boy.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  stone.display();
  launcher.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
  detectCollision(stone, mango8);

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}
function mouseReleased(){
    launcher.fly();
}

function detectCollision(stone, mango){
mango1BodyPosition = mango.body.position
stoneBodyPosition = stone.body.position

var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mango1BodyPosition.x, mango1BodyPosition.y)
	if(distance <= mango.r + stone.r){
		Matter.Body.setStatic(mango.body, false)
	}
}

function keyPressed(){
	if(keyCode === 32) {
		//Matter.Body.setStatic(stone.body, false)
		Matter.Body.setPosition(stone.body, {x:150, y:500});
		launcher.attach(stone.body)
	}
}