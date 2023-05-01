//Create a world cloud based on themes/key words from Angie Thomas' works, randomly generated





//FIRST EXAMPLE CODE:
// List of words
const myWords = ["hidden truths", "family", "fatherhood", "loyalty", "hip hop", "riots", "black lives matter", "police brutality", "freedom of speech", "dreams", "betrayal", "shooting", "social tension", "friendship", "new possibilies", "young love", "black joy", "sparkling romance", "creativity", "unique stories"]

// set the dimensions and margins of the graph
var margin = {top: 10, right: 10, bottom: 10, left: 10},
    width = 1450 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;

// append the svg object to the body of the page
// What is an svg and why does it need to be apended? 
var svg = d3.select("#word-cloud").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Constructs a new cloud layout instance. It run an algorithm to find the position of words that suits your requirements
var layout = d3.layout.cloud()
  .size([width, height])
  .words(myWords.map(function(d) { return {text: d}; }))
  .padding(15)
  .fontSize(80)
  .on("end", draw);
layout.start();

// This function takes the output of 'layout' above and draw the words
// Better not to touch it. To change parameters, play with the 'layout' variable above
function draw(words) {
  const colors = ['#FF0000', '#F0C345','#574E96','#000000','#41521F'];
  svg
    .append("g")
      .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
      .selectAll("text")
        .data(words)
      .enter().append("text")
        .style("font-size", function(d) { return d.size + "px"; })
        .attr("text-anchor", "middle")
        //.style("fill", colors)
        .style("fill", "#A80A09")
        .style("font-family", "Bebas Neue")
        .attr("transform", function(d) {
          return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
        .text(function(d) { return d.text; });
}




//Links to help:
//https://codesandbox.io/s/d3js-7tsni?file=/src/word-cloud.js
//https://www.tutorialsteacher.com/d3js/setup-d3js-development-environment






