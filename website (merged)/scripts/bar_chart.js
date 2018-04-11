function hover(){

  var drug_use = [".alcohol_use", ".marijuana_use", ".cocaine_use", ".crack_use",
  ".heroin_use", ".hallucinogen_use", ".inhalant_use", ".pain_reliever_use",
  ".oxycontin_use", ".tranquilizer_use", ".stimulant_use", ".meth_use",
  ".sedative_use"];

  drug_use.forEach(function(element){
    d3.selectAll(element).on("mouseover", function(){
       d3.selectAll(element).style("opacity", 1);
     })
    d3.selectAll(element).on("mouseout", function(){
      d3.selectAll(element).style("opacity", 0.5);
    })

  });
}
