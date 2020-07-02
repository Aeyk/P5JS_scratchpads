const fs = require('fs')
const express = require('express')
const path = require('path')
let app = express();
let port = 8000;

let words = ["deadbeaf"]

function setup () {
  words =
    fs.readFileSync("./d34db33f.txt", 'ascii');
  lowCase = []
  for(word of words.split("\n")) {
    lowCase.push(word.toLowerCase())
  }
  words = lowCase;
  //  createCanvas(windowWidth, windowHeight)
  //  background(128);
}

function hexAnagramGenerator(length) {
  return words.sort(() => Math.random() - 0.5)[0]
}

function longLeetFirst() {
  return words.sort((a, b) => b.length - a.length )  
}

setup();

app.get('/kongtext.otf', (req, res) => {
  res.sendFile(path.join(__dirname + '/kongtext.otf'));
})


app.get('/all', (req, res) => {
  res.send(words)
})
  
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/sketch.js', (req, res) => {
  res.sendFile(path.join(__dirname + '/sketch.js'));
})


app.get('/:length', (req, res) => {
  if(typeof parseInt(req.params.length) == 'number') {
    res.send(words.filter(e => e.length == req.params.length))
  }
  
})



app.get('/:length/:id', (req, res) => {
  word = words.filter(e => e.length == req.params.length)[req.params.id]
  res.send(word)
})


app.get('/random/:length', (req, res) => {
  word = words.filter(e => e.length == req.params.length)[Math.random(Infinity) % words.length]
  res.send(words)
})




app.listen(port);
