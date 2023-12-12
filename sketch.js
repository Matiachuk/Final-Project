// Capstone Project///Pixel art 
// Matiachuk, Skyler
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//Global variable(s)
let R, G, B; //Colours for fill (R
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
  print(keyCode);
}

function userInputtedColour(){  //Uses an inputted 
  R=prompt("Enter a R value from 0-255");
  G=prompt("Enter a G value from 0-255");
  B=prompt("Enter a B value from 0-255");
  fill(R,G,B);
  stroke(R,G,B);
}
function InvertedColour(a,b,c){
  let cR = 255 - a;
  let cG = 255 - b;
  let cB = 255 - c;
  let cR2 = 255 + a;
  let cG2 = 255 + b;
  let cB2 = 255 + c;
  if(cR2+cG2+cB2>382.5){
    fill(cR,cG,cB);
    stroke(cR,cG,cB);
    print(cR,cG,cB);
  }
  else if(cR+cG+cB<382.5){
    fill(cR2,cG2,cB2);
    stroke(cR2,cG2,cB2);
    print(cR2,cG2,cB2);
  }
}


function brushSize(){
  if(keyIsPressed===true){
    if(keyIsDown(187)&&keyIsDown(SHIFT)){   //187 is +
      size++;
    }
    else if(keyIsDown(189)&&keyIsDown(SHIFT)&&size>1){    //189 is -
      size--;
    }
  }
}

function brush(){
  if(keyIsPressed===true){
    if(keyIsDown(84)){  //84 is t
      userInputtedColour();
    }
  }
  if(keyIsPressed===true){
    if(keyIsDown(88)){  //88 is x
      InvertedColour(R,G,B);
    }
  }
  ellipse(mouseX,mouseY,size);
}