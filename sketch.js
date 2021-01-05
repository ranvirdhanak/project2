const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var polygon;
var ground,stand1,stand2;
var ball;
var slingshot;

var score = 0;

function preload(){

polygon = loadImage("polygon.png");

}



function setup(){
  var canvas = createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;

ground = new Ground(450,390,900,20)

stand1 = new Stand(390,300,150,10);
stand2 = new Stand(700,200,150,10);

block1 = new Block(440,275,50,50);
block2 = new Block(340,275,50,50);
block3 = new Block(650,170,50,50);
block4 = new Block(750,180,50,50);


 ball = Bodies.circle(50,200,20);
World.add(world,ball);

slingshot = new Slingshot(this.ball,{x: 100,y: 200});

}

function draw(){
    background("black");    
    text("Score:  " + score,750,40)
    Engine.update(engine);

ground.display();
stand1.display();
stand2.display();
block1.display();
block2.display();
block3.display();
block4.display();


block1.score();
block2.score();
block3.score();
block4.score();


imageMode(CENTER);
image(polygon,ball.position.x,ball.position.y,40,40);

slingshot.display();

}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})

}

function mouseReleased(){
  slingshot.fly()

}

function keyPressed(){

if(keyCode === 32){

slingshot.attach(this.ball);

}



}