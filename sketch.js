
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var pillar,ground;

function setup() {
  var canvas = createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  pillar = new Pillars(350,200,50,100);
  pillar2 = new Pillars(50,200,50,100);
  pillar3 = new Pillars(350,300,50,100);
  pillar4 = new Pillars(50,300,50,100);
  pillar5 = new Pillars(350,50,100,20);
  pillar6 = new Pillars(50,50,100,20);
  pillar7 = new Pillars(200,200,250,150);
  pillar8 = new Pillars(310,40,20,20);
  pillar9 = new Pillars(350,40,20,20);
  pillar10 = new Pillars(390,40,20,20);
  pillar11 = new Pillars(10,40,20,20);
  pillar12 = new Pillars(50,40,20,20);
  pillar13 = new Pillars(90,40,20,20);
  pillar14 = new Pillars(200,100,150,100);
  pillar15 = new Pillars(200,30,200,20);
  pillar16 = new Pillars(175,20,20,20);
  pillar17 = new Pillars(145,20,20,20);
  pillar18 = new Pillars(115,20,20,20);
  pillar19 = new Pillars(205,20,20,20);
  pillar20 = new Pillars(235,20,20,20);
  pillar21 = new Pillars(265,20,20,20);
  pillar22 = new Pillars(295,20,20,20);

  ground = new Ground(200,390,400,20);
}

function draw() {
  background(0);  
  Engine.update(engine);

  pillar.display();
  pillar2.display();
  pillar3.display();
  pillar4.display();
  pillar5.display();
  pillar6.display();
  pillar7.display();
  pillar8.display();
  pillar9.display();
  pillar10.display();
  pillar11.display();
  pillar12.display();
  pillar13.display();
  pillar14.display();
  pillar15.display();
  pillar16.display();
  pillar17.display();
  pillar18.display();
  pillar19.display();
  pillar20.display();
  pillar21.display();
  pillar22.display();

  ground.display();

  
}