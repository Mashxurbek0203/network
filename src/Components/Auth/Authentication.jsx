import { createRef } from 'react'
import './style.css'

const Authentication = (props) => {
  const passwordInput = createRef()
  const onPasswordAreaChange = () => {
    props.updatePassword(passwordInput.current.value)
  }
  const onUsernameAreaChange = (evt) => {
    props.updateUsername(evt.target.value)
  }
  const onPasswordShow = () => {
    props.showPassword()
  }
  const onAuthFormSubmit = (evt) => {
    evt.preventDefault();
    props.onAuthFormSubmit(evt.target)
  }
  return (
    <>
    <div className={`auth ${props.authForm.state}`}>
      <div className="auth__wrapper">
        <p className="auth__title">Get authenticated</p>
        <form action="#" 
              className="auth__form" 
              method="GET"
              onSubmit={onAuthFormSubmit}
              >
        <div className="auth__username-wrap">
          <label htmlFor="auth-username">Username:</label>
          <input 
                  type="text" 
                  placeholder="Please enter username..." 
                  className="auth__username-area auth__input" 
                  value={props.username.usernameText}
                  id="auth-username" 
                  onChange={onUsernameAreaChange}
                  autoComplete='off'
                  />
        </div>
        <div className="auth__password-wrap">
          <label htmlFor="auth-password">Password</label>
          <input 
          ref={passwordInput}
          type={props.password.isHidden 
                ? 'password' 
                : 'text'} 
          className="auth__password-area auth__input" 
          placeholder="Please enter password..."
          value={props.password.passwordText}
          id="auth-password"
          onChange={onPasswordAreaChange}
          maxLength='4'
          autoComplete='off'
          />
          <span><i 
                  className={!props.password.isHidden 
                              ? 'fas fa-eye-slash' 
                              : 'fas fa-eye'}
                  onClick={onPasswordShow}
                ></i></span>
        </div>
        <button type='submit' className='auth__submit-btn'>Submit</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Authentication