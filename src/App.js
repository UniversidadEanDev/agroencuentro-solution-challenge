import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import './styles.css'
import { firebaseConfig } from './config/settings'
import firebase from 'firebase/app'
import 'firebase/auth'
import { Login } from './pages/Login'
import { AuthLayout } from './layouts/AuthLayout'
firebase.initializeApp(firebaseConfig)

export const App = () => (
  <Router>
    {/* <Navbar /> */}
    <Switch>
      <Route exact path='/'>
        <AuthLayout>
          <Switch>
            <Route path='/' exact component={Login} />
          </Switch>
        </AuthLayout>
      </Route>
    </Switch>
  </Router>
)
