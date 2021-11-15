import * as React from 'react';
import '../App.css'
import { useState } from 'react';
import Pin from '../assets/pin.svg'
import ReactMapGL,  {FlyToInterpolator, Marker} from 'react-map-gl';
import Votes from '../data/votes_cor.json'
import P5 from './P5';



export default function Map() {
  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    longitude: 4.351697,
    latitude: 50.8465573,
    zoom: 8
  });

const bounds = [
    [-74.04728, 40.68392], // [west, south]
    [-73.91058, 40.87764]  // [east, north]
];


    

  const goToBrussel = () => {
    setViewport({
      ...viewport,
      longitude: 4.351697,
      latitude: 50.8465573,
      zoom: 12,
      transitionDuration: 5000,
      transitionInterpolator: new FlyToInterpolator(),
      
    });
  };
  return (
      <div>
        
    <button onClick={goToBrussel}>Brussel</button>
    <ReactMapGL
    
    // mapStyle="mapbox://styles/manishnepali/ckvtkgrx423me14t72cizk5n9"
    mapStyle="mapbox://styles/manishnepali/ckvtj3blp0qq014nml8y26b70"
    mapboxApiAccessToken={"pk.eyJ1IjoibWFuaXNobmVwYWxpIiwiYSI6ImNrdWNubDZ2cjEyNzEydW1va3VhMXIycDgifQ.n2XtlNGQ4lDXAJt65-Db3w"}
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    >
        {Votes.map(vote =>(
            <Marker key={vote.id}
            latitude={vote.latitude}
            longitude={vote.longitude}>
    
                <P5 />
            
            </Marker>
        ))}
      
        </ReactMapGL>

    </div>
  );
}
// {data.map(vote => (
//     <Marker
//     key={vote.id}
//     latitude={data.coordinates[1]}
//     longitude={data.coordinates[0]}>
//         <div>
//             vote
//         </div>
//     </Marker>
// ))}