var gameState = "screen1"
var male, female, player1, submit1, submit2
var binImg, bin, hImg, hello, boyImg, boy, girlImg, girl, groundImg, ground
var screen3, bg2, startImg, start, boyPlay, obstaclesGroup, dustbin, dustbinImg, boyPlayIMG
var girlPlayIMG, girlPlay, obs1, obs2, obs3, obs4
var score;
var obstacle1,obstacle2,obstacle3,obstacle4;

function preload() {
  binImg = loadImage("bin.png");
  hImg = loadImage("hello.png");
  boyImg = loadImage("boy.png");
  girlImg = loadImage("girl (2).png");
  groundImg = loadImage("background.png");
  startImg = loadImage("start.png")
  screen3 = loadImage("BG2.png")
  boyPlayIMG = loadImage("boyWalking1.png")
  girlPlayIMG = loadImage("girlWalking1.png")
  dustbinImg = loadImage("bin2.png")
  obs1 = loadImage("bottle.png")
  obs2 = loadImage("crumpbledPaper.png")
  obs3 = loadImage("crushedCan.png")
  obs4 = loadImage("plasticBag.png")

}

function setup() {
  createCanvas(800, 400);
  ground = createSprite(400, 250);
  ground.addImage(groundImg);
  ground.scale = 0.8

  obstaclesGroup = new Group();
  boy = createSprite(300, 250, 10, 10)
  boy.addImage(boyImg)
  boy.scale = 0.05


  male = createButton("MALE");
  male.hide()

  female = createButton("FEMALE");
  female.hide()

  bin = createSprite(650, 90);
  bin.addImage("throw", binImg);
  bin.scale = 0.13

  hello = createSprite(410, 80)
  hello.addImage(hImg)
  hello.scale = 0.4

  girl = createSprite(450, 250);
  girl.addImage(girlImg);
  girl.scale = 0.12

  bg2 = createSprite(400, 100)
  bg2.addImage(screen3)
  bg2.scale = 0.8

  start = createSprite(400, 200);
  start.addImage(startImg);
  start.scale = 0.07

  boyPlay = createSprite(200, 220);
  boyPlay.addImage("boy", boyPlayIMG);
  boyPlay.scale = 0.2

  girlPlay = createSprite(200, 220);
  girlPlay.addImage("girl", girlPlayIMG);
  girlPlay.scale = 0.1

  dustbin = createSprite(740, 270, 20, 50);
  dustbin.addImage(dustbinImg);
  dustbin.scale = 0.1

  obstaclesGroup = new Group();
  score=0
  
}

