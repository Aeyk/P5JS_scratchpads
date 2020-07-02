let server_url = 'http://localhost:8000/all'

let WIDTH;
let HEIGHT;  
let CONTEXT;
let CANVAS;
let word_length_max = 13;
let past_words = [];

let kongFont;




function preload() {
  kongFont = loadFont('./kongtext.otf');
}


function setup () {

  WIDTH = windowWidth
  HEIGHT = windowHeight

  background(0);
  
  filter(BLUR, 12);
  CANVAS = createCanvas(WIDTH, HEIGHT)
  CANVAS.mousePressed(e => {
    fetch(server_url)
      .then(response => response.json())
      .then(json => json.filter(e => e.length >= 3))
      .then(json => {
	past_words.push([json.shuffle()[0],
			 mouseX, 
			 mouseY])

      })
  })
  CONTEXT = document.querySelector("canvas").getContext('2d')
  
  textSize(24)
  textFont(kongFont);

  
}

function draw () {
  clear();
  background(0)

  push();
  for(let i=150; i>0; i-=5){
    CONTEXT.shadowOffsetX = cos(radians(5*i))*3;
    CONTEXT.shadowOffsetY = sin(radians(5*i))*3;
    CONTEXT.shadowBlur = min(i,5);
    CONTEXT.shadowColor = "green";
  }
  pop();

  
  fill(0, random(255)+156, 0);
  for(past_word of past_words) {
    if(past_word[2] >= HEIGHT)
      past_word[2] = ((-HEIGHT) / 2);
    past_word[2] += 10
    translate(width / 2, height / 2);
    rotate(PI / 2);

    text(past_word[0], past_word[2], past_word[1])
  }
}

function update_words_position() {
  for(past_word of past_words) {
    past_word = [past_word[0], past_word[1] += 1, past_word[2]]
  }
}

function mouseClicked() {
}


Array.prototype.shuffle = function() {
  var i = this.length, j, temp;
  if ( i == 0 ) return this;
  while ( --i ) {
    j = Math.floor( Math.random() * ( i + 1 ) );
    temp = this[i];
    this[i] = this[j];
    this[j] = temp;
  }
  return this;
}
