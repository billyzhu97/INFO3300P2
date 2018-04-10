/*
Code used from: https://bl.ocks.org/mbhall88/b2504f8f3e384de4ff2b9dfa60f325e2
*/

function donutChart() {

  //sets default variables that were passed in
  var width, height,
  margin = {top: 10, right: 10, bottom: 10, left: 10},
  colour = d3.scaleOrdinal(d3.schemeCategory10),
  variable, category, padAngle, cornerRadius
  floatFormat = d3.format('.4r'),
  percentFormat = d3.format(',.2%');

  //generates the chart
  function chart(selection){
    selection.each(function(data) {
      var radius = Math.min(width, height) / 2;

      // creates a new pie generator
      var pie = d3.pie()
      .value(function(d) { return floatFormat(d[variable]); })
      .sort(null);

      // contructs an arc generator. This will be used for the donut. The difference between outer and inner
      // radius will dictate the thickness of the donut
      var arc = d3.arc()
      .outerRadius(radius * 0.8)
      .innerRadius(radius * 0.6)
      .cornerRadius(cornerRadius)
      .padAngle(padAngle);

      // this arc is used for aligning the text labels
      var outerArc = d3.arc()
      .outerRadius(radius * 0.9)
      .innerRadius(radius * 0.9);
      // ===========================================================================================

      // ===========================================================================================
      // append the svg object to the selection
      var svg = selection.append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');
      // ===========================================================================================

      // ===========================================================================================
      // g elements to keep elements within svg modular
      svg.append('g').attr('class', 'slices');
      svg.append('g').attr('class', 'labelName');
      svg.append('g').attr('class', 'lines');

      svg.append('circle')
      .attr('class', 'initial_circle')
      .attr('r', radius * 0.55) // radius of tooltip circle
      .style('fill', '#416d9c') // colour based on category mouse is over
      .style('fill-opacity', 0.35);

      svg.append('text')
      .attr('class', 'initial_text')
      .attr('dy', 0) // hard-coded. can adjust this to adjust text vertical alignment in tooltip
      .html('42194 people were killed by drugs in 2012') // add text to the circle.
      .style('font-size', '.9em')
      .style('text-anchor', 'middle'); // centres text in tooltip
      // ===========================================================================================

      // ===========================================================================================
      // add and colour the donut slices
      var path = svg.select('.slices')
      .datum(data).selectAll('path')
      .data(pie)
      .enter().append('path')
      .attr('fill', function(d) { return colour(d.data[category]); })
      .attr('d', arc);
      // ===========================================================================================

      // ===========================================================================================
      // add text labels
      var label = svg.select('.labelName').selectAll('text')
      .data(pie)
      .enter().append('text')
      .attr('dy', '.35em')
      .html(function(d) {
        // add "key: value" for given category. Number inside tspan is bolded in stylesheet.
        return d.data[category] + ': <tspan>' + percentFormat(d.data[variable]) + '</tspan>';
      })
      .attr('transform', function(d) {

        // effectively computes the centre of the slice.
        // see https://github.com/d3/d3-shape/blob/master/README.md#arc_centroid
        var pos = outerArc.centroid(d);

        // changes the point to be on left or right depending on where label is.
        pos[0] = radius * 0.95 * (midAngle(d) < Math.PI ? 1 : -1);
        return 'translate(' + pos + ')';
      })
      .style('text-anchor', function(d) {
        // if slice centre is on the left, anchor text to start, otherwise anchor to end
        return (midAngle(d)) < Math.PI ? 'start' : 'end';
      });
      // ===========================================================================================

      // ===========================================================================================
      // add lines connecting labels to slice. A polyline creates straight lines connecting several points
      var polyline = svg.select('.lines')
      .selectAll('polyline')
      .data(pie)
      .enter().append('polyline')
      .attr('points', function(d) {

        // see label transform function for explanations of these three lines.
        var pos = outerArc.centroid(d);
        pos[0] = radius * 0.95 * (midAngle(d) < Math.PI ? 1 : -1);
        return [arc.centroid(d), outerArc.centroid(d), pos]
      });
      // ===========================================================================================

      // ===========================================================================================
      // add tooltip to mouse events on slices and labels
      d3.selectAll('.labelName text, .slices path').call(toolTip);
      // ===========================================================================================

      // ===========================================================================================
      // Functions

      // calculates the angle for the middle of a slice
      function midAngle(d) { return d.startAngle + (d.endAngle - d.startAngle) / 2; }

      // function that creates and adds the tool tip to a selected element
      function toolTip(selection) {

        // add tooltip (svg circle element) when mouse enters label or slice
        selection.on('mouseenter', function (data) {

          d3.selectAll('.initial_text').remove();

          svg.append('text')
          .attr('class', 'toolCircle')
          .attr('dy', -15) // hard-coded. can adjust this to adjust text vertical alignment in tooltip
          .html(toolTipHTML(data)) // add text to the circle.
          .style('font-size', '.9em')
          .style('text-anchor', 'middle'); // centres text in tooltip

          svg.append('circle')
          .attr('class', 'toolCircle')
          .attr('r', radius * 0.55) // radius of tooltip circle
          .style('fill', colour(data.data[category])) // colour based on category mouse is over
          .style('fill-opacity', 0.35);

        });

        // remove the tooltip when mouse leaves the slice/label
        selection.on('mouseout', function () {
          d3.selectAll('.toolCircle').remove();

          svg.append('text')
          .attr('class', 'initial_text')
          .attr('dy', 0) // hard-coded. can adjust this to adjust text vertical alignment in tooltip
          .html('42194 people were killed by drugs in 2012') // add text to the circle.
          .style('font-size', '.9em')
          .style('text-anchor', 'middle'); // centres text in tooltip
        });
      }

      // function to create the HTML string for the tool tip. Loops through each key in data object
      // and returns the html string key: value
      function toolTipHTML(data) {

        var tip = '',
        i   = 0;

        for (var key in data.data) {

          // if value is a number, format it as a percentage

          var value;
          if(key=="Percentage"){
            value = percentFormat(data.data[key])
          }
          else{
            value = data.data[key];
          }

          // leave off 'dy' attr for first tspan so the 'dy' attr on text element works. The 'dy' attr on
          // tspan effectively imitates a line break.
          if (i === 0) tip += '<tspan x="0">' + key + ': ' + value + '</tspan>';
          else tip += '<tspan x="0" dy="1.2em">' + key + ': ' + value + '</tspan>';
          i++;
        }

        return tip;
      }
      // ===========================================================================================

    });
  }

  // getter and setter functions. See Mike Bostocks post "Towards Reusable Charts" for a tutorial on how this works.
  chart.width = function(value) {
    width = value;
    return chart;
  };

  chart.height = function(value) {
    height = value;
    return chart;
  };

  chart.margin = function(value) {
    margin = value;
    return chart;
  };

  chart.radius = function(value) {
    radius = value;
    return chart;
  };

  chart.padAngle = function(value) {
    padAngle = value;
    return chart;
  };

  chart.cornerRadius = function(value) {
    cornerRadius = value;
    return chart;
  };

  chart.colour = function(value) {
    colour = value;
    return chart;
  };

  chart.variable = function(value) {
    variable = value;
    return chart;
  };

  chart.category = function(value) {
    category = value;
    return chart;
  };

  return chart;
}
