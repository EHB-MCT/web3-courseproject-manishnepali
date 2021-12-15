import '../App.css';
import { Controller, Scene } from 'react-scrollmagic';
import Background from '../assets/background.jpg'
import profiless from '../assets/pofiless.jpg'


function Aboutme() {


 

  return (
    
    <div id="aboutme" 
    className="OnePager"
    style={{backgroundColor:`white`}}>
  
     
      <Controller>
          <Scene duration={200} pin>
      
           
       
          <div id="aboutme_info" >
          
            <img src={profiless} alt="" id="foto"
              style={{width: "20%",
              borderRadius: "50%"}}/>
              <span>
              <h1>About me</h1>
            <p id="test" style={{fontSize: `1.5em`}}>Im a web developer, designer based in Brussels, Belguim. <br/>
              Browse through this website to get to kown more about why i have chosen to become a web developer. <br/>
              Discover projects i have made during my studies at multimedia & comunication technomlogy in Erasmus Hogeschool Buussel.
            </p>
            </span>
            </div>
          
            

          </Scene>
        </Controller>
  
    </div>
    

  );
}

export default Aboutme;
