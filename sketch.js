let sclX = 10;
let sclY = 20;
let recX,recY;
let posX = 0, posY = 600;
let fps = 25;
var plSh;
var bul = [];
var count = 0;
var stval = 5;
var stamina = stval;
var aiship = [];


function setup() {
  frameRate(fps);
  createCanvas(500,1000);
  background('#497019');
  plSh = new ship(1);
  aiship = new ship(0);
  
}

function draw() {
  if (stamina < stval ) {
    stamina++;
  }
    
  
  background('#497019');
  fill(10);
  strokeWeight(4);
  stroke(100);
  recX = width/sclX;
  console.log(stamina);




  recY = height/sclY;
  plSh.drawShip(1);

  aiship.drawShip(0);
  aiship.AImove();

  for(let i=0;i<count;i++){
    if(bul[i] != undefined){
      bul[i].shoot(plSh.x,plSh.y);
    }
  }

  for(let i=0;i<bul.length;i++){
    if(bul[i].y < -recY || bul[i].y > height || bul[i].x < -recX || bul[i].x > width){
      
        bul.splice(i,1);
      
    }
  }

    
      if (keyIsDown(LEFT_ARROW)) {
        if(plSh.dir != 0){
          plSh.dir = 0;
        }else{
          if(plSh.x >= 2*recX)
            plSh.x -= recX;
        }
      }else if(keyIsDown(RIGHT_ARROW)){
        if(plSh.dir != 2){
          plSh.dir = 2;
        }else{
          if(plSh.x < width -  2*recX)
            plSh.x += recX;
        }
      } else if(keyIsDown(ENTER)){
          if(stamina == stval ){
            bul.push(new bullet(plSh.dir));
            count++;
            stamina = 0;
          }
        
      } else if(keyIsDown(UP_ARROW)){
        if(plSh.dir != 1){
          plSh.dir = 1;
        }else{
          if(plSh.y >= 2*recY)
            plSh.y -=  recY;
        }
      } else if(keyIsDown(DOWN_ARROW)){
        
        if(plSh.dir != 3){
          plSh.dir = 3;
        }else{
          if(plSh.y < height-2*recY)
            plSh.y += recY;
        }
    
      }
    


}
  


  







function ship(owner){
  this.recX = width/sclX;
  this.recY = height/sclY;
  this.x = 4*this.recX;
  this.y = height/2 - this.recY; 
  this.dir = 1;
  /*      1
        0   2
          3 
  */
 if (owner == 0) {
  this.x = random(this.recX,width - 2*this.recX);
  console.log(this.x);
  this.y = random(this.recY,width - 2*this.recY);
 }
  this.AImove = function(){
   
    



  };
  this.drawShip = function(){
    if(owner == 1){
      //NAVE DO JOGADORfill(255);
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
    }else{
      //NAVES DO COMPUTADOR
      
      if(this.dir == 1){
       
        
        //camada 1
        rect(this.x - recX,this.y + recY,this.recX,this.recY);
        rect(this.x + recX,this.y + recY,this.recX,this.recY);
        
        //camada 2
        rect(this.x,this.y,this.recX,this.recY);
        rect(this.x - recX,this.y,this.recX,this.recY);
        rect(this.x + recX,this.y,this.recX,this.recY);
        //head
        rect(this.x,this.y - recY,this.recX,this.recY);
      } else if(this.dir == 3){
        //camada 2
        // fill('red');
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
       
        
        rect(this.x - recX,this.y + recY,this.recX,this.recY);
        
        rect(this.x,this.y + recY,this.recX,this.recY);
        
        rect(this.x,this.y - recY,this.recX,this.recY);
        
        rect(this.x - recX,this.y - recY,this.recX,this.recY);
        //head
        rect(this.x + recX,this.y,this.recX,this.recY);
      } else  {
        rect(this.x,this.y,this.recX,this.recY);
        
        rect(this.x + recX,this.y + recY,this.recX,this.recY);
        rect(this.x,this.y + recY,this.recX,this.recY);
        rect(this.x,this.y - recY,this.recX,this.recY);
        rect(this.x + recX,this.y - recY,this.recX,this.recY);
        //head
        rect(this.x - recX,this.y,this.recX,this.recY);
      }

    }
    // console.log(this.x + ", " + this.y);
  };

}
function bullet (dir){
  this.x;
  this.y;
  this.i = 0;

  this.shoot = function(shipX,shipY){
    if(dir == 1){
      if(this.i == 0){
        this.x = shipX ;
        this.y = shipY - recY;
      }
      this.i++;
      console.log("pow pra cima!\n");
      //draw bullet
      fill(0);
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
