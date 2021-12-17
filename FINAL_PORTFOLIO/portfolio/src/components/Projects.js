import '../App.css';
import { useState } from 'react';
import XdProject from '../assets/projects/xdProject.png'


function Projects() {

  return (
    <div id="projects">
      <h1 >Projects</h1>
         <h2
           >web development</h2>

         <ul class="projectList">
          
       
         <li class='projectItem' 
          style={{  background: '#F7E116'
        }}>
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png" 
           style={{width: "20%"}}alt="" />
           <a href="https://web2-course-project-fnt-manish.herokuapp.com/index.html" target="_blank">"Javascript full stack website frontend"</a>
           </li>
         <li class='projectItem' 
          style={{  background: '#F7E116'
        }}>
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png" 
           style={{width: "20%"}}alt="" />
    
         <a href="https://web2-course-project-api-manish.herokuapp.com/" target="_blank">Javascript full stack website backend with express</a>

         </li>
         <li class='projectItem' 
         style={{background: '#4cbd7e'}}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png"
           
           style={{width: "20%"}} alt="" />
         <a href="https://dazzling-raman-c2e46b.netlify.app/" target="_blank">Vue and animejs demo </a>
         </li>
         <li class='projectItem' 
           style={{background: '#4cbd7e'}}>
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png"
    style={{width: "20%"}} alt="" />
         <a href="https://reverent-colden-99ef89.netlify.app/" target="_blank">Vue movielist website </a>
         </li>
         <li class='projectItem' 
         style={{backgroundColor: "#52C2DE"}}>
           <img src="https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png" 
           style={{width: "20%"}} alt="" />
         <a href="https://react-taak-manish.web.app/" target="_blank">React music-player </a>
  
         </li>
         <li class='projectItem' 
         style={{backgroundColor: "#52C2DE"}}>
                      <img src="https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png" 
           style={{width: "20%"}} alt="" />

         <a href="https://silly-swanson-359788.netlify.app/" target="_blank">React quiz app</a>
         </li>
         <li class='projectItem' 
         style={{backgroundColor: "#52C2DE"}}>
       <img src="https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png" 
       style={{width: "20%"}} alt="" />
         <a href="https://affectionate-yonath-c3821e.netlify.app" target="_blank">React three fiber demo</a>
         </li>
         <li class='projectItem' 
            style={{backgroundColor: "#52C2DE"}}>
           <img src="https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png" 
            style={{width: "20%"}} alt="" />
         <a href="https://quizzical-lamport-1715f8.netlify.app" target="_blank">React - mapbox vote visual app with P5js</a>
         </li>
         <li class='projectItem'
         style={{background : "#DE002D"}} >
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png"
           style={{width: "20%"}} alt="" />
         <a href="https://instagram-app-a7220.web.app" target="_blank"> Angular - instagram mock</a>
         </li>
         <li class='projectItem' 
         style={{background : "#DE002D"}} >
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png"
           style={{width: "20%"}} alt="" />
         <a href="https://portfolio-69033.web.app/home" target="_blank">Angular - outdated portfolio website</a>
         </li>
         </ul>
         <h2>design and video</h2>
         <ul class="projectList">
       
           <li class='projectItem'
           style={{background: "#FF9B00"}}>
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/493px-Adobe_Illustrator_CC_icon.svg.png"
             style={{width: "20%"}} alt="" />
             <a href="" target="_blank"> Illustrator designs</a>
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

export default Projects;
