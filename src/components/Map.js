import { MapContainer, TileLayer, Polygon, Marker, Polyline } from "react-leaflet";
import borderData from '../data/border.js';
import L from 'leaflet';
// import leafletPip from "leaflet-pip";
import leafletPip from "leaflet-pip";
import { useState } from 'react';


function Map(props) {

  const[NewPoint, setNewPoint] = useState({
    lat: 43.88,
    lng: -72.7317,
    point:[43.88, -72.7317],
    inBounds: 1,
    zoom:8
  })

  const[Start, setStart] = useState(false)

  console.log(NewPoint.point)
  let vtOutline = borderData.geometry.coordinates[0].map(coords => [coords[1], coords[0]])
  
// make a polygon
let polygon = L.geoJson(borderData)

// // max and mins
let x_min = -73.42613118833583;
let x_max = -71.51022535353107;
let y_min = 42.730315121762715;
let y_max = 45.00541896831666;

function randomPoint(props){
// // generating randoms
let lat = y_min + (Math.random() * (y_max - y_min));
let lng = x_min + (Math.random() * (x_max - x_min));
// let results = leafletPip.pointInLayer([-72.7317, 43.88], polygon)
let results = leafletPip.pointInLayer([lng, lat], polygon)
console.log(results.length)
setNewPoint({lat:lat, lng:lng,point: [lat,lng], inBounds: results.length, zoom:18})
// props.setCenter()
console.log(NewPoint.point)

}




  return (

     <div style={{width: "600px", textAlign:"center"}}>
    <MapContainer
      center={props.center}
      // zoom={8}
      zoom={NewPoint.zoom}
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
      {/* <Marker position={props.center} /> */}
      <Marker position={NewPoint.inBounds === 1? NewPoint.point : randomPoint()} /> 
      <Polygon
        positions={vtOutline}
        pathOptions={{ color: "pink", fillOpacity: 0 }}
      />
   
    </MapContainer>

    <button disabled={Start} onClick={()=>{randomPoint(); props.setDisabled();setStart(true)}}>Start</button>
    </div>

  );
}


export default Map;

