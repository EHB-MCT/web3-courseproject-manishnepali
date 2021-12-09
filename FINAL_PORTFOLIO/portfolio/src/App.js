import OnePager from './components/OnePager'
import Aboutme from './components/Aboutme';
import Mypassion from './components/Mypassion'
import Contact from './components/Contact'
import Projects from './components/Projects';
import './App.css';


function App() {
  return (
    <div className="app">
      <link rel="stylesheet" href="https://use.typekit.net/ljg4uqb.css" />
    
                
     <OnePager />
     <Aboutme />
     <Mypassion />
     <Projects />
     <Contact />
    </div>
  );
}

export default App;
