// Capstone Project///Pixel art 
// Matiachuk, Skyler
// Date
//
// CONTROLS 
  //size is -&shift or +&shift, [ is a manual size change
  //changing the background colour is f&shift
  //changing brush colour is t
  //inverting brush colour is x
  //undo is control z and redo is shift z
  //eraser is e

//Global variable(s)
let R = 0, G = 0, B = 0; //Colours for fill (R,G,B) default as black
let size = 10;
let bD = [];
let rE = [];
let RGB = [];
let bgR = 220, bgG = 220, bgB = 220;
let userShape;
let brushMode=0;
let defaultGrid =
  [[220, 220, 220, 220, 220],
  [220, 220, 220, 220, 220],
  [220, 220, 220, 220, 220],
  [220, 220, 220, 220, 220]
  ];
let gridActive;




function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(2);
  fill(0);
  stroke(0);
  //Br.push(new Brush(mouseX,mouseY,userInputtedColour(),size,));
  RGB.push(R);
  RGB.push(G);
  RGB.push(B);
}

function draw() {
  background(bgR, bgG, bgB);
  brushSize();
  for (strokes of bD) {
    strokes.display();
  }
  brush();
}

function userInputtedShape() {
  //square, rect, ellipse, triangle
  text("square, rect, ellipse, triangle", windowWidth / 2, windowHeight / 2);
  userShape = prompt("Enter an eligible shape");
}

function eraser() {
  print("eraser",frameCount)
  RGB = [];
  RGB.push(bgR);
  RGB.push(bgG);
  RGB.push(bgB);
  fill(bgR, bgG, bgB);
  stroke(bgR, bgG, bgB);
  // if(keyReleased()){
  //   RGB=[];
  //   RGB.push(R);
  //   RGB.push(G);
  //   RGB.push(B);
  // }

}

function userInputtedColour() {  //Uses an inputted value for RGB to change the fill of the brush to said colour
  RGB = [];
  R = prompt("Enter a R value from 0-255");
  G = prompt("Enter a G value from 0-255");
  B = prompt("Enter a B value from 0-255");
  RGB.push(R);
  RGB.push(G);
  RGB.push(B);
  fill(R, G, B);
  stroke(R, G, B);
}
function InvertedColour() { //Inverts the fill colour
  let newRGB = [];
  newRGB.push(255-R);
  newRGB.push(255-G);
  newRGB.push(255-B);
  return newRGB;
  // RGB = [];
  // R = 255 - r;
  // G = 255 - g;
  // B = 255 - b;
  // fill(R, G, B);
  // stroke(R, G, B);
  // RGB.push(R);
  // RGB.push(G);
  // RGB.push(B);
}


function brushSize() { //Changes the brush size
  if (keyIsPressed === true) {
    if (keyIsDown(187) && keyIsDown(SHIFT)) {   //187 is +
      size++;
    }
    else if (keyIsDown(189) && keyIsDown(SHIFT) && size > 1) {    //189 is -
      size--;
    }
    else if (keyIsDown(219)) {    //219 is [
      size = prompt("Enter a size value");
    }
  }
}
function userInputtedBG() {
  // if(keyIsPressed===true){
  //   if(keyIsDown(70)&&keyIsDown(SHIFT)){   //70 is f
  bgR = int(prompt("enter background colour (0-255)"));
  bgG = int(prompt("enter background colour (0-255)"));
  bgB = int(prompt("enter background colour (0-255)"));
  //   }
  // }
}
function brush() { //Draws an ellipse on the mouse that follows, also includes brush controls
  frameRate(120);
  if (keyIsPressed === true) {
    if (keyIsDown(70) && keyIsDown(SHIFT)) {   //70 is f
      userInputtedBG();
    }
  }
  if (keyIsPressed === true) {
    if (keyIsDown(84)) {  //84 is t
      userInputtedColour();
    }
    if (keyIsDown(88)) {  //88 is x
      frameRate(7); //changes the framerate to limit the inverse to restrain it from spamming through
      // InvertedColour(R, G, B);
      if(brushMode===2){
        brushMode=0;
      }
      else if(brushMode===0){
        brushMode=2;
      }
    }
    if (keyIsDown(90) && keyIsDown(CONTROL)) {  //90 is z, this undoes the previous stroke
      let undo = bD.pop();
      rE.push(undo);
      frameRate(5);

    }
    if (keyIsDown(90) && keyIsDown(SHIFT)) {  //90 is z, this redoes the previous stroke
      if (rE.length !== 0) { //prevents the Redo from making undefined indexes in the bD array
        let redo = rE.pop();
        bD.push(redo);
        frameRate(10);
      }
      if (keyIsDown(66) && keyIsDown(SHIFT)) {
        userInputtedShape();
      }
    }
  }
  if (mouseIsPressed === true) {
    if (mouseButton === LEFT) {
      
      if(brushMode===0){
        print("hi2");
        bD.push(new BrushDown(mouseX, mouseY, RGB, size));
      }
      if(brushMode===2){
        print("hi3");
        bD.push(new BrushDown(mouseX, mouseY, InvertedColour(), size));
      }
    }
  }
  if (keyIsPressed === true) {
    if (keyIsDown(69)) { //69 is e
      eraser(); //This changes the brush and stroke (outer ring surrounding brush) colour to the colour of the background
    }
  }
  // else if (keyIsPressed !== true) {
  //   fill(R, G, B);
  //   RGB = [R, G, B];
    //stroke(255 - R, 255 - G, 255 - B);
  // }
  // else{
  //   //fill(R, G, B);
  //   stroke(255 - R, 255 - G, 255 - B);
  // }
  if(brushMode===0){
    fill(R, G, B);
    stroke(255 - R, 255 - G, 255 - B);
    //ellipse(mouseX, mouseY, size);
  }
  else if(brushMode===1){
    eraser();
  }
  else if(brushMode===2){
    //InvertedColour();
    stroke(R, G, B);
    fill(255 - R, 255 - G, 255 - B);
  }
  ellipse(mouseX, mouseY, size);
}
function keyReleased(){
  print("hi");
  if(keyCode===69){
    brushMode=0;
    RGB=[];
    RGB.push(R);
    RGB.push(G);
    RGB.push(B);
  }
}

class BrushDown {  //Creates a ellipse at the users mouse position with the colour and size when called in brush() via left clicking the mouse.
  constructor(x, y, c, s) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.c = c;
  }
  display() {
    fill(this.c);
    stroke(this.c);
    ellipse(this.x, this.y, this.s);
  }

}

