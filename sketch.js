const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 

var ground1,ground2,ground3,ground4,ground5,ground6,ground7,ground8,ground9,ground10,ground11;
var ground12,ground13,ground14,ground15;

var monster1,monster2,monster3,monster4,monster5,monster6,monster7,monster8,monster9,monster10,monster11
var monster12,monster13,monster14,monster15;



function preload(){

}

function setup(){
    createCanvas(1300,675);

    engine = Engine.create();
    world = Engine.World;

    ground1 = new Ground(160,162,130,15);
    ground2 = new Ground(1250,165,130,15);
    ground3 = new Ground(1005,500,130,15);
    ground4 = new Ground(550,450,130,15);
    ground5 = new Ground(622,654,130,15);
    ground6 = new Ground(335,552,130,15);
    ground7 = new Ground(1119,384,130,15);
    ground8 = new Ground(994,633,130,15);
    ground9 = new Ground(1099,112,130,15);
    ground10 = new Ground(120,356,130,15);
    ground11 = new Ground(1111,234,130,15);
    ground12 = new Ground(500,50,130,15);
    ground13 = new Ground(900,200,130,15);
    ground14 = new Ground(700,300,130,15);
    ground15 = new Ground(650,400,130,15);

    monster1 = new Monster(160,165,50,50);



   
    Engine.run(engine);
}
 function draw(){
     background(163,73,164);
     Engine.update(engine);
     
     


      ground1.display();
      ground2.display();
      ground3.display();
      ground4.display();
      ground5.display();
      ground6.display();
      ground7.display();
      ground8.display();
      ground9.display();
      ground10.display();
      ground11.display();
      ground12.display();
      ground13.display();
      ground14.display();
      ground15.display();

     monster1.display()
     
     drawSprites();
     
 }
 
