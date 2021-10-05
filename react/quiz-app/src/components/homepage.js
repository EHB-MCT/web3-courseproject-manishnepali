import DocentForm from "./DocentForm";
import StudentForm from './StudentForm';
import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
function HomePage(){
    const [showDocent, setShow] = useState(false);
    const [showStudent, setSudent] = useState(false);
    return( <div id="homepage">
        <h2>Ik ben een</h2>
        
      <button onClick={()=>setShow(true) && setSudent(false)} class="button_hp">Docent</button>
      <button onClick={()=>{setSudent(true) && setShow(false)}} class="button_hp">Student</button>
      {
      showDocent? <DocentForm /> :null
      }
      {
      showStudent? <StudentForm /> :null
      }
      <Router>
      <Switch>
          <Route exact path="/docent">
              <DocentForm/>
          </Route>
          <Route exact path="/student">
              <StudentForm/>
          </Route>
     </Switch>
     </Router>
        </div>);
        
}
export default HomePage;