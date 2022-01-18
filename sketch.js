var x;
var cols, rows;
var w = 40;
var grid = [];
var current;
var stack = [];

function setup() {

  createCanvas(400, 400);
  cols = floor(width / w);
  rows = floor(width / w);

  // frameRate(5);

  for (var j = 0; j < rows; j++) {
    for (var i = 0; i < cols; i++) {
      var cell = new Cell(i, j); //generate new cell with i,j
      grid.push(cell); //add cell object to grid array
    }
  }
  current = grid[0];

}

function draw() {
  background(0);

  for (var i = 0; i < grid.length; i++) {
    grid[i].show();
  }

  current.visited = true; //here's our current cell we're on
  current.highlight();
  var next = current.checkNeighbors(); //STEP 1
  if (next) {
    next.visited = true;

    //STEP 3
    removeWalls(current, next);


    current = next; //STEP 4

    stack.push(current);
  }

}


function Cell(i, j) {
  //i is cols, j is rows
  this.i = i;
  this.j = j;
  this.walls = [true, true, true, true];
  this.visited = false;

  this.highlight = function(){
    var x = this.i*w;
    var y = this.j*w;
    noStroke();
    // fill(0, 255, 255, 200);
    // rect(x, y, w, w);
  }

  this.checkNeighbors = function() { //in a cell

    var neighbors = []; //create array of its neighbors

    var top = grid[index(i, j - 1)];
    var right = grid[index(i + 1, j)];
    var bottom = grid[index(i, j + 1)];
    var left = grid[index(i - 1, j)];

    if (top && !top.visited) //check if they're visited
      neighbors.push(top);
    if (right && !right.visited)
      neighbors.push(right);
    if (bottom && !bottom.visited)
      neighbors.push(bottom);
    if (left && !left.visited)
      neighbors.push(left);

    if (neighbors.length > 0) { //choose a random neighbor
      var r = floor(random(0, neighbors.length));
      return neighbors[r];
    } else if(stack.length > 0){
      current = stack.pop(current);
    }

  }


  this.show = function() {
    var x = this.i * w;
    var y = this.j * w;

    stroke(0, 100, 255);
    if (this.walls[0]) line(x, y, x + w, y); //top
    if (this.walls[1]) line(x + w, y, x + w, y + w); //right
    if (this.walls[2]) line(x + w, y + w, x, y + w); //bottom
    if (this.walls[3]) line(x, y + w, x, y); //left

    if (this.visited) {
      noStroke();
      // fill(0, 255, 0, 200);
      // rect(x, y, w, w);
    }
  }
}


function index(i, j) {
  if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
    return -1;
  }
  return i + j * cols;
}

function removeWalls(a, b) {

  var x = a.i - b.i;
  if (x === 1) {
    a.walls[3] = false;
    b.walls[1] = false;
  } else if (x === -1) {
    a.walls[1] = false;
    b.walls[3] = false;
  }

  var y = a.j - b.j;

  if (y === 1) {
    a.walls[0] = false;
    b.walls[2] = false;
  } else if (y === -1) {
    a.walls[2] = false;
    b.walls[0] = false;
  }
}
