import { MapContainer, TileLayer, Polygon, Marker, Polyline } from "react-leaflet";
import borderData from '../data/border.js';
import L from 'leaflet';
// import leafletPip from "leaflet-pip";
import leafletPip from "leaflet-pip";

function Map(props) {
  let vtOutline = borderData.geometry.coordinates[0].map(coords => [coords[1], coords[0]])
  
  
// make a polygon
  let polygon = L.vtOutline
  console.log(polygon)

// max and mins
let x_min = -73.42613118833583;
let x_max = -71.51022535353107;
let y_min = 42.730315121762715;
let y_max = 45.00541896831666;

// generating randoms
let lat = y_min + (Math.random() * (y_max - y_min));
let lng = x_min + (Math.random() * (x_max - x_min));
 
// console.log(leafletPip.pointInLayer([lng,lat], vtOutline))

  return (

    <div style={{width: "600px", textAlign:"center"}}>
    <MapContainer
      center={props.center}
      zoom={8}
      scrollWheelZoom={true}
      doubleClickZoom={false}
      zoomControl={false}
      touchZoom={false}
      style={{ height: "600px", width: "600px", textAlign: "center" }}
    >
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
      />
      <Marker position={props.center} />
      <Polygon
        positions={vtOutline}
        pathOptions={{ color: "pink", fillOpacity: 0 }}
      />
    </MapContainer>

    </div>

  );
}


export default Map;

// // define the function
// randomPointInPoly = function(polygon) {
//   var bounds = polygon.getBounds(); 
//   var x_min  = bounds.getEast();
//   var x_max  = bounds.getWest();
//   var y_min  = bounds.getSouth();
//   var y_max  = bounds.getNorth();

//   var lat = y_min + (Math.random() * (y_max - y_min));
//   var lng = x_min + (Math.random() * (x_max - x_min));

//   var point  = turf.point([lng, lat]);
//   var poly   = polygon.toGeoJSON();
//   var inside = turf.inside(point, poly);

//   if (inside) {
//       return point
//   } else {
//       return randomPointInPoly(polygon)
//   }
// }

// // create a poly
// var polygon = L.polygon([
//   [51.509, -0.08],
//   [51.503, -0.06],
//   [51.51, -0.047]
// ]).addTo(map);

// // get a geojson point from the function
// var point = randomPointInPoly(polygon);

// // .. or add it to the map directly from the result
// L.geoJson(randomPointInPoly(polygon)).addTo(map);