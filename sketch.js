const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var backgroundImg;
var boatImg;
var boat;
var blower;
var options = {
  isStatic: true
}
function preload(){
  boatImg = loadImage("boat.png");
  backgroundImg = loadImage("background.png");
}

function setup() {
  createCanvas(1600,1000);

  engine = Engine.create();
  world = engine.world;

//create the blower html button image when pressed gives force to the boat
  blower = createImg("blower.png");
  blower.position(100,100);
  blower.mousePressed(okblahwhat);


  boat = Bodies.rectangle(100,500,100,100,options);
  World.add(world,boat);
}


function draw(){
  background("white");
  image(backgroundImg,0,0,1600,1000);
  Engine.update(engine);
  image(boatImg,boat.position.x,boat.position.y,100,100);
  console.log(boat.position.x)
}

function okblahwhat(){
  Matter.Body.applyForce(boat,{x:0,y:0},{x:10,y:0});
}
