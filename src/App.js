import "./App.css";
import { useEffect, useState } from "react";
// import Button from './components/Button'
import Modal from "./components/Modal";
import Map from "./components/Map";
import GeoCashing from "./components/GeoCashing";
import { Handler } from "leaflet";
import DirectionalButtons from "./components/DirectionalButtons";
import Buttons from "./components/Buttons";
import ChangeView from "./components/ChangeView"

function App() {
  const [center, setCenter] = useState([43.88, -72.7317]);
  const [score, setScore] = useState(100);
  const [display, setDisplay] = useState(false);
  const [disabled, setDisabled] = useState(true);


  // update score when directionals are used
  function handleScore() {
    setScore(score - 1);
  }

  // handler function for setting center data from randomly generated point in map.js
  function handleCallback(data) {
    setCenter(data);
  }

  // attempting to make lat and lon work
  function idk(){
    console.log("why");
  }


  return (
    <div style={{ textAlign: "center" }}> {/* master div*/}
      <h1>GeoVermont</h1> {/*heading*/}
      {/*should this part be its own component? */}
      <div  /* nav bar and status*/
        style={{
          height: "7vh",
          border: "1px solid black",
          textAlign: "center",
        }}
      >
        <a href="https://google.com">
          <div>About</div>
        </a>
        <a href="">
          <div>High Score</div>
        </a>
        <div onLoad={idk()} id="text">{`score: ${score} / lat:${center[0]} / long:${center[1]} / county: / town:`}</div> {/*status bar*/}
      </div>
      {/*Modal Div*/}
      <div className="modal" style={{ display: "block", position: "fixed" }}>
        {display && <Modal display={setDisplay} />} {/*modal, passed setdisplay function*/}
        <Map /*Map container*/
          setDisabled={setDisabled} /*disable the button*/
          handleCallback={handleCallback} /* bring the point data back*/
          center={center} /*sent the center data to map*/
        />
        <GeoCashing /> {/*fetching the reverse search data*/}
      </div>

      {/* Buttons */}
      <div id="menu">
        <DirectionalButtons score={score} subtractor={handleScore} /> {/* send the current score and the score handler function*/}
        <Buttons
          setDisabled={setDisabled} /* send disabling buttons handler*/
          disabledState={disabled} /* send buttons disabled state as props*/
          display={setDisplay} /* set display to true when guess button is clicked */
        />
      </div>
    </div>
  );
}

export default App;
