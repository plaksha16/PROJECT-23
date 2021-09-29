const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase;
var playerArcher
var board;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  boardImg=loadImage("assets/board.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);

  var options = {
    isStatic: true
  };

  playerBase = Bodies.rectangle(200, 350, 180, 150, options);
  World.add(world, playerBase);

  player = Bodies.rectangle(250, playerBase.position.y - 160, 50, 180, options);
  World.add(world,player)

 playerArcher=Bodies.rectangle(260,160,10,10)
 World.add(world,playerArcher)

playerArrow=Bodies.rectangle()
World.add(world,playerArrow)

board=Bodies.rectangle(0,0,400,200,options)
World.add(world,board)

playerArcher=new PlayerArcher(260,160,10,10);
playerArrow=new PlayerArrow(160,200,30,10)
}

function draw() {
  background(backgroundImg)

  Engine.update(engine);
  image(baseimage,playerBase.position.x,playerBase.position.y,180,150)
  image(playerimage,playerBase.position.x,player.position.y,50,180)
   image(boardImg,board.position.x,board.position.y,20,40)
 
    // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
  playerArcher.display()
  playerArrow.display()
}




