import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom'
import Github from './Github'
import Nasa from './Nasa'
import Weather from './Weather'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-headings">
            <h3>Ain't no like party like an</h3>
            <h1>API Party</h1>
          </div>
          <ul className="nav-links">
              <li>
                <NavLink to="/github">Github API</NavLink>
              </li>
              <li>
                <NavLink to="/nasa">NASA API</NavLink>
              </li>
              <li>
                <NavLink to="/weather">Weather API</NavLink>
              </li>
          </ul>
        </div>
          <Switch>
            <Route path='/github' component={Github} />
            <Route path='/nasa' component={Nasa} />
            <Route path='/weather' component={Weather} />
            <Route render={() => <p>To get started, click one of the links above</p>} />
          </Switch>
      </div>
    );
  }
}

export default App;