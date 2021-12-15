import {Link} from 'react-router-dom';
function Nav() {
    return(
        <div id="nav">  
        <ul> 
        <li><Link to="/"> home </Link> </li>
            <li><Link to="/docent"> Docent </Link> </li>
       <li> <Link to="/student">Student </Link> </li>
        </ul> 
        </div>

    );
}
export default Nav;
