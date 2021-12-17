import '../App.css';
import programing from '../assets/programing.jpeg';
import design from '../assets/design.jpeg';
import backgroundBsc from '../assets/backgroundBsc.jpeg';
import artwork from '../assets/artwork.webp';
import {useState} from 'react';
import Aboutme from './Aboutme';
import MySkills from './MySkills';
import Projects from './Projects';
import Contact from './Contact';
import React, { PureComponent } from 'react';


function OnePager() {
const [image, setImage] = useState(backgroundBsc);
const [color, setColor] = useState('#000000');

    
    return (
      <div className="OnePager">
          <div id="nameCard" 
          style={{backgroundImage: `url(${image})`,
          transition: `0.5s`}}>
       <h1 id="naam">Manish Nepali</h1>
    
      <h3 class="info" 
       onMouseEnter={()=>{ setImage(programing)}}
       onMouseLeave={()=>{ setImage(backgroundBsc)}}>Frontend Developer</h3>

        <h3 class="info"
        onMouseEnter={()=>{ setImage(design)}}
        onMouseLeave={()=>{ setImage(backgroundBsc)}}>Web designer</h3>
        <h3 class="info"
        onMouseEnter={()=>{ setImage(artwork)}}
        onMouseLeave={()=>{ setImage(backgroundBsc)}}>adobe designer</h3>
        </div>
        <div id="nav">
            <ul>
                <li > <a href="#aboutme"> About me </a></li>
                <li><a href="#myskills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
        <Aboutme />
        <MySkills />
        <Projects />
       <Contact />
      </div>
      
    );
  }
  
  export default OnePager;