import React, { createContext, useReducer } from 'react'
import { userReducer } from '../../reducers/user.reducer'

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [stateUser, dispatchUser] = useReducer(userReducer, {
    isAuthenticated: false,
    user: {},
    isLoading: false
  })

  return (
    <AuthContext.Provider value={{ stateUser, dispatchUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
