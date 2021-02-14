const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 

var ground1,ground2,ground3,ground4,ground5,ground6,ground7,ground8,ground9,ground10,ground11;
var ground12,ground13,ground14,ground15;

var monster1,monster2,monster3,monster4,monster5,monster6,monster7,monster8,monster9,monster11
var monster12,monster13,monster14,monster15;

var engine,world;
var slayer,slayerimg;
var Arrow,Arrowimg;
var ArrowGrp;

function preload(){
slayerimg = loadImage("Slayer.png");
Arrowimg = loadImage("Arrow.jpg")

}

function setup(){
    createCanvas(1300,675);

    engine = Engine.create();
    world = engine.world;
     
    ArrowGrp = new Group();

    ground1 = new Ground(660,162,130,15);
    ground2 = new Ground(900,365,130,15);
    ground3 = new Ground(1005,500,130,15);
    ground4 = new Ground(550,450,130,15);
    ground5 = new Ground(622,654,130,15);
    ground6 = new Ground(335,552,130,15);
    ground7 = new Ground(1119,384,130,15);
    
    ground9 = new Ground(1099,112,130,15);
    ground11 = new Ground(1111,234,130,15);
    ground12 = new Ground(500,50,130,15);
    ground13 = new Ground(900,200,130,15);
    ground14 = new Ground(700,300,130,15);
    ground15 = new Ground(650,400,130,15);

    ground10 = new Ground(100,300,130,15);
    ground8 = new Ground(104,633,130,15);

    monster1 = new Monster(620,160,50,50);
    monster2 = new Monster(890,362,50,50);
    monster3 = new Monster(995,493,50,50);
    monster4 = new Monster(515,443,50,50);
    monster5 = new Monster(615,351,50,50);
    monster6 = new Monster(330,548,50,50);
    monster7 = new Monster(1114,380,50,50);
    monster8 = new Monster(990,430,50,50);
    monster9 = new Monster(1095,110,50,50);
    monster11 = new Monster(1109,230,50,50);
    monster12 = new Monster(495,45,50,50);
    monster13 = new Monster(895,195,50,50);
    monster14 = new Monster(695,295,50,50);
    monster15 = new Monster(645,395,50,50);

    var options={
        isStatic: false,
        density: 1,
        restitution: 0.4
    }
     rectMode(CENTER)
     slayer = Bodies.rectangle(104,600,180,40,options);
     World.add(world,slayer);
     fill("red");

}
 function draw(){
     background(163,73,164);
     Engine.update(engine);
     
     console.log(slayer.position.x)
     

     ground1.display();
     ground2.display();
     ground3.display();
     ground4.display();
     ground5.display();
     ground6.display();
     ground7.display();
     ground8.display();
     ground9.display();
     ground11.display();
     ground12.display();
     ground13.display();
     ground14.display();
     ground15.display();

     ground10.display();

     monster1.display();
     monster2.display();
     monster3.display();
     monster4.display();
     monster5.display();
     monster6.display();
     monster7.display();
     monster8.display();
     monster9.display();
     monster11.display();
     monster12.display();
     monster13.display();
     monster14.display();
     monster15.display();

     imageMode(CENTER);
     image(slayerimg,slayer.position.x,slayer.position.y,80,140);
     
     
     drawSprites();
 }

 function keyPressed(){
    if (keyCode === 38){
        Matter.Body.applyForce(slayer,slayer.position,{x:10,y:-100});
    }
    if (keyCode === 37){
        Matter.Body.applyForce(slayer,slayer.position,{x:-50,y:-1});
    }
    if (keyCode === 39){
        Matter.Body.applyForce(slayer,slayer.position,{x:50,y:-1});
    }
    if(keyCode === 32){
        Arrow = createSprite(300,300,50,10)
        Arrow.addImage(Arrowimg);
        Arrow.x = slayer.position.x;
        Arrow.y = slayer.position.y;
        Arrow.scale = 0.1;
        Arrow.velocityX = 5;
        ArrowGrp.add(Arrow)
        if(ArrowGrp.isTouching(monster1) || ArrowGrp.isTouching(monster2) || ArrowGrp.isTouching(monster3) || ArrowGrp.isTouching(monster4) || ArrowGrp.isTouching(monster5) || ArrowGrp.isTouching(monster6) || ArrowGrp.isTouching(monster7) || ArrowGrp.isTouching(monster8) || ArrowGrp.isTouching(monster9) || ArrowGrp.isTouching(monster10) || ArrowGro.isTouching(monster12) || ArrowGrp.isTouching(monster13) || ArrowGrp.isTouching(monster14) || ArrowGrp.isTouching(monster15)){
           ArrowGrp.destroyEach(); 
           World.remove(world,monster1)
        }
        
    }
 }
