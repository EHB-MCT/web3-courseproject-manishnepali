import '../App.css';
import programing from '../assets/programing.jpeg'
import design from '../assets/design.jpeg'
import backgroundBsc from '../assets/backgroundBsc.jpeg'
import artwork from '../assets/artwork.jpeg'
import {useState} from 'react'

function OnePager() {
const [image, setImage] = useState(backgroundBsc);
const [color, setColor] = useState('#000000');

    
    return (
      <div className="OnePager">
          <div id="nameCard" 
          style={{backgroundImage: `url(${image})`}}>
       <h1 id="naam">Manish Nepali</h1>
    
      <h3 class="info" 
       onMouseEnter={()=>{ setImage(programing)}}
       onMouseLeave={()=>{ setImage(backgroundBsc)}}>Frontend Developer</h3>

        <h3 class="info"
        onMouseEnter={()=>{ setImage(design)}}
        onMouseLeave={()=>{ setImage(backgroundBsc)}}>Web designer</h3>
        <h3 class="info"
        onMouseEnter={()=>{ setImage(artwork)}}
        onMouseLeave={()=>{ setImage(backgroundBsc)}}>artist</h3>
        </div>
       
        <div id="nav">
            <ul>
                <li >About me</li>
                <li>My passions</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
      </div>
    );
  }
  
  export default OnePager;