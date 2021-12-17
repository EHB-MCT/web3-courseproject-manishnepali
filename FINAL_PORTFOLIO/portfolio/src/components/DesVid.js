import '../App.css';
import { useState } from 'react';
import XdProject from '../assets/projects/xdProject.png'
import Designs from './Designs';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';


function DesVid() {

  return (
    <div id="projects">
      
      
         <h2>design and video</h2>
         <ul class="projectList">
       
           <li class='projectItem'
           style={{background: "#FF9B00"}}>
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/493px-Adobe_Illustrator_CC_icon.svg.png"
             style={{width: "20%"}} alt="" />
             <Link to="/designs"> Illustrator designs</Link>
           </li>
           <li class='projectItem'
           style={{background: "#9A9AFF"}}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Adobe_Animate_CC_icon_%282020%29.svg/1200px-Adobe_Animate_CC_icon_%282020%29.svg.png"
             style={{width: "20%"}} alt="" />
             <a href="https://youtu.be/KUZoD1D2rp4" target="_blank"> Animation short</a>
           </li>
           <li class='projectItem'
           style={{background: "#9A9AFF"}}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Adobe_Animate_CC_icon_%282020%29.svg/1200px-Adobe_Animate_CC_icon_%282020%29.svg.png"
             style={{width: "20%"}} alt="" />
             <a href="https://youtu.be/ZFhJWl35QCc" target="_blank"> Promotion movie erasmus</a>
           </li>
           <li class='projectItem'
           style={{background: "#F229B7"}}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/640px-Adobe_XD_CC_icon.svg.png"
             style={{width: "20%"}} alt="" />
             <a href="https://xd.adobe.com/view/e8fc826e-ec47-4102-abe1-7d1e92952856-bdaf/?fbclid=IwAR2JZmLMJBEVh2KeRU33Rwn_F9Lawby4eDUt2yT9g9zVcqrchpIkirpnz3E" target="_blank"> User interface design</a>
           </li>
           <li class='projectItem'
           style={{background: "#F229B7"}}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/640px-Adobe_XD_CC_icon.svg.png"
             style={{width: "20%"}} alt="" />
             <a href="https://xd.adobe.com/view/281a268d-1e9e-4660-7363-fdcc7f91bbcf-5e2b/" target="_blank"> User experience design</a>
           </li>
         </ul>
         
         
    </div>
  );
}

export default DesVid;
