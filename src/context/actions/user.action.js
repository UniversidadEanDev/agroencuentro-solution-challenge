import { Auth } from '../../config/firebase'
import { TYPES } from '../../constants/types'

export const signIn = async (email, password, dispatch) => {
  try {
    const userCredential = await Auth.signInWithEmailAndPassword(email, password)
    console.log('userCredential', userCredential)
    dispatch(setCurrentUser(userCredential, true))
  } catch (error) {
    console.log('There is an error when user tried logging', error)
  }
}
export const signUp = async (email, password, dispatch) => {
  try {
    const userCredential = await Auth.createUserWithEmailAndPassword(email, password)
    console.log('userCredential', userCredential)
    dispatch(setCurrentUser(userCredential, true))
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
