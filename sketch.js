const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;
var ball2;
var ball3;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,400,400,20,ground_options);
    World.add(world,ground);

    var ball_options ={
        restitution: 1
    }
    ball = Bodies.circle(200, 200, 4, ball_options);
    World.add(world,ball);

    ball2 = Bodies.circle(150, 200 , 6, ball_options);
    World.add(world,ball2);

    ball3 = Bodies.circle(350, 200, 8, ball_options);
    World.add(world,ball3);

    console.log(ball);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    fill("blue")
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 4, 4);

    fill("green")
    ellipse(ball2.position.x, ball2.position.y, 6, 6);

    fill("red")
    ellipse(ball3.position.x, ball3.position.y, 8, 8);
}