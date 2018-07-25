import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <div className="Home" style={styles.test}>
        <p className="App-intro">Here is some homepage content.</p>
      </div>
    )
  }
}

const styles = {
  test: {
    background: 'red'
  }
}

export default Home
