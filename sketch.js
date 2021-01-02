//Create variables here
var dog;
var dogIMG;
var happyIMG;
var database;
var foodS;
var foodStocks;

function preload()
{
  //load images here
  dogIMG = loadImage("images/dogImg.png");
  happyIMG = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(800, 700);
  database = firebase.database
  foodStocks = database.ref("Food")
  foodStocks.on("value",readStock)
  foodStocks.set(20)
  dog = createSprite(200,300,20,50);
  dog.addImage(dogIMG);
  dog.scale = 0.35
}


function draw() {  
  background("LightBlue");
  if (foodS=! undefined){
    textSize(25);
    fill(255);
    text("to feed the dog, press the UP arrow key!",75,50)
    text("Food left for the dog"+ foodS,70,50)
    if(keyWentDown(UP_ARROW)){
      writeStock(foodS)
      dog.addImage(happyIMG)
    }

  }

  drawSprites();
  //add styles here
  dog.display()

}
function writeStock(a){
  if(a<0){
    a=0;
  }
  else{
    a=a-1
  }

}
database.ref("/").update({
  Food:a
})
function readstock(data){
  foodS=data.val()
}