import './_css/App.css';
import React, {useState} from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import main from "./main"
import about from "./about"
import work from "./projects"
import elemental from "./_content/projects/elemental"
import instax from "./instax"
import Maintenance from "./maintenance"

function App() {

  const [state, setState] = useState(true);

  return (
    <div className="App">
      {
      (state) ? 
      <Maintenance define={e => setState(e)}/>
      :
      <Router>
        <Switch>
          <Route path="/" exact component={main}></Route>
          <Route path="/about" component={about}></Route>
          <Route path="/work" component={work}></Route>
          <Route path="/instax" component={instax}></Route>
          <Route path="*" component={elemental} ></Route>
        </Switch>
      </Router>
}
    </div>
  );
}

export default App;
