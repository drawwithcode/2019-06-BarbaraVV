var myCanvas2; // canvas 2

var p1; // paragraph 1
var p2; // paragraph 2
var p3; // paragraph 3
var p4; // paragraph 4
var p5; // paragraph 5

var imm1; // image 1
var imm2; // image 2
var imm3; // image 3
var imm4; // image 4
var imm5; // image 5

var button1; // button 1 happy
var button2; // button 2 angry
var button3; // button 3 annoyed
var button4; // button 4 talented
var button5; // button 5 spoiled

function preload() {

  // load of the images
  imm1 = loadImage("./assets/dog.jpg");
  imm2 = loadImage("./assets/cat.jpg");
  imm3 = loadImage("./assets/goat.jpg");
  imm4 = loadImage("./assets/cockatoo.jpg");
  imm5 = loadImage("./assets/chimpanzee.jpg");

}

function setup() {

  myCanvas2 = createCanvas(windowWidth, windowHeight);
  myCanvas2.background("blue");

}

function draw() {

  p1 = createP("I'm happy"); // create a new paragraph
  p1.position(135, 230); // position of the new paragraph
  image(imm1, 70, 280);
  button1 = createButton("Save");
  button1.position(120, 530);
  button1.mousePressed(printImage1); // print the image when this function is called

  p2 = createP("I'm angry"); // create a new paragraph
  p2.position(380, 230); // position of the new paragraph
  image(imm2, 320, 280);
  button2 = createButton("Save");
  button2.position(370, 530);
  button2.mousePressed(printImage2); // print the image when this function is called

  p3 = createP("I'm annoyed"); // create a new paragraph
  p3.position(625, 230); // position of the new paragraph
  image(imm3, 570, 280);
  button3 = createButton("Save");
  button3.position(625, 530);
  button3.mousePressed(printImage3); // print the image when this function is called

  p4 = createP("I'm talented"); // create a new paragraph
  p4.position(870, 230); // position of the new paragraph
  image(imm4, 820, 280);
  button4 = createButton("Save");
  button4.position(870, 530);
  button4.mousePressed(printImage4); // print the image when this function is called

  p5 = createP("I'm spoiled"); // create a new paragraph
  p5.position(1125, 230); // position of the new paragraph
  image(imm5, 1070, 280);
  button5 = createButton("Save");
  button5.position(1125, 530);
  button5.mousePressed(printImage5); // print the image when this function is called

}

// when this 5 functions are called, the images will be downloaded
function printImage1() {
  imm1.save("imm1", "jpg");
}

function printImage2() {
  imm2.save("imm2", "jpg");
}

function printImage3() {
  imm3.save("imm3", "jpg");
}

function printImage4() {
  imm4.save("imm4", "jpg");
}

function printImage5() {
  imm5.save("imm5", "jpg");
}
