import "./App.css";
import { useState } from "react";
// import Button from './components/Button'
import Modal from "./components/Modal";
import Map from "./components/Map";

function App() {
  const [center, setCenter] = useState([43.88, -72.7317]);


  const [score, setScore] = useState(100);
  const [display, setDisplay] = useState(false);

  function subtractor() {
    setScore(score - 1);
  }

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
        <div id="text">{`score: ${score} / lat: ${center[0]} / long ${center[1]} / county: / town:`}</div>
      </div>

      <div className="modal" style={{display: "block", position:"fixed"  }}>
        {display && <Modal display={setDisplay} />}
        <Map setCenter={setCenter} center={center} />
      </div>

      <div id="menu">
        <button onClick={subtractor}>N</button>
        <button onClick={subtractor}>E</button>
        <button onClick={subtractor}>W</button>
        <button onClick={subtractor}>S</button>
      </div>
      {/* <Button /> */}
      <button>Quit</button>
      <button
        onClick={(evt) => {
          setDisplay(true);
        }}
      >
        Guess
      </button>
      <button onClick={() => setCenter([41, -72])}>Start</button>
    </div>
  );
}

export default App;

// onClick={moveMarker}
// [43.88, -72.7317]
