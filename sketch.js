
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var g1,g2,g3;
var d1,d2,d3,d4,d5,d6,d7,dg;
var p1,p2,p3,p4;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b0;
function preload()
{
	
}

var plinkos=[];
function setup() {
	createCanvas(480,650);


	engine = Engine.create();
	world = engine.world;

	g1=new Ground(240,640,480,20);
	g2=new Ground(10,325,20,660);
	g3=new Ground(470,325,20,660);
	d1=new Division(25,515,10,230)
	d2=new Division(95,515,10,230);
	d3=new Division(165,515,10,230);
	d4=new Division(235,515,10,230);
	d5=new Division(305,515,10,230);
	d6=new Division(379,515,10,230);
	d7=new Division(454,515,10,230);
	dg=new Division(240,626,446,10);
	b1=new Plinko(200,200,30);
    //b2=new Plinko()	
	


	
	//for (var j = 40;j<=50;j=j+50){
		//plinkos.push(new Plinko(j,75,10))
	//}
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  g1.display();
  g2.display();
  g3.display();
  d1.display();
  d2.display();
  d3.display();
  d4.display();
  d5.display();
  d6.display();
  d7.display();
  dg.display();
  b1.display();
  

  drawSprites();
 
}



