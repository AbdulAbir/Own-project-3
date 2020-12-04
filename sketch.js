
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var SERVE = 2;
var PLAY = 1;
var END = 0;
var gameState = SERVE;

var Ninja,ninjaImg;

function preload()
{
	ninjaImg = loadImage("ninja.png");
	bg = loadImage("bg.png");
	bd = loadImage("Capture.PNG"); 
	bd1 = loadImage("Capture2.PNG");
	at = loadImage("ataker.png");
	st = loadImage("star.png");
}

function setup() {
	createCanvas(500, 700);

	gr = createSprite(500,680,1200,20);
	gr.visible = false;

	ninja = createSprite(250,600);
	ninja.addImage(ninjaImg);
	ninja.scale = 0.05

	

	star = createSprite(700,600);
	star.addImage(st);
	star.scale = 0.1

	bac = createSprite(10,450,20,2000);
	

	bac1 = createSprite(490,450,20,2000);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);

  if (gameState===SERVE) 
  {	
	  fill("#8B0000")
	  textSize(22)
	  text("Press Mouse On Ninja To Start Game",60,40);

	if (mousePressedOver(ninja)) {
		gameState = PLAY
	}
  }

  if (gameState===PLAY) {
	  
  }
  
  drawSprites();
 
}



