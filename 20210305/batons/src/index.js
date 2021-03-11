import {
  axisLeft,
  select,
  scaleLinear,
  max,
} from 'd3'

//const fs = require('fs')

//const DATA_FILE = fs.readFileSync('data.json', 'utf-8')
//const DATA = JSON.parse(DATA_FILE);

const DATA = [
  {"canton":"Zürich",
  "value":2296.66},
  {"canton":"Bern",
  "value":2453.04},
  {"canton":"Luzern",
  "value":745.27},
  {"canton":"Uri",
  "value":78.16},
  {"canton":"Schwyz",
  "value":315.21},
  {"canton":"Obwalden",
  "value":94.34},
  {"canton":"Nidwalden",
  "value":77.05},
  {"canton":"Glarus",
  "value":93.53},
  {"canton":"Zug",
  "value":188.8},
  {"canton":"Fribourg",
  "value":693.8},
  {"canton":"Solothurn",
  "value":609.26},
  {"canton":"Basel-Stadt",
  "value":204.63},
  {"canton":"Basel-Landschaft",
  "value":526.24},
  {"canton":"Schaffhausen",
  "value":171.52},
  {"canton":"Appenzell Ausserrhoden",
  "value":173.47},
  {"canton":"Appenzell Innerrhoden",
  "value":55.75},
  {"canton":"St. Gallen",
  "value":1074.44},
  {"canton":"Graubünden",
  "value":764.34},
  {"canton":"Aargau",
  "value":1291.77},
  {"canton":"Thurgau",
  "value":736.36},
  {"canton":"Ticino",
  "value":770.84},
  {"canton":"Vaud",
  "value":1441.32},
  {"canton":"Valais",
  "value":969.13},
  {"canton":"Neuchâtel",
  "value":359.86},
  {"canton":"Genève",
  "value":409.25},
  {"canton":"Jura",
  "value":210.22}];


const WIDTH = 1000
const HEIGHT = 500
const MARGIN = 5
const MARGIN_LEFT = 50
const MARGIN_BOTTOM = 50
const BAR_WIDTH = (WIDTH - MARGIN_LEFT) / DATA.length

const svg = select('body')
  .append('svg')
  .attr('viewBox', `0 0 ${WIDTH} ${HEIGHT}`)

const yScale = scaleLinear()
  .domain([0, max(DATA, d => d.value)])
  .range([HEIGHT - MARGIN_BOTTOM, 0])


const g = svg.append('g')
  .attr('transform', `translate(${MARGIN_LEFT}, 0)`)

g.selectAll('rect')
  .data(DATA)
  .enter()
  .append('rect')
  .attr('x', (d, i) =>  i * BAR_WIDTH)
  .attr('width', BAR_WIDTH - MARGIN)
  .attr('y', d => yScale(d.value))
  .attr('height', d => HEIGHT - MARGIN_BOTTOM - yScale(d.value))
  .attr('fill', 'steelblue')

g.selectAll('text')
  .data(DATA)
  .enter()
  .append('text')
  .text(d => d.canton)
  .attr('x', (d, i) =>  i * BAR_WIDTH + BAR_WIDTH / 2)
  .attr('y', HEIGHT - MARGIN_BOTTOM / 2)
  .attr('text-anchor', 'middle')

g.attr("class", "x axis")
.attr("transform", "translate(0," + height + ")")
.call(xAxis)
.selectAll("text")  
.style("text-anchor", "end")
.attr("dx", "-.8em")
.attr("dy", ".15em")
.attr("transform", "rotate(-65)");

const axisY = axisLeft().scale(yScale)
  .tickFormat(d => `${d / 1000}k`)
  .ticks(5)

svg.append('g')
  .attr('transform', `translate(${MARGIN_LEFT - 3})`)
  .call(axisY)
