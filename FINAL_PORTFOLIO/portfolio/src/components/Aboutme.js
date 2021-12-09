import '../App.css';
import { Controller, Scene } from 'react-scrollmagic';
import Background from '../assets/background.jpg'


function Aboutme() {


 

  return (
    <div id="aboutme" 
    className="OnePager"
    style={{backgroundImage:`url(${Background})`}}>
  
     
      <Controller>
          <Scene duration={500} pin>
            <div id="aboutme_info" >
            <h1>About me</h1>
            <p id="test" style={{fontSize: `1.5em`}}>Im a web developer, designer based in Brussels, Belguim. <br/>
              Browse through this website to get to kown more about why i have chosen to become a web developer. <br/>
              Discover projects i have made during my studies at multimedia & comunication technomlogy in Erasmus Hogeschool Buussel.
            </p>
            </div>

          </Scene>
        </Controller>
  
    </div>
    

  );
}

export default Aboutme;
