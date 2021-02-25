import './App.css';
import { useState } from 'react'
// import Button from './components/Button'

import Map from './components/Map'

function App() {

  const [center, setCenter] = useState([43.88, -72.7317])

  return (
    <div style={{textAlign:'center'}} >
      <h1>GeoVermont</h1>
      <div style={{height: '7vh',border: '1px solid black', textAlign: 'center', }}>
       
        <a href="https://google.com"><div>About</div></a>
        <a href="pages/highscore.html"><div>High Score</div></a>
        <div id="text">score / lat / long / county / town</div>
      </div> 
      <div style={{alignSelf:'right'}}>
        <Map center={center}/>
      </div>
      <div id="menu">
        
        <button>N</button> 
        <button>E</button> 
        <button>W</button> 
        <button>S</button>
      </div>
      {/* <Button /> */}
      <button>Quit</button>
      <button>Guess</button>
      <button onClick={() => setCenter([41, -72])}>Click Me</button>
    </div>
  );
}

export default App;

// onClick={moveMarker}
// [43.88, -72.7317]