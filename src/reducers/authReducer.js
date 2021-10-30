import { stopSubmit } from 'redux-form';
import { usersAPI, authAPI } from './../DAL/API';
let initialState = {
      id: null,
      login: null,
      email: null,
      isAuth: false
}

const SET_USER_DATA = "SET_USER_DATA"

const authReducer = (state = initialState, action) => {
      switch (action.type) {
            case SET_USER_DATA:
                  return {
                        ...state,
                        ...action.payload
                  }
                  default:
                        return state;
      }
}
export const setAuthUserData = (id, login, email, isAuth) => ({
      type: SET_USER_DATA,
      payload: {
            id,
            login,
            email,
            isAuth
      }
})

export const authUserThunk = () => async(dispatch) => {
      const authUserReasponse = await usersAPI.authUser()
      if (authUserReasponse.resultCode === 0) {
            let {
                  email,
                  id,
                  login
            } = authUserReasponse.data
      dispatch(setAuthUserData(id, login, email, true))
      }
      return authUserReasponse
}

export const loginUser = (email, password, rememberMe) => async(dispatch) => {
      const loginResponse = await authAPI.login(email, password, rememberMe)
      if(loginResponse.data.resultCode === 0) {
            dispatch(authUserThunk())
      } else{
            let message = loginResponse.data.messages.length > 0 ? loginResponse.data.messages[0] : 'ERROR';
            dispatch(stopSubmit('login', {_error: message}))
      }
}
export const logoutUser = () => async(dispatch) => {
      const logoutResponse = await authAPI.logout()
      if(logoutResponse.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
      }
}

export default authReducer