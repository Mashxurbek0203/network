import React from 'react'
import { connect } from 'react-redux'
import { authUserThunk, logoutUser } from '../../reducers/authReducer'
import Header from './Header'

class HeaderContainer extends React.Component {
  onLoginBtnClicked = () => {
    this.props.authUserThunk()
  }
  onLogoutBtnClicked = () => {
    this.props.logoutUser()
  }
  render() {
    return <Header {...this.props} onLoginBtnClicked={this.onLoginBtnClicked} onLogoutBtnClicked={this.onLogoutBtnClicked}/>
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth
  }
}


export default connect(mapStateToProps, {authUserThunk, logoutUser})(HeaderContainer)