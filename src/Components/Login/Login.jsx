import React from "react";
import { Field, reduxForm } from "redux-form";
import { required, maxLengthCreator } from './../../utils/validators/validators';
import { createField, Element} from './../common/FormProto/FormProto';
import { loginUser } from './../../reducers/authReducer';
import { connect } from "react-redux";
import { Redirect } from "react-router";
import style from './Login.module.css'

const Input = Element('input')
const maxLength10 = maxLengthCreator(10)
const LoginForm = ({handleSubmit, error}) => {
  
  return<div >
  <form onSubmit={handleSubmit}>
    {createField(Input, "Please enter your email", 'email', [required], null, "email")}
    {createField(Input, "Please enter your password", 'password', [required, maxLength10], null, "password")}
    {createField(Input, null, 'rememberMe', [], "remember me", "checkbox")}
    <div>
      <button>Login</button>
    </div>
  </form>
    {error && <div className={ style.summaryError}>
      {error}
    </div>}
  </div>
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm)



const Login = ({loginUser, isAuth}) => {
  const onSubmit = (formData) => {
    loginUser(formData.email, formData.password, formData.rememberMe)
  }
  if(isAuth) {return <Redirect to="/profile"/>}
  return<div className={style.loginWrapper}>
  <h1>Login</h1>
  <LoginReduxForm onSubmit={onSubmit} />
  </div>
}
const mapDispatchToProps = (state)  => {
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect(mapDispatchToProps, {loginUser})(Login)