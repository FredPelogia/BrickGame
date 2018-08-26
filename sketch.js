let sclX = 10;
let sclY = 20;
let recX,recY;
let posX = 0, posY = 600;
let fps = 5;
var plSh;
var bul = [];
var count = 0;
function setup() {

  createCanvas(500,1000);
  background('#497019');
  plSh = new ship();
}

function draw() {
  
  fill(10);
  strokeWeight(4);
  stroke(100);
  
  
  recX = width/sclX;
  recY = height/sclY;
  background('#497019');
  rect(posX,posY,recX,recY);
  // frameRate(fps);
  plSh.drawShip();
  
  


}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    if(plSh.dir != 0){
      plSh.dir = 0;
    }else{
      plSh.x -= recX;
    }
  } else if (keyCode === RIGHT_ARROW) {
    if(plSh.dir != 2){
      plSh.dir = 2;
    }else{
      plSh.x += recX;
    }
  } else if(keyCode === ENTER){
    bul.push(new bullet());
    count++;
  //  bul[count-1].i =0;
    bul[count-1].shoot(plSh.x,plSh.y,plSh.dir);
    
    
  } else if(keyCode === UP_ARROW){
    if(plSh.dir != 1){
      plSh.dir = 1;
    }else{
      plSh.y -= recY;
    }
  } else if(keyCode === DOWN_ARROW){
    
    if(plSh.dir != 3){
      plSh.dir = 3;
    }else{
      plSh.y += recY;
    }

  };
}

function ship(){
  this.recX = width/sclX;
  this.recY = height/sclY;
  this.x = 4*this.recX;
  this.y = height/2 - this.recY; 
  this.dir = 3;
  /*      1
        0   2
          3 

  */
  // this.x = constrain(this.x,this.recX,width-recX);
  // this.y = constrain(this.y,this.recX,height - recY);
  this.drawShip = function(){

    if(this.dir == 1){
      //camada 2
      rect(this.x,this.y,this.recX,this.recY);
      rect(this.x - recX,this.y,this.recX,this.recY);
      rect(this.x + recX,this.y,this.recX,this.recY);
      //camada 1
      rect(this.x - recX,this.y + recY,this.recX,this.recY);
      rect(this.x + recX,this.y + recY,this.recX,this.recY);
      rect(this.x,this.y + recY,this.recX,this.recY);
      //head
      rect(this.x,this.y - recY,this.recX,this.recY);
    } else if(this.dir == 3){
      //camada 2
      // fill('red');
      rect(this.x,this.y - recY,this.recX,this.recY);
      rect(this.x - recX,this.y - recY,this.recX,this.recY);
      rect(this.x + recX,this.y - recY,this.recX,this.recY);
      //camada 1
      // fill('blue')
      rect(this.x - recX,this.y,this.recX,this.recY);
      rect(this.x + recX,this.y,this.recX,this.recY);
      rect(this.x,this.y,this.recX,this.recY);
      // fill(255);
      //head
      rect(this.x,this.y + recY,this.recX,this.recY);
    } else if(this.dir == 2){
      rect(this.x,this.y,this.recX,this.recY);
      rect(this.x - recX,this.y,this.recX,this.recY);
      rect(this.x - recX,this.y + recY,this.recX,this.recY);
      rect(this.x,this.y + recY,this.recX,this.recY);
      rect(this.x,this.y - recY,this.recX,this.recY);
      rect(this.x - recX,this.y - recY,this.recX,this.recY);
      //head
      rect(this.x + recX,this.y,this.recX,this.recY);
    } else  {
      rect(this.x,this.y,this.recX,this.recY);
      rect(this.x + recX,this.y,this.recX,this.recY);
      rect(this.x + recX,this.y + recY,this.recX,this.recY);
      rect(this.x,this.y + recY,this.recX,this.recY);
      rect(this.x,this.y - recY,this.recX,this.recY);
      rect(this.x + recX,this.y - recY,this.recX,this.recY);
      //head
      rect(this.x - recX,this.y,this.recX,this.recY);
    }
    // console.log(this.x + ", " + this.y);
  };
}
function bullet (){
  this.x;
  this.y;
  this.i = 0;
  this.shoot = function(shipX,shipY,dir){
    
    if(dir == 1){
      if(this.i == 0){
        this.x = shipX ;
        this.y = shipY - recY;
      }
      this.i++;
      
      fill(0);
      console.log("pow pra cima!\n");
      
      rect(this.x , this.y,width/sclX,height/sclY);
      
      this.y -= recY ;
    } else if(dir == 3){
      if(this.i == 0){
        this.x = shipX ;
        this.y = shipY +recY;
      }
      console.log("pow pra baixo!\n");
      this.i++;
      
      fill(0);
      
      rect(this.x , this.y,width/sclX,height/sclY);
      this.y += recY ;
    }else if(dir == 0){
      if(this.i == 0){
        this.x = shipX -recX ; 
        this.y = shipY;
      }
      console.log("pow pra esquerda!\n");
      this.i++;
      fill(0);
      rect(this.x , this.y,width/sclX,height/sclY);
      this.x -= recX;

    }else if(dir == 2){
      if(this.i == 0){
        this.x = shipX -recX ;
        this.y = shipY;
      }
      console.log("pow pra direita!\n");
      this.i++;
      fill(0);
      rect(this.x , this.y,width/sclX,height/sclY);
      this.x += recX;

    }
  };
}
