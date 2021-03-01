import { useState, useEffect } from "react";

// pull these in from center or map

function GeoCashing(props) {
  const[location, setLocation] =useState({
    county:'',
    village:''
  })
  
  
  let latTest = props.NewPoint.point[0];
  let longTest = props.NewPoint.point[1];

    if(!location.county && !props.start) {
      return false;
    } else if (!location.county && props.start) {
      fetch(
        "https://nominatim.openstreetmap.org/reverse?format=json&lat=" +
          latTest +
          "&lon=" +
          longTest
      )
        .then((res) => res.json())
        .then((jsonObj) => {
          
          // console.log(jsonObj);
      
          // set town states and county state
          if (jsonObj.address.town) {
            setLocation({village: jsonObj.address.town,
              county: jsonObj.address.county})
          } else if (jsonObj.address.city){
            setLocation({village: jsonObj.address.city,
              county: jsonObj.address.county})
          } else if (jsonObj.address.village){
            setLocation({village: jsonObj.address.village,
              county: jsonObj.address.county})
          } else {
            return false;
          }
                   
        });
    } else {
      // console.log(location.county)
      // console.log(location.village)
      props.tempFetch(location);
      // console.log(location)
      return false;
    }
  
 
  return null;
}

export default GeoCashing;
