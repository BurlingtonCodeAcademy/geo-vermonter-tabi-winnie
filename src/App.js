import "./App.css";
import { useState } from "react";
import Modal from "./components/Modal";
import Map from "./components/Map";
import DirectionalButtons from "./components/DirectionalButtons";
import Buttons from "./components/Buttons";

function App() {
  // lol 3 states of the current point.. all updating.. all doing exactly the same thing.. but cant remove anything or it will break
  const [center, setCenter] = useState([43.88, -72.7317]);
  const [tempPoint, setTempPoint] = useState([]);
  const [markerPoint, setMarkerPoint] = useState([]);

  const [score, setScore] = useState(100); //score state
  const [display, setDisplay] = useState(false); // is the modal displayed or not
  const [disabled, setDisabled] = useState(true); // are the buttons disabled or not
  const [directional, setDirectional] = useState(false); // has a directional button been selected
  const [win, setWin] = useState(false); //has someone won?
  const [giveUp, setGiveUp] = useState(false); // has someone given up
  const [fetch, setFetch] = useState({}); // what is the result of the fetch

  console.log(fetch);
  // update score when directionals are used
  function handleScore() {
    setScore(score - 1);
  }

  // handler function for setting center data from randomly generated point in map.js
  function handleCallback(data) {
    setTempPoint(data);
  }

  // attempting to make lat and lon work ... also acts as flag for where we are in the code
  function idk() {
    console.log("why");
  }

  // directionals
  function moveNorth() {
    let tempLat = +(tempPoint[0] + 0.002); //temp number
    setCenter([tempLat, tempPoint[1]]); // set center to that new temp position
    console.log(tempPoint);
  }

  function moveSouth() {
    let tempLat = +(tempPoint[0] - 0.002);
    setCenter([tempLat, tempPoint[1]]);
    console.log(tempPoint);
  }

  function moveWest() {
    let tempLong = +(tempPoint[1] + 0.002);
    setCenter([tempPoint[0], tempLong]);
    console.log(tempPoint);
  }

  function moveEast() {
    let tempLong = +(tempPoint[1] - 0.002);
    setCenter([tempPoint[0], tempLong]);
    console.log(tempPoint);
  }

  return (
    <div style={{ textAlign: "center" }}>
      {/* master div*/}
      <h1>GeoVermont</h1> {/*heading*/}
      {/*should this part be its own component? */}
      <div /* nav bar and status*/
        style={{
          height: "7vh",
          border: "1px solid black",
          textAlign: "center",
        }}
      >
        <a href="https://google.com">
          {" "}
          {/*place holder*/}
          <div>About</div>
        </a>
        <a href="">
          <div>High Score</div>
        </a>
        <div onLoad={idk()} id="text">
          {win || giveUp
            ? `score: ${score} / lat:${markerPoint[0]} / long:${markerPoint[1]} / county: ${fetch.county} / town: ${fetch.village}`
            : `score: ${score} / lat: ? / long: ?/ county: ?/ town: ?`}
        </div>
        {/*status bar*/}
      </div>
      {/*Modal Div*/}
      <div className="modal" style={{ display: "block", position: "fixed" }}>
        {display && (
          <Modal
            display={setDisplay}
            fetched={fetch}
            setWin={setWin}
            setScore={setScore}
            score={score}
          />
        )}
        {/*modal, passed setdisplay function*/}
        <Map /*Map container*/
          setDisabled={setDisabled} /*disable the button*/
          handleCallback={handleCallback} /* bring the point data back*/
          center={center} /*sent the center data to map*/
          directional={directional}
          setDirectional={setDirectional}
          fetch={setFetch}
          marker={setMarkerPoint}
        />
      </div>
      {/* Buttons */}
      <div id="menu">
        <DirectionalButtons
          score={score}
          subtractor={handleScore}
          moveEast={moveEast}
          moveWest={moveWest}
          moveNorth={moveNorth}
          moveSouth={moveSouth}
          setDirectional={setDirectional}
        />
        {/* send the current score and the score handler function*/}
        <Buttons
          setDisabled={setDisabled} /* send disabling buttons handler*/
          disabledState={disabled} /* send buttons disabled state as props*/
          display={
            setDisplay
          } /* set display to true when guess button is clicked */
          giveUp={setGiveUp}
        />
      </div>
    </div>
  );
}

export default App;
