// Capstone Project///Pixel art 
// Matiachuk, Skyler
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//Global variable(s)
let R=0, G=0, B=0; //Colours for fill (R,G,B) default as black
let size=10;





function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);
  stroke(0);
}

function draw() {
  background(220);
  brush();
  brushSize();
}

function userInputtedColour(){  //Uses an inputted value for RGB to change the fill of the brush to said colour
  R=prompt("Enter a R value from 0-255");
  G=prompt("Enter a G value from 0-255");
  B=prompt("Enter a B value from 0-255");
  fill(R,G,B);
  stroke(R,G,B);

}
function InvertedColour(r,g,b){ //Inverts the fill colour
  R=255-r;
  G=255-g;
  B=255-b;
  fill(R,G,B);
  stroke(R,G,B);

  
  // if(cR+cG+cB>382.5){
  //   fill(cR,cG,cB);
  //   stroke(cR,cG,cB);
  //   cR = a - 255;
  //   cG = b - 255;
  //   cB = c - 255;
  //   print(cR,cG,cB);
  // }
  // else if(cR+cG+cB<382.5){
  //   fill(cR,cG,cB);
  //   stroke(cR,cG,cB);
  //   cR = 255 - a;
  //   cG = 255 - b;
  //   cB = 255 - c;
  //   print(cR,cG,cB);
  // }
}


function brushSize(){ //Changes the brush size
  if(keyIsPressed===true){
    if(keyIsDown(187)&&keyIsDown(SHIFT)){   //187 is +
      size++;
    }
    else if(keyIsDown(189)&&keyIsDown(SHIFT)&&size>1){    //189 is -
      size--;
    }
    else if(keyIsDown(219)){    //219 is [
      size=prompt("Enter a size value");
    }
  }
}

function brush(){ //Draws an ellipse on the mouse that follows, also includes brush controls
  frameRate(60);
  if(keyIsPressed===true){
    if(keyIsDown(84)){  //84 is t
      userInputtedColour();
    }
    if(keyIsDown(88)){  //88 is x
      frameRate(7); //changes the framerate to limit the inverse to restrain it from spamming through
      InvertedColour(R,G,B);
      
    }
    
  }
  
  ellipse(mouseX,mouseY,size);
}