import React, { useEffect } from 'react'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { Auth } from './config/firebase'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import './styles.css'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'
import { Dashboard } from './pages/Dashboard'
import { AuthLayout } from './layouts/AuthLayout'

import { useAuth } from './context/stores/Auth/context'
import { PrivateRoute } from './router/PrivateRoutes'
import { Landing } from './pages/Landing'

export const App = () => {
  const { stateUser: { isAuthenticated }, dispatchUser } = useAuth()

  return (

    <Router>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path='/'>
          {isAuthenticated
            ? (<Redirect to='/dashboard' />)
            : (<><Navbar /><Landing /></>)}
        </Route>
        <Route path={['/signin', '/signup']} exact>
          {isAuthenticated
            ? (<Redirect to='/dashboard' />)
            : (

              <AuthLayout>
                <Switch>
                  <Route path='/signin' component={Login} />
                  <Route path='/signup' component={SignUp} />
                </Switch>
              </AuthLayout>
              )}
        </Route>
        <PrivateRoute path='/dashboard'>
          <Dashboard />
        </PrivateRoute>
      </Switch>
    </Router>

  )
}
