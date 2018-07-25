import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Topics from './Topics'
import ParamsExample from './Params'
import Auth from './Auth'
import CustomLink from './CustomLink'
import Prevent from './Prevent'
import Recursive from './Recursive'

const RouterAll = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
        <li>
          <Link to="/params">Params</Link>
        </li>
        <li>
          <Link to="/auth">Auth</Link>
        </li>
        <li>
          <Link to="/custom-link">CustomLink</Link>
        </li>
        <li>
          <Link to="/prevent">Prevent</Link>
        </li>
        <li>
          <Link to="/airsnetiaen">No Match</Link>
        </li>
        <li>
          <Link to="/recursive">Recursive</Link>
        </li>
      </ul>
      <Switch>
        <Route component={Home} exact path="/" />
        <Redirect from="/home" to="/" />
        <Route component={About} exact path="/about" />
        <Route component={Topics} exact path="/topics" />
        <Route component={ParamsExample} exact path="/params" />
        <Route component={Recursive} exact path="/recursive" />
        <Route component={Auth} exact path="/auth" />
        <Route component={CustomLink} exact path="/custom-link" />
        <Route component={Prevent} exact path="/prevent" />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
)

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
)

export default RouterAll
