import { useMap } from 'react-leaflet'

//  function to change map zoom and view...
function ChangeView({center, zoom}) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }


export default ChangeView;
