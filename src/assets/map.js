(function(){
var margin ={top: 250, left: 50 , right:50, bottom: 0},

    width = 1160 - margin.left - margin.right ,
    height = 660 - margin.top - margin.bottom;

var projection = d3.geo.mercator()
    .translate([width/2, height/2])
    .scale(150)
   

var svg = d3.select("#map")
    .append("svg")
    .attr("width", width + margin.left+ margin.right)
    .attr("height", height + margin.top+ margin.bottom)
    .append('g')
     .attr("transform", "translate("+ margin.left + "," + margin.top + ")");


var path = d3.geo.path()
    .projection(projection)
    


queue()
    .defer(d3.json, "https://raw.githubusercontent.com/pratms/d3/master/world.topojson")
    .defer(d3.json, "/assets/data.json")
    .await(ready);
 
function ready(error, world, data) {
  if (error) throw error;
 console.log(world)
  console.log(data)
      countries = topojson.feature(world, world.objects.countries).features
      svg.selectAll(".country")
      .data(countries)
      .enter().append("path")
      .attr("class", "country")
      .attr("d", path)
       
       svg.selectAll(".circle")
       .data(data)
       .enter().append("circle")
       .attr("r", 3)
       .attr("cx", function(d){

        var cords = projection([d.long, d.lat])
        return cords[0];
       })
       .attr("cy", function(d){
        var cords = projection([d.long, d.lat])
        return cords[1];
       })


    var rect = svg.selectAll("rect")
                               .data(data)
                               .enter();
                              
    rect.append("rect")
      .attr("x", function(d){
      
        var cords = projection([d.long, d.lat])
        return cords[0]-20;
       })
       .attr("y", function(d){
        var cords = projection([d.long, d.lat])
        return cords[1]-25;
       })
        .attr("class", "rectangle")
        .attr("width", 100)
        .attr("height", 20)
        .style("fill", "black")
        .style("stroke","grey")

    rect.append("text")
           .style("fill", "white")
           .style("font-size", "14px")
           .attr("class", "name")
           .attr("x", function(d){

        var cords = projection([d.long, d.lat])
        return cords[0]+5;
       })
       .attr("y", function(d){
        var cords = projection([d.long, d.lat])
        return cords[1]-10;
       })
  
           .style("style", "label")
           .text(function (d) { return d.name; });


}



})();