// import { connect } from 'react-redux'
// import { passwordTextUpdate_AC, showPassword_AC, submitAuthForm_AC, usernameTextUpdate_AC } from '../../reducers/authReducer'
// import Authentication from './Authentication'

// let mapStateToProps = (state) => {
//   return {
//     authForm: state.authentication.authForm,
//     username: state.authentication.authUsername,
//     password: state.authentication.authPassword,
//   }
// }

// let mapDispatchToProps = (dispatch) => {
//   return {
//       updateUsername(text) {
//       dispatch(usernameTextUpdate_AC(text))
//     },
//     updatePassword(body) {
//       dispatch(passwordTextUpdate_AC(body))
//     },
//     showPassword(){
//       dispatch(showPassword_AC())
//     },
//     onAuthFormSubmit(element) {
//       dispatch(submitAuthForm_AC(element))
//     }
//   }
// }

// const AuthenticationContainer = connect(mapStateToProps, mapDispatchToProps)(Authentication)

// export default AuthenticationContainer