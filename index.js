var xValues = ["mon","tue","wed","thu","fri","sat","sun"];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [0,1.5,2.5,1.2,4.6,3,2],
      borderColor: "red",
      fill: false    
    }]
  },
  options: {
    legend: {display: false}
  }
});