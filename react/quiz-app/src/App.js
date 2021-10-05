import Nav from './components/nav';
import DocentForm from "./components/DocentForm";
import StudentForm from './components/StudentForm';
import HomePage from './components/homepage';
import quiz from './assets/quiz.jpeg'
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Nav/>
    <div className="App">
      <header className="App-header">
        <img src={quiz} id="background" />
      </header>
    </div>
    <Switch>
                    <Route exact path="/"><HomePage/></Route>
                    <Route exact path="/docent">
                        <DocentForm />
                    </Route>
                    <Route exact path="/student">
                        <StudentForm />
                    </Route>
                    </Switch>
    </Router>
  );
}

export default App;
