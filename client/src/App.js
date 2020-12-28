import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './componenets/layout/Navbar'
import { Fragment } from 'react'
import Home from './componenets/pages/Home'
import About from './componenets/pages/About'

import ContactState from './context/contact/ContactState'
import AuthState from './context/auth/AuthState'
import './App.css'

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <Router>
          <Fragment className='App'>
            <Navbar />
            <Switch>
              <div className='container'>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
              </div>
            </Switch>
          </Fragment>
        </Router>
      </ContactState>
    </AuthState>
  )
}

export default App
