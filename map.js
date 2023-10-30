var mapWidth = 1240//620;
var mapHeight = 1600//800;

// Set up projection that the map is using
var mapFrameGeoJSON = JSON.parse(`{"type":"Feature","geometry":{"type":"LineString","coordinates":[[-122.54644297642132,37.989209933976475],[-121.74157680240731,37.19360698897229]]}}`)
var projection = d3.geoConicConformal()
  .parallels([37 + 4 / 60, 38 + 26 / 60])
  .rotate([120 + 30 / 60], 0)
  .fitSize([mapWidth, mapHeight], mapFrameGeoJSON)

// This is the mapping between <longitude, latitude> position to <x, y> pixel position on the map
// projection is a function and it has an inverse:
// projection([lon, lat]) returns [x, y]
// projection.invert([x, y]) returns [lon, lat]
// The base map and the projection function is based on
//  this Observable notebook: https://observablehq.com/@clhenrick/sf-bay-area-basemap-cropped

// Add an SVG element to the DOM
var svg = d3.select('body').append('svg')
  .attr('width', mapWidth)
  .attr('height', mapHeight);

// Add the static PNG map at correct size, assuming map is saved in a subdirectory called `data`
svg.append('image')
  .attr('width', mapWidth)
  .attr('height', mapHeight)
  .attr('xlink:href', 'data/map.png');