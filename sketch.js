var ball;
var ground;
var side1Sprite,side2Sprite,side3Sprite;



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
  
	engine = Engine.create();
	world = engine.world;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor='white'

	side1Sprite=createSprite(620,650,150,20);
	side1Sprite.shapeColor='yellow'
	side2Sprite=createSprite(550,610,20,95);
	side2Sprite.shapeColor='yellow'
	side3Sprite=createSprite(700,610,20,95);
	side3Sprite.shapeColor='yellow'



	//Create the Bodies Here.

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
    var ball_option={
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2
	}


	ball=Bodies.circle(150,630,20,ball_option)
    World.add(world,ball)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
  
keyPressed();

  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})
	}
}



