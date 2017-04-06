trace1 = {
  x: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], 
  y: ['88', '90', '100', '118', '117', '111', '107', '118', '80', '99', '102', '105'], 
  hoverinfo: 'y+name', 
  line: {width: 3.5}, 
  marker: {
    line: {width: -0.5}, 
    size: 9
  }, 
  mode: 'lines+markers', 
  name: 'Medway % Capacity', 
  type: 'scatter', 
  uid: '1f15fb', 
  xsrc: 'chrisisk:13:2e4c95', 
  ysrc: 'chrisisk:13:87e338'
};
trace2 = {
  x: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], 
  y: ['7', '6', '5', '4', '2', '2', '7', '6', '5', '4', '2', '2'], 
  hoverinfo: 'y+name', 
  line: {
    color: 'rgb(31, 119, 180)', 
    dash: 'dot', 
    shape: 'linear', 
    width: 3.5
  }, 
  marker: {
    color: 'rgb(31, 119, 180)', 
    line: {color: 'rgb(31, 119, 180)'}, 
    opacity: 1, 
    size: 9
  }, 
  mode: 'lines+markers', 
  name: 'Medway % Reduction', 
  type: 'scatter', 
  uid: '8ff319', 
  xsrc: 'chrisisk:13:2e4c95', 
  ysrc: 'chrisisk:13:2dee79'
};
trace3 = {
  x: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], 
  y: ['105', '107', '102', '105', '111', '102', '105', '107', '111', '117', '118', '118'], 
  line: {
    color: 'rgb(227, 119, 194)', 
    width: 3.5
  }, 
  marker: {
    color: 'rgb(227, 119, 194)', 
    line: {color: 'rgb(227, 119, 194)'}, 
    size: 9
  }, 
  mode: 'lines+markers', 
  name: 'Maidstone % Capacity', 
  type: 'scatter', 
  uid: 'a83a75', 
  xsrc: 'chrisisk:13:2e4c95', 
  ysrc: 'chrisisk:13:263bc7'
};
trace4 = {
  x: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], 
  y: ['5', '9', '16', '14', '10', '8', '3', '6', '9', '7', '16', '14'], 
  line: {
    dash: 'dot', 
    width: 3
  }, 
  marker: {
    color: 'rgb(227, 119, 194)', 
    line: {color: 'rgb(227, 119, 194)'}, 
    size: 9
  }, 
  mode: 'lines+markers', 
  name: 'Maidstone % Reduction', 
  type: 'scatter', 
  uid: '67538b', 
  xsrc: 'chrisisk:13:2e4c95', 
  ysrc: 'chrisisk:13:c35985'
};
data = [trace1, trace2, trace3, trace4];
layout = {
  autosize: true, 
  dragmode: 'pan', 
  hovermode: 'closest', 
  legend: {
    x: 0, 
    y: -0.13230448952, 
    borderwidth: 0, 
    font: {size: 12}, 
    orientation: 'h'
  }, 
  margin: {
    r: 0, 
    t: 70, 
    b: 40, 
    l: 50
  }, 
  shapes: [
    {
      fillcolor: 'rgb(109, 206, 250)', 
      line: {
        color: 'rgba(68, 68, 68, 100)', 
        dash: 'dot', 
        width: 1
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
    domain: [0, 1], 
    fixedrange: true, 
    mirror: false, 
    nticks: 0, 
    range: [-0.665000979816, 11.6650009798], 
    showgrid: false, 
    showline: true, 
    showticklabels: true, 
    side: 'bottom', 
    ticks: 'outside', 
    title: '2016', 
    titlefont: {size: 15}, 
    type: 'category', 
    zeroline: true, 
    zerolinewidth: 11
  }, 
  yaxis: {
    autorange: true, 
    fixedrange: true, 
    range: [-5.73436526999, 125.73436527], 
    showline: true, 
    ticks: 'outside', 
    title: '% Capacity', 
    type: 'linear'
  }
};
Plotly.plot('plotly-div-line-team-combined', {
  data: data,
  layout: layout
});