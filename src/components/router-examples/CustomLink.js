import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const CustomLink = () => (
  <Router>
    <div>
      <OldSchoolMenuLink activeOnlyWhenExact label="Home" to="/" />
      <OldSchoolMenuLink label="About" to="/about" />
      <hr />
      <Route component={Home} exact path="/" />
      <Route component={About} path="/about" />
    </div>
  </Router>
)

const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route
    children={({ match }) => (
      <div style={match ? styles.active : {}}>
        {match ? '> ' : ''}
        <Link to={to}>{label}</Link>
      </div>
    )}
    exact={activeOnlyWhenExact}
    path={to}
  />
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const styles = {
  active: {
    color: 'red',
    fontWeight: '700'
  }
}

export default CustomLink
