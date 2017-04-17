//create WEBGL Earth and moon
//coordinate system
//  | z    / y
//  |    /
//  |  /
//  |/_________ x
var earthTexture;
var tilt;

var moonTexture;
var orbitalInclination;

var starsTexture;

var earthRadius;

var windowWidth;
var windowHeight;

function setup(){
    windowWidth = window.innerWidth;
    windowHeight = document.body.clientHeight;

    createCanvas(windowWidth, windowHeight, WEBGL);

    //http://read.pudn.com/downloads103/sourcecode/windows/opengl/423828/Solar_System/image/earth__.jpg
    earthTexture = loadImage("images/earth_texture.jpg");
    tilt = radians(23.44);

    //http://www.solarsystemscope.com/nexus/textures/texture_pack/assets/preview_moon.jpg
    moonTexture = loadImage("images/moon_texture.jpg");
    orbitalInclination = radians(5.44);

    //http://paulbourke.net/miscellaneous/starfield/2048x1024.png
    starsTexture = loadImage("images/starfield.png");

    earthRadius = 70;

    pointLight(255, 255, 255, 0, 0, 0);

    noFill();
    noStroke();
}

function draw(){

    //coordinate system
    //  | z    / y
    //  |    /
    //  |  /
    //  |/_________ x

    background(0);

    //camera positioning
    //position the whole thing so we see it axially
    rotateX(-PI / 2);
    //rotate the whole thing by a small amount to see Earth and moon
    rotateZ(-PI / 96);

    //Earth
    push();
    //Earth is pushed into the screen 52 Earth radii, will add to 60 with moon
    translate(0, -52 * earthRadius);
    //stand it up
    rotateX(PI / 2 + tilt);
    rotateY(0.02 * frameCount);
    texture(earthTexture);
    sphere(earthRadius);
    pop();

    //moon
    push();
    //moon is pulled out of the screen 8 Earth radii, adds to 60 with Earth
    translate(0, 8 * earthRadius);
    //stand it up
    rotateX(PI / 2 + orbitalInclination);
    texture(moonTexture);
    sphere(0.2724 * earthRadius);
    pop();

    //stars
    push();
    //centered in Earth-moon system
    translate(0, -22 * earthRadius);
    //stand it up
    rotateX(PI / 2);
    //"moon velocity"
    rotateY(-0.005 * frameCount);
    texture(starsTexture);
    //made sphere detail lower for performance. Default 24, 16
    sphere(60 * earthRadius, 12, 8);
    pop();

    /*
    //orbit test geometry
    push();
    translate(0, -52 * earthRadius);
    //rotateY(0.01 * frameCount);
    ambientMaterial(250);
    torus(60 * earthRadius, 1);
    pop();

    push();
    translate(0, -52 * earthRadius)
    //rotateY(0.01 * frameCount);
    rotateZ(PI / 2);
    ambientMaterial(250);
    cylinder(1, 120 * earthRadius);
    pop();

    //from Earth to moon
    push();
    translate(0, -52 * earthRadius);
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
