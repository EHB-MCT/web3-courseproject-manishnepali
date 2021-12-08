import '../App.css';
import { Controller, Scene } from 'react-scrollmagic';
import Background from '../assets/background.jpg'
import {useEffect, useState} from 'react'
import {gsap} from 'gsap'

function Aboutme() {


  useEffect(() => {
    gsap.to("#test", {
    x: 100,
    duration: 5,
    scrollTrigger: {
      trigger: "#test",
      markers: true,
      start: "top center",
      end: "bottom 80px",
      scrub: true
    }
    });
  }, []);

  return (
    <div className="aboutme">
    <div className="OnePager"
     style={{backgroundImage: `url(${Background})`}}>
    <Controller>
      <Scene duration={500} pin>
        <div id="aboutme_info">
          <h1>About me</h1>
        <p id="test" >Im a web developer, designer based in Brussels, Belguim. <br/>
           Browse through this website to get to kown more about why i have chosen to become a web developer. <br/>
           Discover projects i have made during my studies at multimedia & comunication technomlogy in Erasmus Hogeschool Buussel.
         </p>
         </div>

      </Scene>
    </Controller>
  
    </div>
    </div>
  );
}

export default Aboutme;
