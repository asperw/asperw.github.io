// create WEBGL Jupiter and moons
// coordinate system
//  | z    / y
//  |    /
//  |  /
//  |/_________ x
var earthTexture;
var earthTilt;

var jupiterTexture;
var jupiterTilt;

var earthRadius;

var windowWidth;
var windowHeight;

function preload(){
  earthTexture = loadImage("images/earth_texture.jpg");
  jupiterTexture = loadImage("images/jupiter_texture.png");
  ioTexture = loadImage("images/io_texture.jpg");
  europaTexture = loadImage("images/europa_texture.jpg");
  ganymedeTexture = loadImage("images/ganymede_texture.jpg");
  callistoTexture = loadImage("images/callisto_texture.jpg");
}

function setup(){
  windowWidth = window.innerWidth;
  windowHeight = document.body.clientHeight;

  createCanvas(windowWidth, windowHeight, WEBGL);

  //http://read.pudn.com/downloads103/sourcecode/windows/opengl/423828/Solar_System/image/earth__.jpg
  //earthTexture = loadImage("images/earth_texture.jpg");
  earthTilt = radians(23.44);

  //http://img10.deviantart.net/6cbc/i/2016/051/0/9/jupiter_texture___voyager_1_by_fargetanik-d9p6c7y.png
  //jupiterTexture = loadImage("images/jupiter_texture.png");
  jupiterTilt = radians(3.13);

  //https://prd-wret.s3-us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/styles/full_width/public/thumbnails/image/figure1.jpg?itok=47NP0RdR
  //ioTexture = loadImage("images/io_texture.jpg");

  //http://paulbourke.net/texture_colour/space/europa.jpg
  //europaTexture = loadImage("images/europa_texture.jpg");

  //http://paulbourke.net/texture_colour/space/ganymede.jpg
  //ganymedeTexture = loadImage("images/ganymede_texture.jpg");

  //http://www.libroesoterico.com/biblioteca/Astrologia/-%20SOFTWARE/Celestia%20Portable/App/Celestia/textures/medres/callisto.jpg
  //callistoTexture = loadImage("images/callisto_texture.jpg");

  earthRadius = 4;

  // Jupiter is 11.209 times the diameter of Earth at the equator
  jupiterRadius = 11.209 * earthRadius;

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
  translate(50, 150);
  // stand it up
  rotateX(PI / 3 + earthTilt);
  rotateY(0.02 * frameCount);
  texture(earthTexture);
  sphere(earthRadius);
  pop();

  // Jupiter
  push();
  // stand it up
  rotateX(PI / 2 + jupiterTilt);
  rotateY(0.01 * frameCount);
  texture(jupiterTexture);
  sphere(jupiterRadius);
  pop();

  // Io
  push();
  // moving around Jupiter in a circle
  translate((5.90 * jupiterRadius) * cos(0.02 * frameCount), (5.90 * jupiterRadius) * sin(0.02 * frameCount));
  texture(ioTexture);
  sphere(0.286 * earthRadius * 2, 12, 8);
  pop();

  // Europa
  push();
  // moving around Jupiter in a circle
  translate((9.39 * jupiterRadius) * cos(0.01 * frameCount), (9.39 * jupiterRadius) * sin(0.01 * frameCount));
  texture(europaTexture);
  sphere(0.245 * earthRadius * 2, 12, 8);
  pop();

  // Ganymede
  push();
  // moving around Jupiter in a circle
  translate((14.97 * jupiterRadius) * -sin(0.005 * frameCount), (14.97 * jupiterRadius) * cos(0.005 * frameCount));
  texture(ganymedeTexture);
  sphere(0.413 * earthRadius * 2, 12, 8);
  pop();

  // Callisto
  push();
  // moving around Jupiter in a circle
  translate((26.33 * jupiterRadius) * sin(0.001 * frameCount), (26.33 * jupiterRadius) * -cos(0.001 * frameCount));
  texture(callistoTexture);
  sphere(0.378 * earthRadius * 2, 12, 8);
  pop();

  /*
  //orbit test geometry
  push();
  ambientMaterial(250);
  torus(5.90 * jupiterRadius, 1);
  torus(9.39 * jupiterRadius, 1);
  torus(14.97 * jupiterRadius, 1);
  torus(26.33 * jupiterRadius, 1);
  pop();
  */
}

function windowResized(){
  windowWidth = window.innerWidth;
  windowHeight = document.body.clientHeight;

  resizeCanvas(windowWidth, windowHeight);
}
