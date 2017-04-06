trace1 = {
  x: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], 
  y: ['88', '90', '100', '118', '117', '111', '107', '118', '80', '99', '102', '105'], 
  hoverinfo: 'x+y', 
  line: {width: 3.5}, 
  marker: {
    line: {width: -0.5}, 
    size: 9
  }, 
  mode: 'lines+markers', 
  name: 'Capacity %', 
  type: 'scatter', 
  uid: '1f15fb', 
  xsrc: 'chrisisk:3:2e4c95', 
  ysrc: 'chrisisk:3:87e338'
};
data = [trace1];
layout = {
  autosize: true, 
  dragmode: 'pan', 
  hovermode: 'closest', 
  legend: {
    x: 0.436873550022, 
    y: -0.208008047869, 
    borderwidth: 0, 
    font: {size: 12}, 
    orientation: 'h'
  }, 
  margin: {
    r: 0, 
    t: 40, 
    b: 60, 
    l: 50
  }, 
  shapes: [
    {
      fillcolor: 'rgb(109, 206, 250)', 
      line: {
        color: 'rgba(68, 68, 68, 100)', 
        dash: 'dot', 
        width: 2
      }, 
      opacity: 0.3, 
      type: 'rectangle', 
      x0: 0, 
      x1: 1, 
      xref: 'paper', 
      y0: 90, 
      y1: 110, 
      yref: 'y'
    }
  ], 
  showlegend: true, 
  title: 'Caseload Capacity', 
  xaxis: {
    autorange: true, 
    fixedrange: true, 
    mirror: false, 
    nticks: 0, 
    range: [-0.665000979816, 11.6650009798], 
    showgrid: false, 
    showline: true, 
    side: 'bottom', 
    ticks: 'outside', 
    title: '2016', 
    titlefont: {size: 15}, 
    type: 'category', 
    zeroline: false, 
    zerolinewidth: 11
  }, 
  yaxis: {
    autorange: false, 
    fixedrange: true, 
    range: [0, 120], 
    ticks: 'inside', 
    title: 'Capacity %', 
    type: 'linear'
  }
};
Plotly.plot('plotly-div-line', {
  data: data,
  layout: layout
});