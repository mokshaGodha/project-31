const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var ground1, ground2, circleImg;
var gameState = "rest";
var score=0;
function preload() { 
  circleImg=loadImage("circle.jpg"); }

function setup() {
  createCanvas(1200,600);
  engine=Engine.create()
  world=engine.world;
  
  polygon=Bodies.circle(200,100,20, options={'density':1,'restituion':0.5,'friction':1});
  World.add(world,polygon);

  ground=new Ground(600,400,250,10)
  ground2=new Ground(1000, 290, 250,10);
  //STAND 1
//layer 1
  box=new Box(600,375,30,40)
  box1 =new Box(570,375,30,40)
  box2 =new Box(540,375,30,40)
  box3 =new Box(510,375,30,40)
  box4 =new Box(630,375,30,40)
  box5 =new Box(660,375,30,40)
  box6 =new Box(690,375,30,40)
  //layer 2
  box7 =new Box(600,335,30,40)
  box8 =new Box(570,335,30,40)
  box9 =new Box(540,335,30,40)
  box10=new Box(630,335,30,40)
  box11=new Box(660,335,30,40)
  box12 =new Box(630,335,30,40)
  //layer 3
  box13 =new Box(600,295,30,40)
  box14 =new Box(630,295,30,40)
  box15 =new Box(570,295,30,40)
  //layer 4
  box16 =new Box(600,255,30,40)
   //STAND 2
  //layer 1
  box17= new Box(1000,265,30,40)
  box19= new Box(1030,265,30,40)
  box20= new Box(1060,265,30,40)
  box21= new Box(1090,265,30,40)
  box22= new Box(970,265,30,40)
  box23= new Box(940,265,30,40)
  box24= new Box(910,265,30,40)
  //layer2
  box25= new Box(1000,225,30,40)
  box26= new Box(1030,225,30,40)
  box27= new Box(1060,225,30,40)
  box29= new Box(970,225,30,40)
  box30= new Box(940,225,30,40)
  //layer 3
  box31= new Box(1000,185,30,40)
  box33= new Box(1030,185,30,40)
  box32= new Box(970,185,30,40)
  box34=new Box(1000,145,30,40);

 //slingshot
 slingshot=new SlingShot(polygon,{x:200,y:100});
 //ground
  
}

function draw() {
  Engine.update(engine)
  background(0); 
  
  imageMode(CENTER);
  image(circleImg,polygon.position.x,polygon.position.y,60,60);

  drawSprites();
  fill("white");
  textSize(30)
  text("Drag the circle to drop the boxes.", 400,70);
  text("SCORE:"+score,970,560);
  ground.display();
  ground2.display();
  box.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
 box17.display()
  box19.display()
  box20.display()
  box21.display()
  box22.display()
  box23.display()
  box24.display()
  box25.display()
  box26.display()
  box27.display()
  
  box29.display()
  box30.display()
  box31.display()
  box32.display()
  box33.display()
  box34.display()
  slingshot.display();

  box.score();
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
 box17.score()
  box19.score()
  box20.score()
  box21.score()
  box22.score()
  box23.score()
  box24.score()
  box25.score()
  box26.score()
  box27.score()
  
  box29.score()
  box30.score()
  box31.score()
  box32.score()
  box33.score()
  box34.score()
}
function mouseDragged(){
  if (gameState!=="launched"){
     Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
 }
}


function mouseReleased(){
 slingshot.fly();
 //Matter.Body.applyForce(polygon, polygon.position,{x:100,y:10});
 gameState = "launched";
}
function keyPressed(){
  if( keyCode === 32){
    
    slingshot.attach(this.polygon);
    gameState = "rest";
    
      
  };
}