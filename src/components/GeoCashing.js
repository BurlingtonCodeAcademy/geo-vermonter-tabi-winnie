import { useState, useEffect } from "react";



function GeoCashing() {
    const [data, setData] = useState(null);

  useEffect(() => {
    if (data) {
      return false;
    } else {
        fetch(
            "https://nominatim.openstreetmap.org/reverse?format=json&lat=43.88&lon=-72.7317"
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