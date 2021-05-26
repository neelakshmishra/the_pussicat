var canvas,bg;
var together;
var tom, tomImg1, tomImg2,tomImg3,tomImg4;
var jerry,jerryImg1, jerryImg2,jerryImg3, jerryImg4;

function preload() {
    //load the images here
    bg = loadImage("images/garden.png")

    jerryImg1 = loadImage("images/mouse1.png")
    jerryImg1 = loadImage("images/mouse2.png")
    jerryImg1 = loadImage("images/mouse3.png")
    jerryImg1 = loadImage("images/mouse4.png")

    tomImg1 = loadImage("images/cat1.png")
    tomImg2 = loadImage("images/cat2.png")
    tomImg3 = loadImage("images/cat3.png")
    tomImg4 = loadImage("images/cat4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(870,600)
    tom.addAnimation("tomSleaping",tomImg1)
    tom.scale=0.2;

    jerry = createSprite(200,600);
    jerry.addAnimation("jerryStanding",jerryImg1)
    jerry.scale = 0.15
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x< (tom.width - jerry.width)/2){
       tom.velosityX = 0;
       tom.addAnimation("tomLASTimg",tomImg3)
       tom.x = 300;
       tom.scale = 0.2
       tom.changeAnimation("tomLASTimg")
       jerry.addAnimation("jerryLASTimg",jerryImg3)
       jerry.scale = 0.15
       jerry.changeAnimation("jerryLASTimg")
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
     tom.velosityX = -200
     tom.addAnimation("tomRunning",tomImg2)
     tom.scale = 0.2
     tom.changeAnimation("tomRunning")

     jerry.addAnimation("jerryRunning",jerryImg2)
     jerry.scale = 0.15
     jerry.frameDelay = 25
     jerry.changeAnimation("jerryRunning")
  }

}
