var snow;
var Snow = [];
var maxSnow = 500;

function preload(){
  bg = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(600,600);
  if(frameCount % 150 === 0){ for(var i=0; i<maxSnow; i++){
    snow.push(new Snow(random(0,600), random(0,600))); } }

}

function draw() {
  background(bg);
  
  for(var i = 0; i < maxSnow; i++){
    snow[i].display();
    snow[i].update();
}

  
  drawSprites();
}