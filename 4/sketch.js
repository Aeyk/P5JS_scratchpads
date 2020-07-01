function setup () {
  createCanvas(windowWidth / 1.2, windowHeight / 1.5)
  background(128);
}

function draw () {
  let x1 = 0;
  let y1 = height - 5;

  let x2 = (width / 2) - 5;
  let y2 = 0;

  let x3 = width - 5;
  let y3 = height - 5;
    
  triangle(x1, y1, x2, y2, x3, y3)

  let d = int(dist(0, height,
		   width / 2, 0))
  push();

  translate((x1 + x2) / 3, (y1 + y2) / 3);
    text(nfc(d, 1), 0, -5);

  pop();
  
  
  fill(255)
}

function triangleSimple(x, y, w, h){
    // A wrapper for standard triangle() command. 
    // triangleSimple has the lower left corner as x,y 
    triangle(x,y,
    x+w/2, y-h,
    x+w, y);
}


function mouseClicked() {
  clear()
  fill(0);
  text(`${parseInt(mouseX)}\n${parseInt(mouseY)}`, mouseX, mouseY)
}
