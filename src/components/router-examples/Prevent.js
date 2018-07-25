import React from 'react'
import { BrowserRouter as Router, Route, Link, Prompt } from 'react-router-dom'

const Prevent = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/prevent/">Form</Link>
        </li>
        <li>
          <Link to="/prevent/one">One</Link>
        </li>
        <li>
          <Link to="/prevent/two">Two</Link>
        </li>
      </ul>

      <Route component={Form} exact path="/prevent" />
      <Route path="/prevent/one" render={() => <h3>One</h3>} />
      <Route path="/prevent/two" render={() => <h3>Two</h3>} />
    </div>
  </Router>
)

class Form extends React.Component {
  state = {
    isBlocking: false
  }

  render() {
    const { isBlocking } = this.state

    return (
      <form
        onSubmit={event => {
          event.preventDefault()
          event.target.reset()
          this.setState({
            isBlocking: false
          })
        }}
      >
        <Prompt
          message={location =>
            `Are you sure you want to go to ${location.pathname}`
          }
          when={isBlocking}
        />

        <p>
          Blocking?{' '}
          {isBlocking ? 'Yes, click a link or the back button' : 'Nope'}
        </p>

        <p>
          <input
            onChange={event => {
              this.setState({
                isBlocking: event.target.value.length > 0
              })
            }}
            placeholder="type something to block transitions"
            size="50"
          />
        </p>

        <p>
          <button>Submit to stop blocking.</button>
        </p>
      </form>
    )
  }
}

export default Prevent
