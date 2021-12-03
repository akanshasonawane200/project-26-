
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var con;
var ball2;
var con;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();

  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
  }
   
  
  btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);
  
  ball = Bodies.circle(100,200,20,ball_options);
  World.add(world,ball);
  ball = Bodies.circle(350,10,12,ball_options);
  World.add(world,ball2);

  con = Matter.constraint.create({
        pointA:{x:200,y:20},
        BodyB:ball,
        piontB:{x:0,y:0},
        length:100,
        stiffness:0.1
  });
     World.add(world,con);

     // 2nd constraint

     con2 = Matter.constraint.create({
            bodyA:ball,
            pointA:{x:0,y:0},
            bodyB:ball2,
            piontB:{x:0,y:0},
            length:100,
            stiffness:0.1
     });

     world.add(world,con2);
      

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,10);
  ellipse(ball2.position.x,ball2.position.y,12)
  
  Push();
  strokeWeight(2);
  stroke(225);
  line(con.pointA.x,con.pointA.y,position.x,ball.position.y);
  line(ball.position.x,ball.position.y,ball2.position.x,ball2.position.y);
  Pop();
  
  
  
}
function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
  


