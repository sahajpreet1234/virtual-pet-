var dog,dog1,happyDog,database,foodS,foodStock;
var database
function preload()
{
  dogImg=loadImage("images/dogImg.png")
  dog1Img=loadImage("images/dogImg1.png")
}

function setup() {
  database=firebase.database()
	createCanvas(500,500);
  dog=createSprite(250,250)
  dog.addImage(dogImg)
  dog.scale=0.2
  foodStock=database.ref("Food")
  foodStock.on("value",readStock)
}


function draw() {  
background(46,139,87)

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dog1Img);

}
  drawSprites();
  textSize(15)
  fill("red")
  stroke("black");
  text("food remaining: "+foodS,150,100);
  text("NOTE:PRESS UP ARROW KEY TO FEED MILK TO THE DOG",50,20)
}
  function readStock (data){
    foodS=data.val();
  }

  function writeStock(x){
    if(x<=0){
      x=0;
    }else{
      x=x-1
    }
    database.ref('/').update({
      Food:x
    })
  }




