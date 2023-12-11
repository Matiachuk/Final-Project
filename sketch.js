// Capstone Project///Pixel art 
// Matiachuk, Skyler
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//Global variable(s)

let size=10; 
let colour=0;



function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(220);
  brush();
  brushSize();
  print(keyCode);
}

function userInputtedColour(){  //Uses an inputted 
  let c1=prompt("Enter a value from 0-255");
  let c2=prompt("Enter a value from 0-255");
  let c3=prompt("Enter a value from 0-255");
  fill(c1,c2,c3);
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
    if(keyIsDown(84)){
      fill(userInputtedColour());
    }
  }
  brushColour();
  ellipse(mouseX,mouseY,size);
}