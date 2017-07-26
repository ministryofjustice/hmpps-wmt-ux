trace1 = {
  x: ['7', '4', '2', '6', '5'],
  y: ['Chris Smith', 'Simon Brown', 'Conor Smitt', 'Tom Sweeney', 'Joe Bloggs'],
  hoverinfo: 'x',
  marker: {color: 'rgb(131, 202, 207)'},
  name: 'Community <16WK',
  orientation: 'h',
  text: ['7', '4', '2', '6', '5'],
  textsrc: 'chrisisk:11:492485',
  type: 'bar',
  uid: 'ccd732',
  xsrc: 'chrisisk:11:492485',
  ysrc: 'chrisisk:11:f8a329'
};
trace2 = {
  x: ['20', '15', '20', '15', '26'],
  y: ['Chris Smith', 'Simon Brown', 'Conor Smitt', 'Tom Sweeney', 'Joe Bloggs'],
  hoverinfo: 'x',
  marker: {color: 'rgb(65, 157, 197)'},
  name: 'Licence <16WK',
  orientation: 'h',
  text: ['20', '15', '20', '15', '26'],
  textsrc: 'chrisisk:11:3159d3',
  type: 'bar',
  uid: '37661e',
  xsrc: 'chrisisk:11:3159d3',
  ysrc: 'chrisisk:11:f8a329'
};
trace3 = {
  x: ['80', '78', '99', '84', '110'],
  y: ['Chris Smith', 'Simon Brown', 'Conor Smitt', 'Tom Sweeney', 'Joe Bloggs'],
  hoverinfo: 'x',
  marker: {color: 'rgb(52, 116, 172)'},
  name: 'Total Active Cases',
  orientation: 'h',
  text: ['80', '78', '99', '84', '110'],
  textsrc: 'chrisisk:11:7d33a4',
  type: 'bar',
  uid: 'afc4b3',
  xsrc: 'chrisisk:11:7d33a4',
  ysrc: 'chrisisk:11:f8a329'
};
trace4 = {
  x: ['69', '42', '30', '10', '10'],
  y: ['Chris Smith', 'Simon Brown', 'Conor Smitt', 'Tom Sweeney', 'Joe Bloggs'],
  hoverinfo: 'x',
  marker: {
    color: 'rgb(30, 48, 130)',
    line: {color: 'rgb(148, 103, 189)'}
  },
  name: 'Active Warrants',
  orientation: 'h',
  type: 'bar',
  uid: '523497',
  xsrc: 'chrisisk:11:cd52f3',
  ysrc: 'chrisisk:11:f8a329'
};
trace5 = {
  x: ['7', '3', '3', '1', '6'],
  y: ['Chris Smith', 'Simon Brown', 'Conor Smitt', 'Tom Sweeney', 'Joe Bloggs'],
  hoverinfo: 'x',
  marker: {color: 'rgb(227, 119, 194)'},
  name: 'UPW',
  orientation: 'h',
  type: 'bar',
  uid: '964533',
  xsrc: 'chrisisk:11:e5f2a6',
  ysrc: 'chrisisk:11:f8a329'
};
trace6 = {
  x: ['5', '6', '2', '9', '2'],
  y: ['Chris Smith', 'Simon Brown', 'Conor Smitt', 'Tom Sweeney', 'Joe Bloggs'],
  hoverinfo: 'x+name',
  marker: {color: 'rgb(214, 39, 40)'},
  name: 'Overdue Terminations',
  orientation: 'h',
  showlegend: true,
  text: ['5', '6', '2', '9', '2'],
  textsrc: 'chrisisk:11:d1d342',
  type: 'bar',
  uid: '06b618',
  xsrc: 'chrisisk:11:d1d342',
  ysrc: 'chrisisk:11:f8a329'
};
data = [trace1, trace2, trace3, trace4, trace5, trace6];
layout = {
  autosize: true,
  bargap: 0.2,
  barmode: 'stack',
  dragmode: 'zoom',
  font: {family: 'Arial'},
  height: 500,
  hovermode: 'y',
  legend: {
    x: -0.0234375,
    y: -0.117923557914,
    bgcolor: '#fff',
    bordercolor: '#444',
    borderwidth: 0,
    font: {
      color: '#444',
      family: 'Arial',
      size: 12
    },
    orientation: 'h',
    traceorder: 'normal',
    xanchor: 'left',
    yanchor: 'top'
  },
  margin: {
    r: 0,
    t: 0,
    b: 0,
    l: 100,
    pad: 5
  },
  plot_bgcolor: 'rgb(255, 255, 255)',
  showlegend: true,
  titlefont: {family: 'Arial'},
  xaxis: {
    anchor: 'y',
    autorange: true,
    domain: [0, 1.01],
    exponentformat: 'none',
    gridwidth: 1,
    nticks: 0,
    range: [0, 197.894736842],
    showgrid: false,
    showline: true,
    showticklabels: true,
    side: 'bottom',
    tickfont: {family: 'Arial'},
    ticklen: 5,
    tickprefix: '',
    ticks: 'outside',
    ticksuffix: '',
    title: 'Number of cases', 
    type: 'linear',
    zeroline: true,
    zerolinewidth: 1
  },
  yaxis: {
    anchor: 'x',
    autorange: true,
    domain: [0.07, 0.97],
    range: [-0.5, 4.5],
    showgrid: false,
    showline: false,

    side: 'left',
    tickfont: {
      family: 'Arial',
      size: 12
    },
    title: 'Click to enter Y axis title',
    type: 'category',
    zeroline: true
  }
};
Plotly.plot('plotly-div-cases', {
  data: data,
  layout: layout
});
