import React from 'react'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import './config/firebase'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import { Navbar } from './components/Navbar'
import './styles.css'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'
import { Dashboard } from './pages/Dashboard'
import { AuthLayout } from './layouts/AuthLayout'

import { useAuth } from './context/stores/Auth/context'

export const App = () => {
  const { stateUser: { isAuthenticated } } = useAuth()
  return (

    <Router>
      {/* <Navbar /> */}
      <Switch>
        {
        !isAuthenticated
          ? (
            <Route path={['/signin', '/signup']} exact>
              <AuthLayout>
                <Switch>
                  <Route path='/signin' component={Login} />
                  <Route path='/signup' component={SignUp} />
                </Switch>
              </AuthLayout>
            </Route>
            )
          : (<Route path='/dashboard' component={Dashboard} />)

          }

      </Switch>
    </Router>

  )
}
