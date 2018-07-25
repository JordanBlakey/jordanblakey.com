import React, { Component } from 'react'

class About extends Component {
  render() {
    return (
      <div className="About" style={styles}>
        <p className="App-intro">Here is some About page content.</p>
      </div>
    )
  }
}

const styles = {
  test: {
    background: 'green'
  }
}

export default About
