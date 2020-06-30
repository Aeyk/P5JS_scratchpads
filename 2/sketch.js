let WIDTH, HEIGHT, CENTER;

let positions = [];

function setup () {
  WIDTH = windowWidth / 1.2
  HEIGHT = windowHeight / 1.2
  CENTER = [createVector(WIDTH/2, HEIGHT/2)]
  positions.push(createVector(WIDTH/2, HEIGHT/2))
  createCanvas(WIDTH, HEIGHT)
  background(128);
}

function draw () {
  clear();
  let x1 = map(mouseX, 0, WIDTH, 0, WIDTH)
  let x2 = map(mouseY, 0, HEIGHT, 0, HEIGHT)
  circle(x1, x2, 10, 10)
  for(position of positions) {
    circle(position.x, position.y, 10, 10)
  }
  for(let j = 1; j < positions.length; j++) {
    let pos3 = positions[j];
    let pos4 = positions[j-1];
    for(let i = 1; i < positions.length; i++) {
      let pos1 = positions[i];
      let pos2 = positions[i-1];
      line(pos1.x, pos1.y, pos2.x, pos2.y)
      let dis = dist(pos1.x, pos1.y, pos2.x, pos2.y)
      line(pos3.x, pos3.y, pos1.x, pos1.y)
      line(pos4.x, pos4.y, pos1.x, pos1.y)
    }

    
  }
}


function mouseClicked() {
  positions.push(createVector(mouseX, mouseY))
  console.log(positions)
}
