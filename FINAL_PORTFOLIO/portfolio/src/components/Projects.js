import '../App.css';
import { useState } from 'react';
import XdProject from '../assets/projects/xdProject.png'
import Designs from './Designs';
import WebDev from './webDev';
import DesVid from './DesVid';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';


function Projects() {

  return (
    <div id="projects">
      
      <h1 >Projects</h1>
      <Router>
      <span
      id='route'> 
            <p><Link to="/webDev"
            > web development </Link> </p>
       <p> <Link to="/desVid"
       >desings and video </Link> </p>
        </span> 
                 
    <Switch>
             <Route exact path="/">
             <p
             id='pojcetText'
                 style={{width : '60%',  marginLeft: "20%"}}>Choose which projects you want to browse through, 
                    Web development contains web projects that are made with javascript frameworks and libraries.
                    Designs and videos are a showcase of projects that were made with Adobe software like Illustrator and After effects.</p>
                 
               </Route>
              
                    <Route exact path="/webDev">
                        <WebDev />
                    </Route>
                    <Route exact path="/desVid">
                        <DesVid />
                    </Route>
                    <Route exact path="/designs">
                        <Designs />
                    </Route>
                    </Switch>
    </Router>
      
        
         
         
    </div>
  );
}

export default Projects;
