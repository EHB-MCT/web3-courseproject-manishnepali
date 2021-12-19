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
              style={{
              borderRadius: "50%"}}/>
              <span>
              <h1>About me</h1>
            <p id="test" >I'm a web developer, designer based in Brussels, Belgium. <br/>
              Browse through this website to get to know more about why I have chosen to become a web developer. <br/>
              Discover projects I have made during my studies at multimedia and communication technology in Erasmus Hogeschool Brussel.
            </p>
            </span>
            </div>
          
            

          </Scene>
        </Controller>
  
    </div>
    

  );
}

export default Aboutme;
