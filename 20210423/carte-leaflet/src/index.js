import L from 'leaflet'
import arbres from './arbres.json'
import batiments from './batiments.json'

const map = L.map('map').setView([46.4609, 6.8647], 25)

L.tileLayer('https://tile.osm.ch/switzerland/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	bounds: [[45, 5], [48, 11]]
  }).addTo(map)

const icon = L.icon({
  iconUrl: 'https://heig-datavis-2021.surge.sh/carte-leaflet/arbre.png',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
})

arbres.map(d => {
  const [lon, lat] = d
  L.marker([lat, lon], { icon }).addTo(map)
})

L.geoJSON(
  batiments,
  {
    style: feature =>
      feature.properties['name'] === 'Centre Saint-Roch'
        ? { color: 'indianred' }
        : { color: 'steelblue' },
    onEachFeature: (feature, layer) =>
      layer.bindPopup(feature.properties.name || feature.properties['addr:street'] || feature.properties.uid)
      
  },
).addTo(map)