//drawing hexagons in Javascript

var grid;
var numColumns;
var numRows;
var radius;
var diameter;

var canvasHeight;

//var pallet = ["#452123", "#567244", "#321321", "#987342", "#232783"];

function setup(){
    canvasHeight = document.body.clientHeight - height - 4;

    var canvas = createCanvas(window.innerWidth, canvasHeight); //size(1440, 900);

    canvas.parent("sketch-holder");

    canvas.id("background-canvas");

    //smooth();
    fill("#2e2e2e")
    stroke("#222222");

    radius = 15;
    diameter = radius * 2;

    //setting length and width of 2-d array of hexagons
    numColumns = int(width / (sqrt(3) * radius)) + 1;
    numRows = int(height / (.75 * diameter)) + 1;

    //create grid of hexagons object
    grid = new Grid(numColumns, numRows, radius);

    /*
    //randomly set initial color of the hexagons
    for(var i = 0; i < numColumns; i++){
        for(var j = 0; j < numRows; j++){
            var selected = grid.getHexagon(i, j);
            selected.setFillColor(pallet[random(5)]);
        }
    }
    */

    grid.display();

    frameRate(1);
}

function draw(){
    grid.display();

    //randomly pick 15 hexagons from the grid and randomly assign them a new color
    /*
    for(var i = 0; i < 15; i++){
        var selected = grid.getHexagon(random(numColumns), random(numRows));
        selected.setFillColor(pallet[random(5)]);
    }
    */
}

function Hexagon(center, radius){
    //this.c;

    this.r = radius;
    this.x = center[0];
    this.y = center[1];

    this.angle = 6.28 / 6;
    this.startAngle = 3.14 / 6;

    /*
    constructor(center, radius){
        this.r = radius;
        this.x = center[0];
        this.y = center[1];
    }
    */

    this.display = function(){
        //noStroke();
        //fill(this.c);

        //arrays of coordinates for beginShape()
        this.vertY = new Array(6); //float[] vertY = new float[6];
        this.vertX = new Array(6); //float[] vertX = new float[6];

        //spinning the circle and calculating the x and y coordinates for the vertices
        for(var i = 0; i < 6; i++){
            angleRad = (this.angle * i) + this.startAngle;
            this.vertX[i] = this.x + (this.r * cos(angleRad));
            this.vertY[i] = this.y + (this.r * sin(angleRad));
        }
        beginShape();
        //console.log("asperw.me");
        vertex(this.vertX[0], this.vertY[0]);
        vertex(this.vertX[1], this.vertY[1]);
        vertex(this.vertX[2], this.vertY[2]);
        vertex(this.vertX[3], this.vertY[3]);
        vertex(this.vertX[4], this.vertY[4]);
        vertex(this.vertX[5], this.vertY[5]);
        endShape(CLOSE);
    }

    /*
    this.setFillColor = function(setColor){
    c = setColor;
    }
    */
}

function Grid(numColumns, numRows, radius){

    this.columns = numColumns;
    this.rows = numRows;
    this.r = radius;
    this.hexagons = []; //Hexagon[][] hexagons;

    for(var i = 0; i < numColumns; i++){
        this.hexagons[i] = new Array(numRows);
    }

    /*
    function Grid(numColumns, numRows, radius){

        this.columns = numColumns;
        this.rows = numRows;
        this.r = radius;
        console.log(numColumns);
    }
    */

    //starts the first hexagon at the corner of the canvas
    this.center = [0, 0];

    for(var i = 0; i < this.rows; i++){
        for(var j = 0; j < this.columns; j++){
            //create a new hexagon with center center
            this.hexagons[j][i] = new Hexagon(this.center, this.r);
            //add the width of the hexagon to the x-coordinate of the center
            this.center[0] += (this.r * sqrt(3));
        }
        //add the height spacing to the y-coordinate of the center
        this.center[1] += (this.r * 3) / 2;

        //if the row number is divisible by two, bump the first center in the row
        if(i % 2 == 0){
            this.center[0] = (sqrt(3) / 2) * this.r;
        }else{
            this.center[0] = 0;
        }
    }

    this.display = function(){
        for(var i = 0; i < this.rows; i++){
            for(var j = 0; j < this.columns; j++){
                this.hexagons[j][i].display();
            }
        }
    }

    /*
    //for getting a hexagon from the grid
    function/*Hexagon getHexagon(/*intcolumn, /*introw){
        return (hexagons[column][row]);
    }
    */
}

function windowResized(){
    canvasHeight = document.body.clientHeight;
    //console.log(canvasHeight);
    resizeCanvas(window.innerWidth, canvasHeight);

    numColumns = int(width / (sqrt(3) * radius)) + 1;
    numRows = int(height / (.75 * diameter)) + 1;

    grid = new Grid(numColumns, numRows, radius);
}
