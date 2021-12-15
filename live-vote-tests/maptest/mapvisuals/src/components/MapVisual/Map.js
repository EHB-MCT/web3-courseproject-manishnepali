import { useState, useEffect} from 'react';
import ReactMapGL,  {FlyToInterpolator, Marker} from 'react-map-gl';
import Votes from './data/votes_cor.json';
import P5 from './P5';
import '../../App.css'
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://vote.miguelbilliet.be:3000";

let TOTAL_CONNECTIONS = 0;




export default function Map() {
  const [viewport, setViewport] = useState({
    width: 850,
    height: 500,
    longitude: 4.351697,
    latitude: 50.8465573,
    zoom: 6.3
  });

 


 

  const goToBrussel = () => {
    setViewport({
      ...viewport,
      longitude: 4.351697,
      latitude: 50.8465573,
      zoom: 8,
      transitionDuration: 500,
      transitionInterpolator: new FlyToInterpolator(),
      
    });
  };
  const goToAntwerpen = () => {
    setViewport({
      ...viewport,
      longitude: 4.402771,
      latitude: 51.260197,
      zoom: 8,
      transitionDuration: 500,
      transitionInterpolator: new FlyToInterpolator(),
      
    });
  };
  const goToHenegouwen = () => {
    setViewport({
      ...viewport,
      longitude: 4.12521697599374,
      latitude: 50.36192,
      zoom: 8,
      transitionDuration: 500,
      transitionInterpolator: new FlyToInterpolator(),
      
    });
  };
  const goToLimburg = () => {
    setViewport({
      ...viewport,
      longitude: 	5.9046302,
      latitude: 51.2015196,
      zoom: 8,
      transitionDuration: 500,
      transitionInterpolator: new FlyToInterpolator(),
      
    });
  };
  const goToLuik = () => {
    setViewport({
      ...viewport,
      longitude: 3.6940733,
      latitude: 51.0510917,
      zoom: 8,
      transitionDuration: 500,
      transitionInterpolator: new FlyToInterpolator(),
      
    });
  };
  const goToLuxenburg = () => {
    setViewport({
      ...viewport,
      longitude: 5.43980394161471,
      latitude: 49.96379985,
      zoom: 8,
      transitionDuration: 500,
      transitionInterpolator: new FlyToInterpolator(),
      
    });
  };

  const goToNamen = () => {
    setViewport({
      ...viewport,
      longitude: 	4.1622821,
      latitude: 51.2932047,
      zoom: 8,
      transitionDuration: 500,
      transitionInterpolator: new FlyToInterpolator(),
      
    });
  };
  const goToOostvlaanderen = () => {
    setViewport({
      ...viewport,
      longitude: 3.81178301133246,
      latitude: 51.0375423,
      zoom: 8,
      transitionDuration: 500,
      transitionInterpolator: new FlyToInterpolator(),
      
    });
  };

  const goToVlamsbrabant= () => {
    setViewport({
      ...viewport,
      longitude: 4.78862379846209,
      latitude: 50.8686516,
      zoom: 8,
      transitionDuration: 500,
      transitionInterpolator: new FlyToInterpolator(),
      
    });
  };
  const goToWaalsbrabant= () => {
    setViewport({
      ...viewport,
      longitude: 	4.4444472,
      latitude: 50.7514946,
      zoom: 8,
      transitionDuration: 500,
      transitionInterpolator: new FlyToInterpolator(),
      
    });
  };
  const goToWestvlaanderen= () => {
    setViewport({
      ...viewport,
      longitude: 	2.99942133878871,
      latitude: 51.04047465,
      zoom: 8,
      transitionDuration: 500,
      transitionInterpolator: new FlyToInterpolator(),
      
    });
  };
  const [data, setData] = useState([])
  useEffect(() => {
    
    const socket = socketIOClient(ENDPOINT);
    socket.on("init", (data) => {
        TOTAL_CONNECTIONS = 0;
        socket.emit("init", {
            type: "presentation",
        });

        socket.on("locations", (data) => {
            this.update(data, this.prev_index);
            setData(data);
        });

        socket.on("locationStatus", (data) => {
            console.log(data);
        });
    });
    console.log(data)
  }, [])


  const [selectVote, setSelectVote] = useState(null);
  return (
    <div>
  
      <h1 id="titel_map">Map data visual</h1>
      <div id="all">
      <div id="map_visuals">
      
   <div id="mapbox">
    <ReactMapGL
    
    // mapStyle="mapbox://styles/manishnepali/ckvtkgrx423me14t72cizk5n9"
    // mapStyle="mapbox://styles/manishnepali/ckwkiqmw30lu415pb0jbx9ywc"
   
    mapStyle="mapbox://styles/manishnepali/ckwnlkrgy3ljq15pbfxo3un4g"
  
    mapboxApiAccessToken={"pk.eyJ1IjoibWFuaXNobmVwYWxpIiwiYSI6ImNrdWNubDZ2cjEyNzEydW1va3VhMXIycDgifQ.n2XtlNGQ4lDXAJt65-Db3w"}
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    >
        {/* {data.map(voter =>(
            <Marker key={voter.id}
            latitude={voter.latitude}
            longitude={voter.longitude}>
              
              <P5/>
            
               
               
            
            </Marker>
        ))} */}
      
      {Votes.map(voter =>(
            <Marker key={voter.id}
            latitude={voter.latitude}
            longitude={voter.longitude}>
              
              <P5/>
            
               
               
            
            </Marker>
        ))}
        </ReactMapGL>
        </div>
        </div>
        <div>
        <ul id="cities">
  <li>  <p onClick={goToBrussel} class="button_map">Brussel</p></li>
   <li> <p onClick={goToAntwerpen} class="button_map">Provincie Antwerpen</p></li>
    <li><p onClick={goToHenegouwen} class="button_map">Provincie Henegouwen</p></li>
    <li>  <p onClick={goToLimburg} class="button_map">Provincie Limburg</p></li>
    <li>  <p onClick={goToLuik} class="button_map">Provincie Luik</p></li>
   <li> <p onClick={goToLuxenburg} class="button_map">Provincie Luxemburg</p></li>
    <li><p onClick={goToNamen} class="button_map">Provincie Namen</p></li>
    <li>  <p onClick={goToOostvlaanderen} class="button_map">Provincie Oost Vlaaderen </p></li>
   <li> <p onClick={goToVlamsbrabant} class="button_map">Provincie Vlaams-Brabant</p></li>
    <li><p onClick={goToWaalsbrabant} class="button_map">Provincie Waals-Brabant</p></li>
    <li><p onClick={goToWestvlaanderen} class="button_map">Provincie West-Vlaanderen</p></li>

    </ul>
    </div>
    </div>
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
