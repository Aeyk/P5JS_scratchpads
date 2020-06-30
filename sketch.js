
let WIDTH; 
let HEIGHT; 
let nodes = [];

function setup () {
  WIDTH = windowWidth/1.2;
  HEIGHT = windowHeight/1.2;

  createCanvas(WIDTH, HEIGHT);

}

function draw () {
  background(128);
  for(node of nodes) {
    node.draw();
  }
}

function mouseClicked() {
  nodes.push(new Node())
  console.log(nodes)
}

class Node {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.xv = 10
    this.yv = 10
  }
  draw() {
    fill(255);
    this.inBounds(0, 0, WIDTH, HEIGHT)
    this.x += this.xv
    this.y += this.yv
    circle(this.x, this.y, 50, 50)
  }
  inBounds(x1, y1, x2, y2) {
    if(this.x < x1)
      this.xv += 10
    
    if(this.y < y1)
      this.yv += 10

    if(this.x > x2)
      this.xv -= 10
    
    if(this.y > y2)
      this.yv -= 10
  }
}
