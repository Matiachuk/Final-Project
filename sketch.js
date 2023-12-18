// Capstone Project///Pixel art 
// Matiachuk, Skyler
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//Global variable(s)
let R=0, G=0, B=0; //Colours for fill (R,G,B) default as black
let size=10;
let bD=[];
let rE=[];
let bC=[];
// let currentClass = document.querySelector(BrushDown);




function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);
  stroke(0);
  //Br.push(new Brush(mouseX,mouseY,userInputtedColour(),size,));
}

function draw() {
  background(220);
  brush();
  brushSize();
  for(strokes of bD){
    strokes.display();
  }
  // if (currentClass) {
  //   currentClass.style.color = fill(R,G,B);
  // }
  // for(something of Br){
  //   something.display();
  // }
//   bD.forEach(dot => {
//     if (dot === undefined) {
//         extraStrokes.push(dot);
//     }
// });
// Re.forEach(dot => {
//   if (dot === undefined) {
//       extraStrokes.push(dot);
//   }
// });

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
    // if(keyIsDown(84)){  //84 is t
    //   //userInputtedColour();
    //   userInputtedColour();
    // }
    if(keyIsDown(88)){  //88 is x
      frameRate(7); //changes the framerate to limit the inverse to restrain it from spamming through
      InvertedColour(R,G,B); 
    }
    if(keyIsDown(90)&&keyIsDown(CONTROL)){  //90 is z, this undoes the previous stroke
      let undo=bD.pop();
      rE.push(undo);
      frameRate(5);
      
    }
    if(keyIsDown(90)&&keyIsDown(SHIFT)){  //90 is z, this redoes the previous stroke
     if(rE.length!==0){ //prevents the Redo from making undefined indexes in the bD array
      let redo=rE.pop();
      bD.push(redo);
      frameRate(10);
     }
    }
  }
  if(mouseIsPressed===true){
    if(mouseButton===LEFT){
      bD.push(new BrushDown(mouseX,mouseY,size));
    }
  }
  
  ellipse(mouseX,mouseY,size);
}

class BrushDown{  //Creates a ellipse at the users mouse position with the colour and size when called in brush() via left clicking the mouse.
  constructor(x,y,c,s){
    this.x=x;
    this.y=y;
    this.s=s;
    this.c=c;
  }
  colour(){
    R=prompt("Enter a R value from 0-255");
    G=prompt("Enter a G value from 0-255");
    B=prompt("Enter a B value from 0-255");
    fill(R,G,B);
    stroke(R,G,B);
  }
  display(){
    if(keyIsPressed===true){
      if(keyIsDown(84)){  //84 is t
        this.colour();
      }
    }
    ellipse(this.x,this.y,this.s);
  }

}

class StrokeColour{
  constructor(c){
    this.c=c;
  }
  display(){
    this.c;
  }
}

// class Brush{
//   constructor(x,y,c,s){
//     this.x=x;
//     this.y=y;
//     this.c=c;
//     this.s=s;
//   }
//   userInputtedColour(){
//     frameRate(7);
//     if(keyIsPressed===true){
//       if(keyIsDown(84)){  //84 is t
//         this.c;
//       }
//       if(keyIsDown(88)){  //88 is x
//         frameRate(7); //changes the framerate to limit the inverse to restrain it from spamming through
//         InvertedColour(R,G,B); 
//       }
//     }
//   }
//   ReUn(){
//     if(keyIsDown(90)&&keyIsDown(CONTROL)){  //90 is z, this undoes the previous stroke
//       let undo=bD.pop();
//       rE.push(undo);
//       frameRate(10);
      
//     }
//     if(keyIsDown(90)&&keyIsDown(SHIFT)){  //90 is z, this redoes the previous stroke
//      if(rE.length!==0){ //prevents the Redo from making undefined indexes in the bD array
//       let redo=rE.pop();
//       bD.push(redo);
//       frameRate(10);
//      }
//     }
//   }
//   mouseDown(){
//     if(mouseIsPressed===true){
//       if(mouseButton===LEFT){
//         bD.push(new BrushDown(mouseX,mouseY,size));
//       }
//     }
//   }

//   display(){
//     ellipse(this.x,this.y,this.s);
//     this.userInputtedColour();
//     this.mouseDown();
//     this.ReUn();
   
    
//   }
// }