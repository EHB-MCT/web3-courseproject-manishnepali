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
import ScrollButton from 'react-scroll-button'
import { Link, animateScroll as scroll } from "react-scroll";


function OnePager() {
const [image, setImage] = useState(backgroundBsc);
const [color, setColor] = useState('#000000');

    
    return (
      <div className="OnePager">
          <div id="nameCard" 
          style={{backgroundImage: `url(${image})`,
          transition: `0.8s`}}>
       <h1 id="naam">Manish Nepali</h1>
    
      <h3 class="info" 
       onMouseEnter={()=>{ setImage(programing)}}
       onMouseLeave={()=>{ setImage(backgroundBsc)}}>Web Developer</h3>
        <h3 class="info"
        onMouseEnter={()=>{ setImage(artwork)}}
        onMouseLeave={()=>{ setImage(backgroundBsc)}}>Digital Artist</h3>
        </div>
        <div id="nav">
            <ul>
            
                <li > <Link
                    activeClass="active"
                    to="aboutme"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >About me  </Link></li>
               <li > <Link
                    activeClass="active"
                    to="myskills"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >My skills  </Link></li>
                <li > <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >Projects </Link></li>
                <li > <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >Contact </Link></li>
                
            </ul>
          
            <ScrollButton 
                behavior={'smooth'} 
                buttonBackgroundColor={'green'}
                iconType={'chevron-up'}
                style= {{fontSize: '24px'}}
                targetId= {'nameCard'}
            /> 
           
        </div>
        <Aboutme />
        <MySkills />
        <Projects />
       <Contact />
      </div>
      
    );
  }
  
  export default OnePager;