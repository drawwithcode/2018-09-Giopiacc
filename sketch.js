var myMap;
var canvas;
var myLoc;
var mappa = new Mappa('MapboxGL','pk.eyJ1IjoiZ2lvcGlhY2MiLCJhIjoiY2pvems5dmZnMm1rYzNxa2ZrMTNrYXpyeCJ9.DqUHgXdc-7fGBG9EC4hv6Q');

var img;
var img1;
var img2;
var img3;

var duomoLat = 45.4640976;
var duomoLon = 9.1897378;
var coloLat = 41.8902102;
var coloLon = 12.492230899999981;
var fireLat = 43.7792500 ;
var fireLon = 11.2462600;
var napoLat = 40.8563100;
var napoLon = 14.2464100;

var d;

// Lets put all our map options in a single object
var options = {
  lat: duomoLat,
  lng: duomoLon,
  zoom: 8,
  style: 'mapbox://styles/giopiacc/cjozkomvjdnvj2rs1d27flayp',
  pitch : 50
}

var options1 = {
  lat: coloLat,
  lng: coloLon,
  zoom: 8,
  style: 'mapbox://styles/giopiacc/cjozkomvjdnvj2rs1d27flayp',
  pitch : 50
}

var options2 = {
  lat: fireLat,
  lng: fireLon,
  zoom: 8,
  style: 'mapbox://styles/giopiacc/cjozkomvjdnvj2rs1d27flayp',
  pitch : 50
}

var options3 = {
  lat: napoLat,
  lng: napoLon,
  zoom: 8,
  style: 'mapbox://styles/giopiacc/cjozkomvjdnvj2rs1d27flayp',
  pitch : 50
}
function preload(){
  // myLoc = getCurrentPosition();
  img = loadImage('assets/duomo.png');
  img1 = loadImage('assets/colosseo.png');
  img2 = loadImage('assets/firenze.png');
  img3 = loadImage('assets/napoli.png');
  img4 = loadImage('assets/glass.png');

}

function setup(){
  canvas = createCanvas(windowWidth,windowHeight);
  // background(100); let's uncomment this, we don't need it for now

  // Create a tile map with the options declared
  // options.lat = myLoc.latitude;
  // options.lng = myLoc.longitude;

  myMap = mappa.tileMap(options);
  myMap = mappa.tileMap(options1);
  myMap = mappa.tileMap(options2);
  myMap = mappa.tileMap(options3);
  myMap.overlay(canvas);
}

function draw(){

var d = 30;

clear();
var point = myMap.latLngToPixel(duomoLat,duomoLon);
fill(255,0,0);
noStroke();
ellipse(point.x,point.y,d);

var point = myMap.latLngToPixel(coloLat,coloLon);
fill('lightblue');
noStroke();
ellipse(point.x,point.y,d);
//
var point = myMap.latLngToPixel(fireLat,fireLon);
fill(0,255,0);
noStroke();
ellipse(point.x,point.y,d);
//
var point = myMap.latLngToPixel(napoLat,napoLon);
fill('yellow');
noStroke();
ellipse(point.x,point.y,d);

if (mouseIsPressed) {
  var point = myMap.latLngToPixel(duomoLat,duomoLon);
  image(img,point.x,point.y,img.width/3,img.height/3);

  var point = myMap.latLngToPixel(coloLat,coloLon);
  image(img1,point.x,point.y,img.width/3,img.height/3);
  //
  var point = myMap.latLngToPixel(fireLat,fireLon);
  image(img2,point.x,point.y,img.width/3,img.height/3);
  //
  var point = myMap.latLngToPixel(napoLat,napoLon);
  image(img3,point.x,point.y,img.width/3,img.height/3);
}

textAlign(CENTER);
textSize(35);
textStyle(BOLD);
textFont('helvetica');
fill(255);
noStroke();
text('Press the mouse to see best italian places!',width/2+450,height/4-50);

image(img4,mouseX,mouseY,img.width/3,img.height/3);


}
