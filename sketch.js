var p1; // paragraph 1
var p2; // paragraph 2

var nameInput; // input with the user's name
var nameButton; // button to confirm the user's name

var myCanvas; // canvas

var r1; // rectangle 1
var r2; // rectangle 2
var r3; // rectangle 3
var r4; // rectangle 4
var r5; // rectangle 5
var button1; // button 1 happy
var button2; // button 2 angry
var button3; // button 3 annoyed
var button4; // button 4 talented
var button5; // button 5 spoiled
var button6; // button 6 favourite

var imm1; // image 1
var imm2; // image 2
var imm3; // image 3
var imm4; // image 4
var imm5; // image 5

function preload() {

  // load of the images
  imm1 = loadImage("./assets/dog.jpg");
  imm2 = loadImage("./assets/cat.jpg");
  imm3 = loadImage("./assets/goat.jpg");
  imm4 = loadImage("./assets/cockatoo.jpg");
  imm5 = loadImage("./assets/chimpanzee.jpg");

}

function setup() {

  myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.background("black");

  p1 = createP("What's your name?"); // create a paragraph with a specified position
  p1.position(70, 70);

  nameInput = createInput(""); // create an input with a specified position
  nameInput.position(70, 120);

  nameButton = createButton("Enter"); // create a button with a specified position
  nameButton.position(310, 123);
  nameButton.mousePressed(hiYou); // function called when the button is pressed

}

function draw() {

}

// when this function is called, a new paragraph with the nameInput and 5 rectangles will be created
function hiYou() {
  p2 = createP("Hi " + nameInput.value() + "! How are you feeling today?");
  p2.position(70, 200); // position of the new paragraph
  p2.class("bigger");

  fill("white");
  r1 = rect(70, 280, 200, 200);
  button1 = createButton("Happy");
  button1.position(120, 530);
  button1.mousePressed(happyDogs); // function called when the button is pressed
  button1.mouseOver(immagineUno);

  fill("white");
  r2 = rect(320, 280, 200, 200);
  button2 = createButton("Angry");
  button2.position(370, 530);
  button2.mousePressed(angryCat); // function called when the button is pressed
  button2.mouseOver(immagineDue); // function called when the mouse is over the button

  fill("white");
  r3 = rect(570, 280, 200, 200);
  button3 = createButton("Annoyed");
  button3.position(625, 530);
  button3.mousePressed(spittingGoat); // function called when the button is pressed
  button3.mouseOver(immagineTre); // function called when the mouse is over the button

  fill("white");
  r4 = rect(820, 280, 200, 200);
  button4 = createButton("Talented");
  button4.position(870, 530);
  button4.mousePressed(singingParrots); // function called when the button is pressed
  button4.mouseOver(immagineQuattro); // function called when the mouse is over the button

  fill("white");
  r5 = rect(1070, 280, 200, 200);
  button5 = createButton("Spoiled");
  button5.position(1125, 530);
  button5.mousePressed(showerMonkeys); // function called when the button is pressed
  button5.mouseOver(immagineCinque); // function called when the mouse is over the button

  button6 = createButton("Save your favourite mood");
  button6.position(70, 630);
  button6.class("different");
  button6.mousePressed(printMood);
}

// when these 5 functions are called, new windows appear
function happyDogs() {
  window.open("https://www.youtube.com/watch?v=8XKmAkF8C-U");
}

function angryCat() {
  window.open("https://www.youtube.com/watch?v=FSayxgo-o0w");
}

function spittingGoat() {
  window.open("https://www.youtube.com/watch?v=Dp0Bt2cbcc8");
}

function singingParrots() {
  window.open("https://www.youtube.com/watch?v=7WL9Orh7auA");
}

function showerMonkeys() {
  window.open("https://www.youtube.com/watch?v=CnWGmWbBSsY");
}

// when this 5 functions are called, images appear in the rectangles
function immagineUno() {
  image(imm1, 70, 280);
}

function immagineDue() {
  image(imm2, 320, 280);
}

function immagineTre() {
  image(imm3, 570, 280);
}

function immagineQuattro() {
  image(imm4, 820, 280);
}

function immagineCinque() {
  image(imm5, 1070, 280);
}

function printMood(){
  window.open("index2.html");
}
