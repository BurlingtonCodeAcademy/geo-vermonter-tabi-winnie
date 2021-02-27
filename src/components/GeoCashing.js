import { useState, useEffect } from "react";


// pull these in from center or map 
let latTest = 43.88
let longTest = -72.7317

function GeoCashing() {
    const [data, setData] = useState(null);

  useEffect(() => {
    if (data) {
      return false;
    } else {
        fetch(
            "https://nominatim.openstreetmap.org/reverse?format=json&lat="+latTest+"&lon="+longTest 
          ).then((res) => res.json())
          .then((jsonObj) =>{
              console.log(jsonObj);
              setData(jsonObj)
          });
    }
  });

  return null
}

export default GeoCashing;