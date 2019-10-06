d3.csv("data.csv").then(function(hdata) {
  hdata.forEach(function(d) {
    d.name = d.Heroes
    d.title = d.name
    d.value = +d["Times picked"]
    d.group = d.Stats
    d.winrate = +d.Wins / d.value
  });

});
