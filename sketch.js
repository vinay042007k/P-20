
function preload() {
    //load the images here
    gardenImg = loadImage("garden.png");
    catImg1 = loadImage("cat1.png");
    catImg2 = loadAnimation("cat2.png","cat3.png");
    catImg3 = loadAnimation("cat4.png");
    mouseImg1 = loadImage("mouse1.png");
    mouseImg2 = loadAnimation("mouse2.png","mouse3.png");
    mouseImg3 = loadAnimation("mouse4.png");
    

}

function setup(){
    createCanvas(900,700);
    //create tom and jerry sprites here
    garden = createSprite(485,350,50,50);
    garden.addImage(gardenImg);
    garden.scale = 1;

    cat = createSprite(800,550,10,10);
    cat.addImage(catImg1);
    cat.scale = 0.15;
    cat.setCollider("rectangle",0,0,200,100);
    cat.debug = true;

    mouse = createSprite(180,550,10,10);
    mouse.addImage(mouseImg1);
    mouse.scale = 0.12;
    
}

function draw() {

    background("black");
    //Write condition here to evalute if tom and jerry collide
     if(cat.x - mouse.x < (cat.width - mouse.width)/2){

        cat.velocityX = 0;
        cat.x = 260;
         cat.addAnimation("catLastImg",catImg3);
         cat.changeAnimation("catLastImg");

         mouse.addAnimation("mouseLastImg",mouseImg3);
         mouse.changeAnimation("mouseLastImg");

     }


     


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("catRunning",catImg2);
        cat.changeAnimation("catRunning");

        mouse.addAnimation("happyMouse",mouseImg2);
        mouse.changeAnimation("happyMouse");
    }

}
