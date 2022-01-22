import './_css/App.css';
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import main from "./main"
import about from "./about"
import work from "./projects"
import elemental from "./_content/projects/elemental"
import instax from "./instax"


function App() {
  

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={main}></Route>
          <Route path="/about" component={about}></Route>
          <Route path="/work" component={work}></Route>
          <Route path="/instax" component={instax}></Route>
          <Route path="*" component={elemental} ></Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
