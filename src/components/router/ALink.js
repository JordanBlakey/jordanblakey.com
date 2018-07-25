import React from 'react'
import { Route, Link } from 'react-router-dom'

const ALink = ({ label, to, active }) => (
  <Route
    children={({ match }) => (
      <div className={match ? 'active' : ''}>
        {match ? '> ' : ''}
        <Link to={to}>{label}</Link>
      </div>
    )}
    exact={active}
    path={to}
  />
)

export default ALink
