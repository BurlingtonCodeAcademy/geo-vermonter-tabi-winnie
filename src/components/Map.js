import {
  MapContainer,
  TileLayer,
  Polygon,
  Marker,
  Polyline,
} from "react-leaflet";
import borderData from "../data/border.js";
import L from "leaflet";
import leafletPip from "leaflet-pip";
import { useState, useEffect } from "react";
import ChangeView from "./ChangeView.js";
import GeoCashing from "./GeoCashing";

function Map(props) {
  // state for random point
  const [NewPoint, setNewPoint] = useState({
    lat: 43.88,
    lng: -72.7317,
    point: [43.88, -72.7317],
    inBounds: 1,
    zoom: 8,
    // ATTEMPTED POLYLINE LOL
    // positions:[{
    //   from_lat: " 43.88,",
    //   from_long: "-72.7317",
    //   id: "132512",
    //   to_lat: " 43.85",
    //   to_long: "-72.7217",
    // },
    // {
    //   from_lat: " 43.85",
    //   from_long: "-72.7217",
    //   id: "132513",
    //   to_lat: " 43.83",
    //   to_long: "-72.7217",
    // }]
  });

  const [tempFetch, setTempFetch] = useState({}); //  state for sending county and village to status bar
  const [Start, setStart] = useState(false); // state for if start button is pressed
  const [MarkerState, setMarkerState] = useState([43.88, -72.7317]); // attempt at setting marker and not moving it

  // import vt outline coordinates
  let vtOutline = borderData.geometry.coordinates[0].map((coords) => [
    coords[1],
    coords[0],
  ]);

  // function to generate random points
  function points() {
    // make a polygon
    let polygon = L.geoJson(borderData);
    // max and mins
    let x_min = -73.42613118833583;
    let x_max = -71.51022535353107;
    let y_min = 42.730315121762715;
    let y_max = 45.00541896831666;
    // random lat and long
    let lat = y_min + Math.random() * (y_max - y_min);
    let lng = x_min + Math.random() * (x_max - x_min);
    // is point in bounds
    let results = leafletPip.pointInLayer([lng, lat], polygon);

    return { lat, lng, results };
  }

  //  function to set random point if inbounds on start
  function randomPoint() {
    let point = points();

    while (point.results.length === 0) { // if the new point called is not within the bounds of the state, call a new random point (that is within the bounds).
      point = points();
    }
    setNewPoint({
      lat: point.lat,
      lng: point.lng,
      point: [point.lat, point.lng],
      inBounds: point.results.length,
      zoom: 18,
    }); // not super sure this works exactly right, dont think it worries about if its in bounds or out of bounds .. but

    // NewPoint.inBounds === 1
    //   ? 
    setMarkerState([point.lat, point.lng])
      // : setMarkerState([""]);
    
  }

  // send data to app.js to update "center" state
  function sendData() {
    props.handleCallback(NewPoint.point);
    props.marker(NewPoint.point);
  }
  sendData(); // send random point to app.js

  // when something happens, update the newpoint point and set the directional back to false
  function updatePoint() {
    setNewPoint({ point: props.center });
    props.setDirectional(false);
  }

  // if something happens and the directional state that comes form app.js is true, that means a directional button is pressed and we need to update the point to the new position.. otherwise do nothing
  useEffect(() => {
    if (props.directional) {
      updatePoint();
    } else {
      return false;
    }
  });

  props.fetch(tempFetch); //keep sending location data down line

  return (
    <div style={{ width: "600px", textAlign: "center" }}>
      <MapContainer
        center={props.center} //center from app.js
        zoom={8}
        scrollWheelZoom={true}
        doubleClickZoom={false}
        zoomControl={false}
        touchZoom={false}
        style={{ height: "600px", width: "600px", textAlign: "center" }}
      >
        {/* <Polyline color="#220bb9" positions={[
              [NewPoint.positions.from_lat,  NewPoint.positions.from_long], [NewPoint.positions.to_lat, NewPoint.positions.to_long],
            ]} /> */}
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
        />
        {/*this is the original marker position */}
        <Marker position={MarkerState} />
        {/*this position is based on the randomly generated point..and only moves if it is in the state of vermont */}
        <Polygon
          positions={vtOutline}
          pathOptions={{ color: "pink", fillOpacity: 0 }}
        />
        <ChangeView center={NewPoint.point} zoom={NewPoint.zoom} />
        <GeoCashing /* reverse fetch the town and county */
          NewPoint={NewPoint}
          start={Start}
          tempFetch={setTempFetch}
        />
      </MapContainer>
      {/* the start button: disabled is equal to state(Start), defaults to false.. changes to true when pressed */}
      <button
        disabled={Start}
        onClick={() => {
          randomPoint();
          props.setDisabled(false);
          setStart(true);
        }}
      >
        Start
      </button>
      {/* when clicked, random point is generated, the other buttons are re-enabled and the start button is disabled */}
    </div>
  );
}

export default Map;

//
