import '../App.css';
import { Controller, Scene } from 'react-scrollmagic';
import Background from '../assets/background.jpg'
import {useLayoutEffect, useState} from 'react'

function Aboutme() {

  return (
    <div className="aboutme">
    <div className="OnePager"
     style={{backgroundImage: `url(${Background})`}}>
    <Controller>
      <Scene destroy={600} triggerElement="#naam" pin>
        <div>hi</div>
       
      </Scene>
    </Controller>
   
    </div>
    </div>
  );
}

export default Aboutme;
