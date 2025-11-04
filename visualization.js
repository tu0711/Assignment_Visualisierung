
d3.csv("gapminder.csv").then(function(dataset) {

  

  const svgWidth = 1000;
  const svgHeight = 1000;
  let param = "Average Daily Income";
  let param2 = "Babies per Woman";



  let minVal = d3.min(dataset, d => d[param2]); 
  let maxVal = d3.max(dataset, d => d[param2]);                               // Skalierung von Y Achse 
  let scaleY = d3.scaleLinear().domain([minVal,maxVal]).range([svgHeight, 0]);     // svgHeight und 0 umgekehrt damit 0/0 unten links ist 

    let minValX = d3.min(dataset, d => d[param]); 
  let maxValX = d3.max(dataset, d => d[param]);                                 // Skalierung von X Achse 
  let scaleX = d3.scaleLinear().domain([minValX,maxValX]).range([0, svgWidth]);     


  // AXES 

  const margin = {top: 20, right: 30, bottom: 30, left: 100}; 


let svg = d3.select("svg")
  .attr("width", svgWidth + margin.left + margin.right)  
  .attr("height", svgHeight  + margin.top + margin.bottom)
  .attr("class", "chart");

let chart = svg.append("g")                                                       // aus Vorlesung    
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")")         // aus Vorlesung     
.selectAll("circle")
.data(dataset)
.enter()
.append("circle")
.attr("cx", function(d) {   
    return scaleX(d[param]);    // cx aus CSV / Average Income 
    })
.attr("cy", function(d) {

return scaleY(d[param2]) ; })   // cy aus CSV / Babies per Woman 
.attr("r", "20" )               // 20 als Platzhalter, Verhältniss zur Population nicht codiert 
.attr("fill", "red");


  }, function(reason) {
console.log(reason); // Error! In many browsers, press F12 to see the console d3.select("body")
    d3.select("body")
     .append("p")
    .text("Could not load data set. See console for more information."); 
  
});