function draw() {
  if (gameState === "screen1") {
    background(250, 246, 0);
    hello.visible = false;
    textSize(50)
    fill(255, 0, 250)
    text("throw the garbage", 200, 100)
    text(".............................", 200, 120)
    textSize(25);
    fill("red")
    text("please press space to start", 250, 200)
    boy.visible = false
    girl.visible = false
    bg2.visible = false
    start.visible = false
    dustbin.visible = false
    boyPlay.visible = false
    girlPlay.visible = false

    if (keyCode === 32) {
      gameState = "screen2"
    }
  }

  if (gameState === "screen2") {
    background(0, 250, 255)
    bin.visible = false;
    bg2.visible = false;
    start.visible = false;
    girl.visible = true
    hello.visible = true
    girl.visible = true
    boy.visible = true
    dustbin.visible = false
    boyPlay.visible = false
    girlPlay.visible = false

    male.show()
    male.position(277, 300);
    female.show()
    female.position(400, 300)



    textSize(25);
    fill("blue")
    text("please fill enteries to start!!", 250, 170)

    male.mousePressed(() => {
      player1 = createInput('NAME')
      player1.position(235, 330);
      submit1 = createButton('SUBMIT');
      submit1.position(235, 370)

      submit1.mousePressed(() => {
        male.hide();
        female.hide();
        gameState = "screen3"

        player1.hide()
        submit1.hide()
        // player2.hide()
        // submit2.hide()

        boy.visible = false
        boyPlay.visible = false
        girlPlay.visible = false
      })
    })

    female.mousePressed(() => {
      player2 = createInput('NAME')
      player2.position(400, 330);
      submit2 = createButton('SUBMIT');
      submit2.position(400, 370)

      submit2.mousePressed(() => {
        male.hide();
        female.hide();
        gameState = "screen4"

        // player1.hide()
        // submit1.hide()
        player2.hide()
        submit2.hide()
        boyPlay.visible = false
        girlPlay.visible = false

      })
    })
  }

  if (gameState === "screen3") {
    ground.visible = false
    background(screen3)
    boy.visible = false
    girl.visible = false
    hello.visible = false
    start.visible = true
    dustbin.visible = false
    boyPlay.visible = false
    girlPlay.visible = false
    textSize(50)
    fill("red")
    text("Note",550,200)
    textSize(25)
    fill("black")
    text("bottle:1",550,230)
    text("crumbeld paper:2",550,260)
    text("can:3",550,290)
    text("plasticBag:4",550,320)
    text("if score reaches to 5000 ",500,350)
    text("YOU WILL WIN",550,380)
    
    if (mousePressedOver(start)) {
      gameState = "maleScreen"
      textSize(50)
      fill("black")
      text("score: ",200,200)
      
    }
  }
  if (gameState === "screen4") {
    ground.visible = false
    
    background(screen3)
    
    boy.visible = false
    girl.visible = false
    hello.visible = false
    start.visible = true
    dustbin.visible = false
    
    boyPlay.visible = false
    girlPlay.visible = false
    
    if (mousePressedOver(start)) {
      gameState = "femaleScreen"
    }
    textSize(50)
    fill("red")
    text("Note",550,200)
    textSize(25)
    fill("black")
    text("bottle:1",550,230)
    text("crumbeld paper:2",550,260)
    text("can:3",550,290)
    text("plasticBag:4",550,320)
    text("if score reaches to 5000 ",500,350)
    text("YOU WILL WIN",550,380)
  }

  if (gameState === "maleScreen") {
    
    background("black")
    
    bg2.visible = true
  
    start.visible = false
    dustbin.visible = true
    bg2.velocityX = -3

    boyPlay.visible = true

    if (bg2.x < 200) {
      bg2.x = bg2.width / 4
    }
    
    if(mousePressedOver(obstacle1)){
      console.log(score)
      obstacle1.destroy();
      score=score+1;
      
    }
    if(mousePressedOver(obstacle2)){
      console.log(score)
      obstacle2.destroy();
      score=score+2;
      
    }
    if(mousePressedOver(obstacle3)){
      console.log(score)
      obstacle3.destroy();
      score=score+3;
      
    }
    if(mousePressedOver(obstacle4)){
      console.log(score)
      obstacle4.destroy();
      score=score+4;
      
    }
    
    spawnObstacles();
    
    
  }
  if (gameState === "femaleScreen") {
    background("black")
    bg2.visible = true
    start.visible = false
    dustbin.visible = true
    girlPlay.visible = true

    boyPlay.visible = false
    bg2.velocityX = -3

    
    if (bg2.x < 200) {
      bg2.x = bg2.width / 4
    }
    
    if(mousePressedOver(obstacle1)){
      console.log(score)
      obstacle1.destroy();
      score=score+1;
      
    }
    if(mousePressedOver(obstacle2)){
      console.log(score)
      obstacle2.destroy();
      score=score+2;
      
    }
    if(mousePressedOver(obstacle3)){
      console.log(score)
      obstacle3.destroy();
      score=score+3;
      
    }
    if(mousePressedOver(obstacle4)){
      console.log(score)
      obstacle4.destroy();
      score=score+4;
      
    }
    
    if(score===5000){
     gameState="screenEnd"
     
     if(gameState==="screenEnd"){
       background(0)
     }
    }
    spawnObstacles();
  }
  drawSprites();
  
  
}


function spawnObstacles() {
  if (frameCount % 200 === 0) {
    obstacle1 = createSprite(700, 300, 20, 20)
    obstacle1.addImage("1",obs1);
    obstacle1.velocityX = -(2+score/400);
    obstacle1.scale = 0.09  
  }

  if (frameCount % 180 === 0) {
    obstacle2 = createSprite(720, 300, 20, 20)
    obstacle2.addImage("2",obs2);
    obstacle2.velocityX = -(2+score/200);
    obstacle2.scale = 0.02  
  }
  if (frameCount % 150 === 0) {
    obstacle3 = createSprite(600, 300, 20, 20)
    obstacle3.addImage("3",obs3);
    obstacle3.velocityX = -(2.6+score/100);
    obstacle3.scale = 0.08  
  }
  if (frameCount % 70 === 0) {
    obstacle4 = createSprite(500, 300, 20, 20)
    obstacle4.addImage("4",obs4);
    obstacle4.velocityX = -(2+score/100);
    obstacle4.scale = 0.01  
  }
}



