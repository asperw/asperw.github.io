//10 print background

let x = 0;
let y = 0;
let spacing = 20;

//called once on window load
function setup() {
    windowWidth = window.innerWidth;
    //windowHeight = document.body.clientHeight;
    windowHeight = window.innerHeight;

    var canvas = createCanvas(windowWidth, windowHeight);

    canvas.parent("sketch-holder");
    canvas.id("background-canvas");

    //console.log("http:asperw.io");
}

function draw() {

    stroke(255);

    if (random(1) < 0.5) {
        line(x, y, x + spacing, y + spacing);
    } else {
        line(x, y + spacing, x + spacing, y);
    }

    x += spacing;

    if (x > width) {
        x = 0;
        y += spacing;
    }
}

function windowResized() {
    windowWidth = window.innerWidth;
    windowHeight = document.body.clientHeight;

    resizeCanvas(windowWidth, windowHeight);

    x = y = 0;
}

function mousePressed() {
    windowWidth = window.innerWidth;
    windowHeight = document.body.clientHeight;

    resizeCanvas(windowWidth, windowHeight)

    clear();

    x = y = 0;
}