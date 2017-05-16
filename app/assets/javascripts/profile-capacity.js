trace1 = {
  x: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  y: ['88', '90', '100', '118', '117', '111', '107', '118', '100', '100', '102', '105'],
  hoverinfo: 'y+name',
  line: {width: 3.5},
  marker: {
    line: {width: -0.5},
    size: 9
  },
  mode: 'lines+markers',
  name: 'Your capacity',
  type: 'scatter',
};

trace2 = {
  x: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  y: ['0', '10', '0', '0', '20', '10', '0', '5', '0', '0', '10', '10'],
  hoverinfo: 'y+name',
  line: {
    shape: 'linear',
    width: 3.5
  },
  marker: {
    opacity: 1,
    size: 9
  },
  mode: 'lines+markers',
  name: 'Your reduction',
  type: 'scatter'
};

trace3 = {
  x: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  y: ['100', '95', '120', '120', '110', '110', '100', '100', '120', '100', '100', '110'],
  hoverinfo: 'y+name',
  line: {
    dash: 'dot',
    shape: 'linear',
    width: 3.5
  },
  marker: {
    opacity: 1,
    size: 9
  },
  mode: 'lines+markers',
  name: 'Medway team average',
  type: 'scatter'
};
data = [trace1, trace2, trace3];
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
    r: 30,
    t: 15,
    b: 30,
    l: 45
  },
  // shapes: [
  //   {
  //     fillcolor: 'rgb(0, 94, 165)',
  //     line: {
  //       color: 'rgba(68, 68, 68, 100)',
  //       dash: 'none',
  //       width: 0
  //     },
  //     opacity: 0.3,
  //     type: 'rectangle',
  //     x0: 0,
  //     x1: 1,
  //     xref: 'paper',
  //     y0: 90,
  //     y1: 110,
  //     yref: 'y'
  //   }
  // ],
  showlegend: true,
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
    title: 'Months 2016',
    titlefont: {size: 16},
    type: 'category',
    zeroline: true,
    zerolinewidth: 11
  },
  yaxis: {
    autorange: true,
    fixedrange: true,
    range: [-5.73436526999, 125.73436527],
    showline: true,
    ticks: 'inside',
    title: 'Percentage (%)',
    titlefont: {size: 16},
    type: 'linear'
  }
};

Plotly.plot('profile-capacity', {
  data: data,
  layout: layout
});
