var a = prompt("Enter the first number  :  ")

var button1;
var button2;
var button3;


var r = 200;
var g = 200;
var b = 200;



function setup() {

  //creatCanves(1200,1200)

  button1 = createButton("RED");
  button1.position(100,50);
  button1.mousePressed(red_bg)

  button2 = createButton("GREEN");
  button2.position(255,50);
  button2.mousePressed(green_bg);

  button3 = createButton("BLUE");
  button3.position(175,50);
  button3.mousePressed(blue_bg);
  


}



function draw() {
 //background(220);

 rect (10,200,380,190)
 



}

function red_bg()
{
  r = 255;
  g = 0;
  b = 0;
}

function green_bg() 
{
  r = 0;
  g = 255;
  b = 0;
}