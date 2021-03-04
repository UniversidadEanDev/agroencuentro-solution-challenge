import React, { createContext, useReducer, useEffect } from 'react'
import { userReducer } from '../../reducers/user.reducer'
import { TYPES } from '../../../constants/types'

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [stateUser, dispatchUser] = useReducer(userReducer, {
    isAuthenticated: false,
    user: {},
    isLoading: false
  })

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      const newUser = JSON.parse(user)
      const isAuthenticated = true
      dispatchUser({ type: TYPES.SET_CURRENT_USER, payload: { newUser, isAuthenticated } })
    }
  }, [])
  return (
    <AuthContext.Provider value={{ stateUser, dispatchUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
