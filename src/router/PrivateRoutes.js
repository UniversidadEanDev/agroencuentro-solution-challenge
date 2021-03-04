import React from 'react'
import {
  Route,
  Redirect
} from 'react-router-dom'
import { useAuth } from '../context/stores/Auth/context'
export const PrivateRoute = ({ children, ...rest }) => {
  console.log('Children', children)
  const { stateUser: { isAuthenticated } } = useAuth()
  console.log('isAuthenticated', isAuthenticated)
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated
          ? (
              children
            )
          : (
            <Redirect
              to={{
                pathname: '/signin',
                state: { from: location }
              }}
            />
            )}
    />
  )
}
