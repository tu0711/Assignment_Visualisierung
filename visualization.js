
d3.csv("gapminder.csv").then(function(dataset) {
  const svgWidth = 10000;
  const svgHeight = 10000;
let param = "Average Daily Income";
    


let svg = d3.select("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight)
  .attr("class", "chart");

let chart = svg.selectAll("circle")
.data(dataset)
.enter()
.append("circle")
.attr("cx", function(d) {   
    return d["Average Daily Income"] * 100   ;   // cx aus CSV

    })
.attr("cy", function(d) {
return d["Babies per Woman"] * 100 ; })
.attr("r", "20")
.attr("fill", "red");


  }, function(reason) {
console.log(reason); // Error! In many browsers, press F12 to see the console d3.select("body")
    d3.select("body")
     .append("p")
    .text("Could not load data set. See console for more information."); 
});