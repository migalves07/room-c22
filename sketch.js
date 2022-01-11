const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player,player2, playerBase;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  player2image = loadImage("./assets/playerArcher.png");

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  //criar corpo da base do jogador
  var options = {
    isStatic: true
  };

 
  //criar corpo do jogador
  playerBase = Bodies.rectangle(200,350,180,150,options);
  World.add(world,playerBase);
  
  player = Bodies.rectangle(250,playerBase.position.y - 160,50,180,options);
  World.add(world,player);

 player2 = Bodies.rectangle(245,250,100,50,options);
 World.add(world,player2);


}

function draw() {
  background(backgroundImg);
  image(backgroundImg, 0, 0, width, height);
  
  Engine.update(engine);
  image(baseimage,playerBase.position.x,playerBase.position.y,180,150);
  image(playerimage,player.position.x,player.position.y,50,180);
  image(player2image,player2.position.x,player2.position.y,100,50);
  
  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}
