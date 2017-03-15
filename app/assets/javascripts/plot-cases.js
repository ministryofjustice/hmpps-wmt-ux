trace1 = {
  x: ['12', '10', '10', '20', '10'], 
  y: ['Canterbury', 'Dartford & <br> Gravesham', 'Maidstone', 'Medway', 'South East Kent'], 
  hoverinfo: 'x', 
  name: 'Community <16WK ', 
  orientation: 'h', 
  text: ['12', '10', '10', '20', '10'], 
  textsrc: 'chrisisk:11:492485', 
  type: 'bar', 
  uid: 'ccd732', 
  xsrc: 'chrisisk:11:492485', 
  ysrc: 'chrisisk:11:f8a329'
};
trace2 = {
  x: ['50', '10', '20', '10', '20'], 
  y: ['Canterbury', 'Dartford & <br> Gravesham', 'Maidstone', 'Medway', 'South East Kent'], 
  hoverinfo: 'x', 
  marker: {color: 'rgb(215,48,39)'}, 
  name: 'Licence <16WK', 
  orientation: 'h', 
  text: ['50', '10', '20', '10', '20'], 
  textsrc: 'chrisisk:11:3159d3', 
  type: 'bar', 
  uid: '37661e', 
  xsrc: 'chrisisk:11:3159d3', 
  ysrc: 'chrisisk:11:f8a329'
};
trace3 = {
  x: ['20', '30', '30', '20', '50'], 
  y: ['Canterbury', 'Dartford & <br> Gravesham', 'Maidstone', 'Medway', 'South East Kent'], 
  hoverinfo: 'x', 
  marker: {color: 'rgb(252,141,89)'}, 
  name: 'Total Active Cases', 
  orientation: 'h', 
  text: ['20', '30', '30', '20', '50'], 
  textsrc: 'chrisisk:11:7d33a4', 
  type: 'bar', 
  uid: 'afc4b3', 
  xsrc: 'chrisisk:11:7d33a4', 
  ysrc: 'chrisisk:11:f8a329'
};
trace4 = {
  x: ['10', '10', '30', '30', '50'], 
  y: ['Canterbury', 'Dartford & <br> Gravesham', 'Maidstone', 'Medway', 'South East Kent'], 
  hoverinfo: 'x', 
  marker: {
    color: 'rgb(254,224,144)', 
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
  x: ['6', '10', '10', '10', '20'], 
  y: ['Canterbury', 'Dartford & <br> Gravesham', 'Maidstone', 'Medway', 'South East Kent'], 
  hoverinfo: 'x', 
  marker: {color: 'rgb(224,243,248)'}, 
  name: 'UPW', 
  orientation: 'h', 
  type: 'bar', 
  uid: '964533', 
  xsrc: 'chrisisk:11:e5f2a6', 
  ysrc: 'chrisisk:11:f8a329'
};
trace6 = {
  x: ['10', '30', '20', '20', '20'], 
  y: ['Canterbury', 'Dartford & <br> Gravesham', 'Maidstone', 'Medway', 'South East Kent'], 
  hoverinfo: 'x', 
  marker: {color: 'rgb(145,191,219)'}, 
  name: 'Overdue Terminations', 
  orientation: 'h', 
  type: 'bar', 
  uid: '06b618', 
  xsrc: 'chrisisk:11:d1d342', 
  ysrc: 'chrisisk:11:f8a329'
};
data = [trace1, trace2, trace3, trace4, trace5, trace6];
layout = {
  autosize: true, 
  bargap: 0.07, 
  barmode: 'stack', 
  dragmode: 'zoom', 
  font: {family: 'Open Sans'}, 
  height: 500, 
  hovermode: 'closest', 
  legend: {
    x: 0.0368303571429, 
    y: -0.122331906873, 
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
  titlefont: {family: 'Open Sans'}, 
  width: 996, 
  xaxis: {
    anchor: 'y', 
    autorange: true, 
    domain: [0, 1.01], 
    exponentformat: 'none', 
    gridwidth: 1, 
    nticks: 0, 
    range: [0, 178.947368421], 
    showgrid: false, 
    showline: true, 
    showticklabels: true, 
    side: 'bottom', 
    tickfont: {family: 'Arial'}, 
    ticklen: 5, 
    tickprefix: '', 
    ticks: 'outside', 
    ticksuffix: '', 
    title: 'Cases', 
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