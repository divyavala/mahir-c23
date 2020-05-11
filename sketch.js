const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(30,50,20,300);
    box2 = new Box(50,100,20,100);
    box3 = new Box(70,150,20,100);
    box4 = new Box(100,100,20,200);
    box5 = new Box(120,150,20,250);
    box6 = new Box(150,100,20,300);
    box7 = new Box(170,150,20,250);
    ground = new Ground(600,height,1200,20);
    
}

function draw(){
      background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    ground.display();
}