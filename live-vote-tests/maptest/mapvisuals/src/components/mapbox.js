import * as React from 'react';
import { useState } from 'react';
import ReactMapGL,  {FlyToInterpolator} from 'react-map-gl';



export default function Map() {
  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });


  const goToBrussel = () => {
    setViewport({
      ...viewport,
      longitude: 4.351697,
      latitude: 50.8465573,
      zoom: 7,
      transitionDuration: 5000,
      transitionInterpolator: new FlyToInterpolator(),
      
    });
  };
  return (
      <div>
    <button onClick={goToBrussel}>Brussel</button>
    <ReactMapGL
    mapStyle="mapbox://styles/manishnepali/ckvtfhl8t1yrd14qnrcnwfryn"
    mapboxApiAccessToken={"pk.eyJ1IjoibWFuaXNobmVwYWxpIiwiYSI6ImNrdWNubDZ2cjEyNzEydW1va3VhMXIycDgifQ.n2XtlNGQ4lDXAJt65-Db3w"}
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    />
    </div>
  );
}