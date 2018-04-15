function hover(){

  // d3.selectAll(".alcohol_use").on("mouseover", function(){
  //   d3.selectAll(".alcohol_use").style("opacity", 1);
  //   d3.selectAll("#alcohol_info").style("display", "block");
  // })
  // d3.selectAll(".alcohol_use").on("mouseout", function(){
  //   d3.selectAll(".alcohol_use").style("opacity", 0.5);
  //   d3.selectAll("#alcohol_info").style("display", "none");
  // })
  //
  //
  //
  // d3.selectAll(".marijuana_use").on("mouseover", function(){
  //   d3.selectAll(".marijuana_use").style("opacity", 1);
  //   d3.selectAll("#marijuana_info").style("display", "block");
  // })
  // d3.selectAll(".marijuana_use").on("mouseout", function(){
  //   d3.selectAll(".marijuana_use").style("opacity", 0.5);
  //   d3.selectAll("#marijuana_info").style("display", "none");
  // })
  //
  //
  //
  // d3.selectAll(".cocaine_use").on("mouseover", function(){
  //   d3.selectAll(".cocaine_use").style("opacity", 1);
  //   d3.selectAll("#cocaine_info").style("display", "block");
  // })
  // d3.selectAll(".cocaine_use").on("mouseout", function(){
  //   d3.selectAll(".cocaine_use").style("opacity", 0.5);
  //   d3.selectAll("#cocaine_info").style("display", "none");
  // })
  //
  //
  //
  //
  //
  //
  // d3.selectAll(".heroin_use").on("mouseover", function(){
  //   d3.selectAll(".heroin_use").style("opacity", 1);
  //   d3.selectAll("#heroin_info").style("display", "block");
  //
  // })
  // d3.selectAll(".heroin_use").on("mouseout", function(){
  //   d3.selectAll(".heroin_use").style("opacity", 0.5);
  //   d3.selectAll("#heroin_info").style("display", "none");
  // })
  //
  //
  //
  // d3.selectAll(".hallucinogen_use").on("mouseover", function(){
  //   d3.selectAll(".hallucinogen_use").style("opacity", 1);
  //   d3.selectAll("#hallucinogen_info").style("display", "block");
  //
  // })
  // d3.selectAll(".hallucinogen_use").on("mouseout", function(){
  //   d3.selectAll(".hallucinogen_use").style("opacity", 0.5);
  //   d3.selectAll("#hallucinogen_info").style("display", "none");
  // })
  //
  //
  //
  // d3.selectAll(".inhalant_use").on("mouseover", function(){
  //   d3.selectAll(".inhalant_use").style("opacity", 1);
  //   d3.selectAll("#inhalant_info").style("display", "block");
  //
  // })
  // d3.selectAll(".inhalant_use").on("mouseout", function(){
  //   d3.selectAll(".inhalant_use").style("opacity", 0.5);
  //   d3.selectAll("#inhalant_info").style("display", "none");
  // })
  //
  //
  //
  // d3.selectAll(".pain_reliever_use").on("mouseover", function(){
  //   d3.selectAll(".pain_reliever_use").style("opacity", 1);
  //   d3.selectAll("#pain_reliever_info").style("display", "block");
  //
  // })
  // d3.selectAll(".pain_reliever_use").on("mouseout", function(){
  //   d3.selectAll(".pain_reliever_use").style("opacity", 0.5);
  //   d3.selectAll("#pain_reliever_info").style("display", "none");
  //
  // })
  //
  //
  //
  // d3.selectAll(".oxycontin_use").on("mouseover", function(){
  //   d3.selectAll(".oxycontin_use").style("opacity", 1);
  //   d3.selectAll("#oxycontin_info").style("display", "block");
  //
  // })
  // d3.selectAll(".oxycontin_use").on("mouseout", function(){
  //   d3.selectAll(".oxycontin_use").style("opacity", 0.5);
  //   d3.selectAll("#oxycontin_info").style("display", "none");
  //
  // })
  //
  //
  //
  // d3.selectAll(".tranquilizer_use").on("mouseover", function(){
  //   d3.selectAll(".tranquilizer_use").style("opacity", 1);
  //   d3.selectAll("#tranquilizer_info").style("display", "block");
  //
  // })
  // d3.selectAll(".tranquilizer_use").on("mouseout", function(){
  //   d3.selectAll(".tranquilizer_use").style("opacity", 0.5);
  //   d3.selectAll("#tranquilizer_info").style("display", "none");
  //
  // })
  //
  //
  //
  // d3.selectAll(".stimulant_use").on("mouseover", function(){
  //   d3.selectAll(".stimulant_use").style("opacity", 1);
  //   d3.selectAll("#stimulant_info").style("display", "block");
  //
  // })
  // d3.selectAll(".stimulant_use").on("mouseout", function(){
  //   d3.selectAll(".stimulant_use").style("opacity", 0.5);
  //   d3.selectAll("#stimulant_info").style("display", "none");
  // })
  //
  //
  //
  // d3.selectAll(".meth_use").on("mouseover", function(){
  //   d3.selectAll(".meth_use").style("opacity", 1);
  //   d3.selectAll("#meth_info").style("display", "block");
  //
  // })
  // d3.selectAll(".meth_use").on("mouseout", function(){
  //   d3.selectAll(".meth_use").style("opacity", 0.5);
  //   d3.selectAll("#meth_info").style("display", "none");
  //
  // })
  //
  //
  //
  // d3.selectAll(".sedative_use").on("mouseover", function(){
  //   d3.selectAll(".sedative_use").style("opacity", 1);
  //   d3.selectAll("#sedative_info").style("display", "block");
  // })
  // d3.selectAll(".sedative_use").on("mouseout", function(){
  //   d3.selectAll(".sedative_use").style("opacity", 0.5);
  //   d3.selectAll("#sedative_info").style("display", "none");
  // })
  //


  var drug_use = ["alcohol", "marijuana", "cocaine",
  "heroin", "hallucinogen", "inhalant", "pain_reliever",
  "oxycontin", "tranquilizer", "stimulant", "meth",
  "sedative"];

  drug_use.forEach(function(element){
    d3.selectAll("." + element + "_use").on("mouseover", function(){
      select(element);
       // d3.selectAll("." + element + "_use").style("opacity", 1);
       // d3.selectAll("#" + element + "_info").style("display", "block");
     })
    // d3.selectAll("." + element + "_use").on("mouseout", function(){
    //   d3.selectAll("." + element + "_use").style("opacity", 0.5);
    //   d3.selectAll("#" + element + "_info").style("display", "none");
    // })

  });

  function select(choice){
    drug_use.forEach(function(element){
      if(element===choice){
        d3.selectAll("." + element + "_use").style("opacity", 1);
        d3.selectAll("#" + element + "_info").style("display", "block");
      }
      else{
        d3.selectAll("." + element + "_use").style("opacity", 0.5);
        d3.selectAll("#" + element + "_info").style("display", "none");
      }
    });
  }

}
