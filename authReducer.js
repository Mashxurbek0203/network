const AUTH_USERNAME_UPDATE_AT = 'AUTH_USERNAME_UPDATE'
const AUTH_PASSWORD_UPDATE_AT = 'AUTH_PASSWORD_UPDATE'
const SHOW_PASSWORD_AT = 'SHOW_PASSWORD'
const SUBMIT_FORM_AT = 'SUBMIT_FORM'
let initialState = {
  authForm: {
    state: ''
  },
  authUsername: {
    areaState: '',
    usernameText: '',
  },
  authPassword: {
    areaState: '',
    isHidden: true,
    passwordText: ''
  },
}


  let usernameTextUpdate_AC = (body) => ({type: AUTH_USERNAME_UPDATE_AT,username: body})
  let passwordTextUpdate_AC = (text) => ({type: AUTH_PASSWORD_UPDATE_AT, password: text})
  let showPassword_AC = () => ({type: SHOW_PASSWORD_AT})
  let submitAuthForm_AC = (element) => ({type: SUBMIT_FORM_AT, data: {
    username: element.childNodes[0].childNodes[1].value,
    userPassword: element.childNodes[1].childNodes[1].value
  }})


  const authReducer = (state = initialState, action) => {
  switch(action.type){ 
    case AUTH_PASSWORD_UPDATE_AT: 
    return {
      ...state,
      authPassword: {...state.authPassword, passwordText: action.password}
    }
  case AUTH_USERNAME_UPDATE_AT: 
    return {
      ...state,
      authUsername: { ...state.authUsername, usernameText: action.username}
  }
  case SHOW_PASSWORD_AT: 
  return {
    ...state,
    authPassword: {...state.authPassword, isHidden: state.authPassword.isHidden ? false : true}
  }
  case SUBMIT_FORM_AT:
  return  action.data.username === 'Mashxurbek' && Number(action.data.userPassword) === 2004 ? {
    ...state,
    authForm: {state: 'succeded'}
    }
  : {
    ...state,
    authForm: {state: 'denied'}
    }
  default: return state
}
}
export {
  authReducer,
  usernameTextUpdate_AC,
  passwordTextUpdate_AC,
  showPassword_AC,
  submitAuthForm_AC
}
