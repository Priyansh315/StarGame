var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var starImg;
var star2, star2Img;
var star3, star3Img;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");
	star2Img = loadImage("images/star.png");


}

function setup() {
	createCanvas(800, 750);

	fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	star2 = createSprite(300,200);
	star2.addAnimation("star2",star2Img);
	star2.scale = 0.3;

	//star.x = starbody.position.x
	//star.y = starbody.position.y

	star.velocityY = 1;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

	
	if (keyDown(LEFT_ARROW)) {
	  
	fairy.velocityX=-2;
	fairy.velocityY=0;
	}
	if (keyDown(RIGHT_ARROW)) {
	  
	fairy.velocityX=2;
	fairy.velocityY=0;
	}


drawSprites();

}

function keyPressed() {
	//write code here
}
