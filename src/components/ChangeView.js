import React from 'react'
import Map from './Map'


function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }


export default ChangeView;
