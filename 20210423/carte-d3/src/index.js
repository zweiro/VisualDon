import {
  geoMercator,
  geoPath,
  select,
} from 'd3'
import arbres from './arbres.json'
import batiments from './batiments.json'
import routes from './routes.json'

const WIDTH = 800
const HEIGHT = 450

const projection = geoMercator()
  .fitExtent(
    [[0, 0], [WIDTH, HEIGHT]],
    {
      type: 'Feature',
      geometry: {
        type: 'LineString',
        //  <bounds minlat="46.4604200" minlon="6.8634800" maxlat="46.4616100" maxlon="6.8664900"/>
        coordinates: [[6.863,46.4604], [6.866,46.4616]]}
      }
  )

const pathGenerator = geoPath().projection(projection)

const svg = select('#map').append('svg')
  .attr('viewBox', `0 0 ${WIDTH} ${HEIGHT}`)

  svg.selectAll('path.routes')
  .data(routes)
  .enter()
  .append('path')
  .attr('class', 'routes')
  .attr('d', pathGenerator)
  .attr('stroke', 'tan')
  .attr('fill', 'none')
  .attr('stroke-width', 5)

svg.selectAll('path.batiments')
  .data(batiments)
  .enter()
  .append('path')
  .attr('class', 'batiments')
  .attr('d', pathGenerator)
  .attr('fill', 'black')

svg.selectAll('circle')
  .data(arbres)
  .enter()
  .append('circle')
  .attr('cx', d => projection(d)[0])
  .attr('cy', d => projection(d)[1])
  .attr('r', 10)
  .attr('fill', 'yellowgreen')