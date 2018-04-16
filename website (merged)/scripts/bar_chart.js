function hover(){

  var drug_use = ["alcohol", "marijuana", "cocaine",
  "heroin", "hallucinogen", "inhalant", "pain_reliever",
  "oxycontin", "tranquilizer", "stimulant", "meth",
  "sedative"];

  drug_use.forEach(function(element){
    d3.selectAll("." + element + "_use").on("mouseover", function(){
      select(element);
     })
  });

  function select(choice){
    drug_use.forEach(function(element){
      if(element===choice){
        d3.selectAll("." + element + "_use").style("opacity", 1);
        //d3.selectAll("#" + element + "_info").style("display", "block");
      }
      else{
        d3.selectAll("." + element + "_use").style("opacity", 0.2);
        //d3.selectAll("#" + element + "_info").style("display", "none");
      }
    });
  }
}

function click(){

  var drug_use = ["alcohol", "marijuana", "cocaine",
    "heroin", "hallucinogen", "inhalant", "pain_reliever",
    "oxycontin", "tranquilizer", "stimulant", "meth",
    "sedative"];
    
    
    drug_use.forEach(function(element){
        d3.select("#clickBox")
        .select("#" + element + "_click")
        .append("rect")
        .attr("id", element + "_rect")
        .attr("fill", "#eee")
        .attr("fill-opacity", "0.2")
        .attr("width", 64)
        .attr("height", 64)
        .on("click", function(){
            
            var current = element + "_rect"
            var active = current.active ? false : true ,
                newDisplay = active ? "block" : "none";

            drug_use.forEach(function(element){
                d3.selectAll("#" + element + "_info").style("display", "none");
            });

            d3.selectAll("#" + element + "_info").style("display", newDisplay);
            
        });
        
    })

    drug_use.forEach(function(element){
        d3.select("#barchart")
        .select("." + element + "_use")
        .on("click", function(){
            
            var current = element + "_use"
            var active = current.active ? false : true ,
                newDisplay = active ? "block" : "none";

            drug_use.forEach(function(element){
                d3.selectAll("#" + element + "_info").style("display", "none");
            });

            d3.selectAll("#" + element + "_info").style("display", newDisplay);
            
        });
        
    })
}

