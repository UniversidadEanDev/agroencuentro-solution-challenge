import { Auth } from '../../config/firebase'
import { TYPES } from '../../constants/types'

export const signIn = async (email, password, dispatch) => {
  try {
    const userCredential = await Auth.signInWithEmailAndPassword(email, password)

    const user = {
      email: userCredential.user.email
    }
    console.log('userCredential signIn', user)
    dispatch(setCurrentUser(user, true))
    localStorage.setItem('user', JSON.stringify(user))
  } catch (error) {
    console.log('There is an error when user tried logging', error)
  }
}
export const signUp = async (email, password, dispatch) => {
  try {
    const userCredential = await Auth.createUserWithEmailAndPassword(email, password)
    const user = {
      email: userCredential.user.email
    }
    console.log('userCredential signUp', user)
    dispatch(setCurrentUser(user, true))
    localStorage.setItem('user', JSON.stringify(user))
  } catch (error) {
    console.log('There is an error when user tried logging', error)
  }
}
const setCurrentUser = (user, isAuthenticated) => {
  return {
    type: TYPES.SET_CURRENT_USER,
    payload: { user, isAuthenticated }
  }
}

export const logout = (dispatch) => {
  dispatch(setCurrentUser({}, false))
  localStorage.removeItem('user')
}
