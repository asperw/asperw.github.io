// create WEBGL Earth and moon
// coordinate system
//  | z    / y
//  |    /
//  |  /
//  |/_________ x
var earthTexture;
var tilt;

var moonTexture;

var earthRadius;

var windowWidth;
var windowHeight;

function preload(){
  earthTexture = loadImage("images/earth_texture.jpg");
  moonTexture = loadImage("images/moon_texture.jpg");
}

function setup(){
  windowWidth = window.innerWidth;
  windowHeight = document.body.clientHeight;

  createCanvas(windowWidth, windowHeight, WEBGL);

  //http://read.pudn.com/downloads103/sourcecode/windows/opengl/423828/Solar_System/image/earth__.jpg
  //earthTexture = loadImage("images/earth_texture.jpg");
  tilt = radians(23.44);

  //http://www.solarsystemscope.com/nexus/textures/texture_pack/assets/preview_moon.jpg
  //moonTexture = loadImage("images/moon_texture.jpg");

  earthRadius = 20;

  pointLight(255, 255, 255, 0, 0, 0);

  noFill();
  noStroke();
}

function draw(){

  // coordinate system
  //  | z    / y
  //  |    /
  //  |  /
  //  |/_________ x

  background(0);

  // camera positioning
  rotateX(-PI / 3);
  translate(0, (1500 / (-windowWidth / 1000)));

  // Earth
  push();
  // stand it up
  rotateX(PI / 2 + tilt);
  rotateY(0.02 * frameCount);
  texture(earthTexture);
  sphere(earthRadius);
  pop();

  // moon
  push();
  // moving around the Earth in a circle
  translate((60 * earthRadius) * -sin(0.0005 * frameCount), (60 * earthRadius) * cos(0.0005 * frameCount));
  texture(moonTexture);
  sphere(0.2724 * earthRadius);
  pop();

  /*
  //orbit test geometry
  push();
  //rotateX(-0.01 * frameCount);
  //rotateY(-0.01 * frameCount);
  //rotateZ(-0.01 * frameCount);
  ambientMaterial(250);
  torus(60 * earthRadius, 1);
  pop();

  push();
  rotateZ(PI / 2);
  //rotateZ(-0.01 * frameCount);
  ambientMaterial(250);
  cylinder(1, 120 * earthRadius);
  pop();

  //from Earth to moon
  push();
  //rotateZ(-0.01 * frameCount);
  ambientMaterial(250);
  cylinder(1, 120 * earthRadius);
  pop();
  */
}

function windowResized(){
  windowWidth = window.innerWidth;
  windowHeight = document.body.clientHeight;

  resizeCanvas(windowWidth, windowHeight);
}
