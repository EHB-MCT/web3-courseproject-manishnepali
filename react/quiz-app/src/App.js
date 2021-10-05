import logo from './logo.svg';
import HomePage from './components/homepage';
import quiz from './assets/quiz.jpeg'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={quiz} id="background" />
        
      <HomePage/>
     
      </header>
    </div>
    </Router>
  );
}

export default App;
