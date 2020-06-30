let WIDTH, HEIGHT, CENTER;

let positions = [];

// this variable will hold our shader object
let theShader;
// this variable will hold our webcam video
let cam;

function preload(){
  // load the shader
  theShader = loadShader('assets/webcam.vert', 'assets/webcam.frag');
}

function setup () {
  WIDTH = 400
  HEIGHT = 400
  CENTER = [createVector(WIDTH/2, HEIGHT/2)]
  positions.push(createVector(WIDTH/2, HEIGHT/2))
  createCanvas(WIDTH, HEIGHT, WEBGL)
  background(128);
  cam = createCapture(VIDEO);
  cam.size(710, 400);
  cam.hide();
}

function draw () {
  clear();
  shader(theShader);

   // passing cam as a texture
  theShader.setUniform('tex0', cam);

  x = mouseX - width/2
  y = mouseY - height/2
  for(position of positions) {
    circle(position.x, position.y, 10, 10)
    ellipse(x, y, 20, 20);

  }
  normalMaterial()
  beginShape(TRIANGLE_STRIP);
  for(let j = 1; j < positions.length; j++) {
    // let pos3 = positions[j];
    // let pos4 = positions[j-1];
    // for(let i = 1; i < positions.length; i++) {
    //   let pos1 = positions[i];
    //   let pos2 = positions[i-1];
    //   line(pos1.x, pos1.y, pos2.x, pos2.y)
    //   let dis = dist(pos1.x, pos1.y, pos2.x, pos2.y)
    //   line(pos3.x, pos3.y, pos1.x, pos1.y)
    //   line(pos4.x, pos4.y, pos1.x, pos1.y)
    //   line(pos4.x, pos4.y, pos2.x, pos2.y)
    // }
    let pos3 = positions[j];
    let pos4 = positions[j-1];
    for(let i = 1; i < positions.length; i++) {
      let pos1 = positions[i];
      let pos2 = positions[i-1];
      vertex(pos1.x, pos1.y);
      vertex(pos2.x, pos2.y)
      vertex(pos3.x, pos3.y);
      vertex(pos4.x, pos4.y)
      //sphere(pos1.x, 10);
      //let dis = dist(pos1.x, pos1.y, pos2.x, pos2.y)
    }
    endShape()
  }
  let radius = width * 1.5;
  orbitControl();

  for (let i = 0; i <= 12; i++) {
    for (let j = 0; j <= 12; j++) {
      push();
      let a = (j / 12) * PI;
      let b = (i / 12) * PI;
      translate(
        sin(2 * a) * radius * sin(b),
        (cos(b) * radius) / 2,
        cos(2 * a) * radius * sin(b)
      );
      if (j % 2 === 0) {
        cone(30, 30);
      } else {
        box(30, 30, 30);
      }
      pop();
    }
  }
}


function mousePressed() {
  
  x = mouseX - width/2
  y = mouseY - height/2
  
  positions.push(createVector(x, y))
  console.log(positions)
}

function mouseMoved() {
}

function keyPressed() {
  console.log(mouseX, mouseY, keyCode)
  switch(keyCode) {
  case 65: // A
    camera(0, 0, (height/2.0) / tan(PI*30.0 / 180.0), tan(100), 0, 0, 0, 2, 0);
    //camera(0, 0, 0, 0, 0, 0, 0, 0.1, 0);
    break;
  case 87: // W
    break;
  case 83: // S
    break;
  case 68: // D
    camera(0, 0, 0, 0, 0, 0, 0, -1, 0);
    break;

  }
}
