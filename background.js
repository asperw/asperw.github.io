//drawing hexagons in Javascript

var grid;

var numColumns;
var barWidth;
var numRows;

var radius;
var diameter;

var windowWidth;
var canvasHeight;

var palletLength = 5;
var pallet = ["#2D384A", "#81A2D6", "#53688A", "#5B7297", "#445570"]
//var pallet = ["#2E2E2E", "#ADE8AD", "#5F7F5F", "#BEFFBE", "#304030", "#ABE5AB"];
//var pallet = ["#2E2E2E", "#7F7F7F", "#FFFFFF", "#404040", "#BFBFBF", "#ADE8AD", "#E0FFE4"];

function getRandom(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

//called once on window load
function setup(){
    windowWidth = window.innerWidth;
    canvasHeight = document.body.clientHeight;

    var canvas = createCanvas(windowWidth, canvasHeight); //size(1440, 900);

    canvas.parent("sketch-holder");
    canvas.id("background-canvas");

    smooth();
    //noStroke();
    stroke("#333333");

    radius = int(height / 67); //so there will be 50ish along the height
    diameter = radius * 2;

    //setting length and width of 2-d array of hexagons
    numColumns = int(width / (sqrt(3) * radius)) + 2;
    numRows = int(height / (.75 * diameter)) + 2;

    barWidth = int((0.2 * windowWidth) / diameter) + 1;

    //create grid of hexagons object
    grid = new Grid(numColumns, numRows, radius);

    initials(); //set initial colors randomly

    grid.display();

    frameRate(10);
    //console.log("http:asperw.me");
}

function draw(){
    //grid.display();

    //randomly pick 15 hexagons from the grid and randomly assign them a new color
    for(var i = 0; i < 50; i++){
        var selected = grid.randomHexagon();
        //selected.lerpTheColor(selected);
        selected.setFillColor(pallet[getRandom(0, palletLength)]);
        selected.display();
    }
}

function initials(){
    //randomly set initial color of the hexagons
    for(var i = 0; i < numRows; i++){
        for(var j = 0; j < barWidth; j++){
            var selected = grid.getHexagon(j, i);
            selected.setFillColor(pallet[getRandom(0, palletLength)]);
        }
        for(var k = numColumns - barWidth; k < numColumns; k++){
            var selected = grid.getHexagon(k, i);
            selected.setFillColor(pallet[getRandom(0, palletLength)]);
        }
    }
}

function Hexagon(center, radius){
    this.c = "#2E2E2E"; //set initial color - we shouldn't see this

    this.r = radius;
    this.x = center[0];
    this.y = center[1];

    this.angle = 6.28 / 6;
    this.startAngle = 3.14 / 6;

    this.display = function(){

        //noStroke();
        fill(this.c);

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

    this.setFillColor = function(setColor){
        this.c = setColor;
    }

    /*
    this.lerpTheColor = function(selection){
        this.selection = selection;
        this.oldColor = color(selection.c);
        console.log(this.oldColor);
        this.newColor = color(pallet[getRandom(0, palletLength)]);
        console.log(this.newColor);
        for(var i = 0; i < 4; i++){
            this.c = lerpColor(this.oldColor, this.newColor, i * 0.33);
            selection.display();
        }
    }
    */
}

function Grid(numColumns, numRows, radius){

    this.columns = numColumns;
    this.rows = numRows;
    this.r = radius;
    this.hexagons = []; //Hexagon[][] hexagons;

    this.selector;
    this.row;

    for(var i = 0; i < numColumns; i++){
        this.hexagons[i] = new Array(numRows);
    }

    //starts the first hexagon at the corner of the canvas
    this.center = [0, 0];
    this.mid = [width, 0];

    for(var i = 0; i < this.rows; i++){
        for(var j = 0; j < this.columns; j++){
            if(j < barWidth){
                //create a new hexagon with center center
                this.hexagons[j][i] = new Hexagon(this.center, this.r);
                //add the width of the hexagon to the x-coordinate of the center
                this.center[0] += (this.r * sqrt(3));
            }else if(j >= this.columns - barWidth){
                this.hexagons[j][i] = new Hexagon(this.mid, this.r);

                this.mid[0] -= (this.r * sqrt(3));
            }
        }
        //add the height spacing to the y-coordinate of the center
        this.center[1] += (this.r * 3) / 2;
        this.mid[1] += (this.r * 3) / 2;

        //if the row number is divisible by two, bump the first center in the row
        if(i % 2 == 0){
            this.center[0] = (sqrt(3) / 2) * this.r;
            this.mid[0] = width - ((sqrt(3) / 2) * this.r);
        }else{
            this.center[0] = 0;
            this.mid[0] = width;
        }
    }

    this.display = function(){
        for(var i = 0; i < this.rows; i++){
            for(var j = 0; j < this.columns; j++){
                if(j < barWidth || j >= this.columns - barWidth){
                    this.hexagons[j][i].display();
                }
            }
        }
    }

    //for getting a hexagon from the grid
    this.getHexagon = function (column, row){
        this.column = int(column);
        this.row = int(row);
        return this.hexagons[this.column][this.row];
    }
    this.randomHexagon = function(){
        this.selector = getRandom(0, 2);
        this.row = getRandom(0, this.rows);

        if(this.selector == 0){
            return this.getHexagon(getRandom(0, barWidth), this.row);
        }else{
            return this.getHexagon(getRandom(this.columns - barWidth, this.columns), this.row);
        }
    }
}

function windowResized(){
    windowWidth = window.innerWidth;
    canvasHeight = document.body.clientHeight;

    radius = int(height / 67);
    diameter = radius * 2;

    resizeCanvas(windowWidth, canvasHeight);

    numColumns = int(width / (sqrt(3) * radius)) + 2;
    numRows = int(height / (.75 * diameter)) + 2;

    barWidth = int((0.2 * windowWidth) / diameter) + 1;

    grid = new Grid(numColumns, numRows, radius);

    initials();

    grid.display();
}
