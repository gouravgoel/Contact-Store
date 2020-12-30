import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './componenets/layout/Navbar'
import { Fragment } from 'react'
import Home from './componenets/pages/Home'
import About from './componenets/pages/About'
import Register from './componenets/auth/Register'
import Login from './componenets/auth/Login'
import Alerts from './componenets/layout/Alerts'

import ContactState from './context/contact/ContactState'
import AuthState from './context/auth/AuthState'
import AlertState from './context/alert/AlertState'
import setAuthToken from './utils/setAuthToken'
import './App.css'

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment className='App'>
              <Navbar />
              <div className='container'>
                <Alerts />
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  )
}

export default App
