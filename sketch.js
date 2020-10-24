const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5
var pig1,pig2
var log1,log2,log3,log4
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,385,1200,20)

    box1 = new Box(700,350,50,50);
    box2 = new Box(900,350,50,50);
    pig1 = new Pig(800,350)
   log1 = new Log(800,300,300,PI/2)

   box3 = new Box(700,280,50,50);
    box4 = new Box(900,280,50,50);
    pig2 = new Pig(800,280)
   log2 = new Log(800,230,300,PI/2)

   box5 = new Box(800,210,50,50)
   log4 = new Log(780,230,100,PI/7)
   log5 = new Log(870,200,100,-PI/7)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log4.display();
    log5.display();
}