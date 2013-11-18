function GeoChart() {
 
        var GeoChart;
        var mydata=[];
    $(document).ready(function () {
      $("#seedselect").change(function() {
      mydata = [];
        requestData($(this).val());
    });
     Csonv.separators.column = "|";
     Csonv.separators.array  = "/";
   var jsonobj = "libs/treaties.csv".toObjects();
     //load mydata
  function requestData(data) {
    $.ajax({
      url: 'http://localhost:3000'+data,
      type: "GET",
      dataType: "json",
      success: function(seed) {
        var jsonobj = seed;
        var obj = jQuery.parseJSON(jsonobj);
        for(i=0;i<obj.length;i++)
          {
            mydata.push(parseInt(obj[i].country)); 
          }
        
          //Chart
        var parseDate = d3.time.format("%Y-%m-%d").parse,
    formatDate = d3.time.format("%x");

var width = 960,
    height = 500;

var projection = d3.geo.naturalEarth()
    .scale(167)
    .translate([width / 2, height / 2])
    .precision(.1);

var color = d3.scale.linear()
    .domain([new Date(1900, 0, 1), new Date(2000, 0, 1)])
    .range(["purple", "orange"])
    .clamp(true)
    .interpolate(d3.interpolateHcl);
   
var path = d3.geo.path()
    .projection(projection);
//create SVG object
var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

svg.append("defs").append("path")
    .datum({type: "Sphere"})
    .attr("id", "sphere")
    .attr("d", path);

svg.append("use")
    .attr("class", "stroke")
    .attr("xlink:href", "#sphere");

svg.append("use")
    .attr("class", "fill")
    .attr("xlink:href", "#sphere");


function ready(error, world, treaties) {
  var treatiesById = d3.nest()
      .key(function(d) { return d.id; })
      .sortValues(function(a, b) { return a.date - b.date; })
      .map(treaties, d3.map);
      .data(obj);

  var country = svg.insert("g", ".graticule")
      .attr("class", "land")
    .selectAll("path")
      .data(topojson.feature(world, world.objects.countries).features)
    .enter().append("path")
      .attr("d", path);

  country.filter(function(d) { return d.id === 840; })
      .style("fill", "#000")
    .append("title")
      .text("United States");

  country.filter(function(d) { return treatiesById.has(d.id); })
      .style("fill", function(d) { return color(treatiesById.get(d.id)[0].date); })
    .append("title")
      .text(function(d) {
        var treaties = treatiesById.get(d.id);
        return treaties[0].name + "\n" + treaties.map(function(d) { return formatDate(d.date); }).join("\n");
      });

  svg.insert("path", ".graticule")
      .datum(topojson.mesh(world, world.objects.countries, function(a, b) { return a !== b; }))
      .attr("class", "boundary")
      .attr("d", path);
}

function type(d) {
  d.id = +d.id;
  d.date = parseDate(d.date);
  return d;
}

d3.select(self.frameElement).style("height", height + "px");
      },

            
      
    });
  }
});
    
