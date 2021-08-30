var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var engine, world
var s1, s2

var form, player, game;
var s1_dead, s1_shooting, s2_dead, s2_shooting;
var jet1, jet1Img, jet2, jet2Img, heliImg;
var jet1Group, jet2Group;
var score,score2;
var bullet1, bullet2,bullet1Img, bullet2Img,bomb1,bomb2,bom1Img,bomb2Img;

function preload() {
  bg = loadImage("images/sky.jpg");
  s1_shooting = loadImage("images/shooting_1.png");
  s1_dead = loadImage("images/destroyed_1.png");
  s2_shooting = loadImage("images/shooting_2.png");
  s2_dead = loadImage("images/falling_2.png");
  jet1Img = loadImage("images/jet (2).png")
  jet2Img = loadImage("images/jet (3).png");
  heli1Img = loadImage("images/helicopter.png")
  heli2Img = loadImage("images/heli.png");
  bullet1Img = loadImage("images/bullet_1.png");
  bullet2Img = loadImage("images/bullet_2.png");
}
function setup() {
  canvas = createCanvas(2000, 800);
  
  soldier1 = createSprite(300,570);
  soldier1.addImage(s1_shooting)
  soldier1.scale = .15

  soldier2 = createSprite(1400,580);
  soldier2.addImage(s2_shooting)
  soldier2.scale = .7

  jet1Group = new Group();
  jet2Group = new Group();

  heli1Group = new Group();
  heli2Group = new Group();

  bullet1Group= new Group();
  bullet2Group = new Group();

  score = score2 = 0;
}


function draw() {
  background(bg)

  if(keyDown("1")){
    spawnBullet1();
  }

  if(keyDown("2")){
    spawnBullet2();
  }

  if(bullet1Group.isTouching(jet2Group)){
    bullet1Group.destroyEach();
    jet2Group.destroyEach();
    score = score+1
  }

  if(bullet1Group.isTouching(heli2Group)){
    bullet1Group.destroyEach();
    heli2Group.destroyEach();
    score = score+1
  }

  if(bullet2Group.isTouching(jet1Group)){
    bullet2Group.destroyEach();
    jet1Group.destroyEach();
    score2 = score2+1
  }

  if(bullet2Group.isTouching(heli1Group)){
    bullet2Group.destroyEach();
    heli2Group.destroyEach();
    score2 = score2+1
  }

  if(keyDown(RIGHT_ARROW)){
    soldier1.x = soldier1.x + 10
  }

  if(keyDown(LEFT_ARROW)){
    soldier1.x = soldier1.x - 10
  }

  if(keyDown("A")){
    soldier2.x = soldier2.x - 10
  }

  if(keyDown("D")){
    soldier2.x = soldier2.x + 10
  }
  spawnObs2();
  spawnObs();
  drawSprites();
  fill("yellow")
  textSize(17)
  text("Player 1 score:" +score,900,50)

  fill("yellow")
  textSize(17)
  text("Player 2 score:" +score2,900,100)
}

function spawnObs() {
  if (frameCount % 250 === 0) {
    jet1 = createSprite(-50, 250, 100);
    jet1.y = Math.round(random(0,300))
    jet1.addImage(jet1Img)
    jet1.scale = .5
    jet1.velocityX = 3;
    jet1Group.add(jet1);
  }
  if(frameCount%600 === 0){
    heli1 = createSprite(-50,250,100);
    heli1.y = Math.round(random(0,300));
    heli1.addImage(heli1Img);
    heli1.velocityX = 4;
    heli1.scale = .3
    heli1Group.add(heli1)
  }

}

function spawnObs2() {
  if(frameCount%270==0){
  jet2 = createSprite(2050, 250, 150);
  jet2.y = Math.round(random(0,250));
  jet2.addImage(jet2Img);
  jet2.velocityX = -3;
  jet2Group.add(jet2);
}
if(frameCount%630 === 0){
  heli2 = createSprite(2050,250,100);
  heli2.y = Math.round(random(0,250));
  heli2.addImage(heli2Img);
  heli2.velocityX = -4;
  heli2.scale = .5
  heli2Group.add(heli2)
}
}

function spawnBullet1(){
  bullet1 = createSprite(300,570);
  bullet1.addImage(bullet1Img);
  bullet1.scale = .08
  bullet1.setVelocity(4, -4);
  bullet1.rotation = 60
  bullet1Group.add(bullet1)
}

function spawnBullet2(){
  bullet2 = createSprite(1400,580);
  bullet2.addImage(bullet2Img);
  bullet2.scale = .08
  bullet2.setVelocity(-4, -4);
  bullet2.rotation = -60;
  bullet2Group.add(bullet2);

}