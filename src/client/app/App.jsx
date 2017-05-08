import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import 'normalize.css'
// import styles from './App.css'
import Header from './components/Header/Header'
import NotFound from './components/NotFound/NotFound'
import About from './components/About/About'
import Home from './components/Home/Home'

// A <Switch> renders the first child <Route> that matches. A <Route> with no path always matches.
const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route path='*' component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
