trace1 = {
  x: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], 
  y: ['30', '20', '20', '20', '40', '40', '20', '50', '50', '60', '50', '60', null, null, null, null, null, null, null, null, 8724, 10291, 12345, 11874], 
  marker: {
    color: 'rgb(131, 191, 202)', 
    line: {
      color: 'rgb(9, 127, 150)', 
      width: 2
    }
  }, 
  name: 'Community', 
  opacity: 0.8, 
  type: 'bar', 
  uid: 'b46848', 
  xsrc: 'chrisisk:5:0139b0', 
  ysrc: 'chrisisk:5:ab61ad'
};
trace2 = {
  x: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], 
  y: ['30', '20', '20', '20', '50', '50', '30', '10', '30', '20', '20', '20', '', '', '', '', null, null, 12348, 10532], 
  marker: {
    color: 'rgb(136, 146, 192)', 
    line: {
      color: 'rgb(16, 38, 132)', 
      width: 2
    }
  }, 
  name: 'Licence', 
  opacity: 0.8, 
  type: 'bar', 
  uid: '67c879', 
  visible: true, 
  xsrc: 'chrisisk:5:0139b0', 
  ysrc: 'chrisisk:5:e4cf15'
};
trace3 = {
  x: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], 
  y: ['50', '10', '30', '20', '20', '20', '50', '50', '40', '10', '30', '20', '', '', '', '', '', null, null, 10061], 
  marker: {
    color: 'rgb(233, 126, 189)', 
    line: {
      color: 'rgb(215, 10, 130)', 
      width: 2
    }
  }, 
  name: 'Custody', 
  opacity: 0.8, 
  type: 'bar', 
  uid: 'da3ac3', 
  visible: true, 
  xaxis: 'x', 
  xsrc: 'chrisisk:5:0139b0', 
  yaxis: 'y', 
  ysrc: 'chrisisk:5:3120df'
};
data = [trace1, trace2, trace3];
layout = {
  autosize: true, 
  bargap: 0.35, 
  bargroupgap: 0, 
  barmode: 'stack', 
  height: 472, 
  legend: {
    x: 0.35039602189, 
    y: -0.219941619821, 
    orientation: 'h', 
    traceorder: 'normal'
  }, 
  margin: {
    r: 0, 
    t: 40, 
    b: 60, 
    l: 50, 
    pad: 0
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
  title: 'Caseload Breakdown', 
  xaxis: {
    autorange: true, 
    domain: [0, 1], 
    fixedrange: true, 
    range: [-0.5, 11.5], 
    title: '2016', 
    type: 'category'
  }, 
  yaxis: {
    autorange: true, 
    domain: [0, 1], 
    exponentformat: 'SI', 
    fixedrange: true, 
    range: [0, 126.315789474], 
    showexponent: 'last', 
    title: 'Utilisation %', 
    type: 'linear'
  }
};
Plotly.plot('plotly-div-bar', {
  data: data,
  layout: layout
});