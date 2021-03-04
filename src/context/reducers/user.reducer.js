import { TYPES } from '../../constants/types'

export const userReducer = (state, action) => {
  switch (action.type) {
    case TYPES.SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        user: action.payload.user
      }

    default:
      return state
  }
}
