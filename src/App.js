import "./App.css";
import { useState } from "react";
// import Button from './components/Button'
import Modal from "./components/Modal";
import Map from "./components/Map";
import GeoCashing from "./components/GeoCashing"

function App() {
  const [center, setCenter] = useState([43.88, -72.7317]);
  const [score, setScore] = useState(100);
  const [display, setDisplay] = useState(false);
  const [disabled, setDisabled] = useState(true)

  function subtractor() {
    setScore(score - 1);
  }


  function handleButtons(){
    setDisabled(false)
  }
  // function handleCallback(childData){
  //   setCenter(childData)
  // }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>GeoVermont</h1>
      <div
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
        <div id="text">{`score: ${score} / lat: / long: / county: / town:`}</div>
      </div>

      <div className="modal" style={{display: "block", position:"fixed"  }}>
        {display && <Modal display={setDisplay} />}
        <Map setDisabled={handleButtons} setCenter={setCenter} center={center} />
        <GeoCashing />
      </div>
        {/* DIRECTIONAL */}
      <div id="menu">
        <button onClick={subtractor}>N</button>
        <button onClick={subtractor}>E</button>
        <button onClick={subtractor}>W</button>
        <button onClick={subtractor}>S</button>
      </div>
      {/* QUIT */}
      <button disabled={disabled} >I Give Up!</button>
      {/* GUESS */}
      <button
        disabled={disabled}
        onClick={(evt) => {
          setDisplay(true);
        }}
      >
        Guess
      </button>
      {/* START BUTTON */}
      {/* <button onClick={() => setCenter([41, -72])}>Start</button> */}
       {/* <button onClick={}>Start</button> */}
    </div>
  );
}

export default App;

