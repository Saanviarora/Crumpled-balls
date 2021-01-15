var ball;
var ground;
var rect1, rect2, rect3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;
    Engine.run(engine);
	var options={
		isStatic:false, 
		restitution:0.3,
		friction:0.3,
		density:1.2
	}


	groundSprite=createSprite(200,390,1200,15)
	groundSprite.shapeColor="yellow";

	rect1= createSprite(650,380,200,10)
	rect1.shapeColor="white";
	rect2= createSprite(550,335,10,100)
	rect2.shapeColor="white";
	rect3= createSprite(750,335,10,100)
	rect3.shapeColor="white";


	ball= Bodies.circle (150,200,20,options);
	World.add(world,ball);

    ground= Bodies.rectangle(200,390,800,10,  { isStatic:true});
	World.add(world,ground);
}


function draw() {
	background(0)
	Engine.update(engine)
	ellipseMode(RADIUS);
    fill("fuchsia")
	
	
	ellipse(ball.position.x, ball.position.y,20,20)
	drawSprites()

}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position,{x:85,y:85});
	
	}   
}