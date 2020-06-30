
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

  for (let i = 0; i < nodes.length; i++) {
    stroke(0, 255, 0);
    point(nodes[i].x, nodes[i].y);
  }
  
  for (let i = 0; i < nodes.length; i++) {
    var node = nodes[i];
    for (let j = 0; j < nodes.length; j++) {
      node.repulsed(nodes[j]);
    }
    node.update();
    node.draw();
  }
  
}

function mouseClicked() {
  nodes.push(new Node())
  console.log(nodes)
}

class Node {
  constructor() {
    this.pos = createVector(width / 2, height / 2)
    this.prev = createVector(width / 2, height / 2);
    this.vel = createVector()
    this.acc = createVector()
    
    this.xv = 1
    this.yv = 1
    this.color = 30;
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(5);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }
  
  show() {
    this.update();
    circle(this.pos[0], this.pos[1], 50, 50)
    circle(this.pos[0], this.pos[1], 50, 50)

 //    this.inBounds(0, 0, WIDTH, HEIGHT)
//     this.x += this.xv
//     this.y += this.yv
// -
  }
  
  repulsed(target) {
    console.log(target, this.pos, p5.Vector.sub)
    console.log(p5.Vector.sub(target, this.pos))
    let force = p5.Vector.sub(target, this.pos.copy());
    var d = force.mag();
    d = constrain(d, 1, 25);
    var G = 50;
    var strength = G / (d * d);
    force.setMag(strength);
    if (d < 20) {
    }
    this.acc.add(force);
  }
  
  inBounds(x1, y1, x2, y2) {
    if(this.x < x1) {
      this.xv += 1
    }
    if(this.y < y1) {
      this.yv += 1
    }

    if(this.x > x2) {
      this.xv -= 1
    }
    
    if(this.y > y2) {
      this.yv -= 1
    }
  }
}
