import React, { Component } from 'react'
import logo from './logo.svg'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Button } from 'antd'

import Home from './components/Home'
import About from './components/About'
import NoMatch from './components/NoMatch'
import ALink from './components/router/ALink'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img alt="logo" className="App-logo" src={logo} />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Router>
          <div>
            {/* <DatePicker /> */}
            <Button type="primary">Button</Button>
            <ALink active label="Home" to="/" />
            <ALink label="About" to="/about">
              About
            </ALink>
            <Switch>
              <Route component={Home} exact path="/" />
              <Route component={About} exact path="/about" />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
