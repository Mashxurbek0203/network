import React from 'react'
import { connect } from 'react-redux'
import { usersAPI } from '../../DAL/API'
import { setAuthUserData} from '../../reducers/authReducer'
import Header from './Header'

class HeaderContainer extends React.Component {
  componentDidMount() {
    usersAPI.authUser()
    .then(data => {
      if(data.resultCode === 0) {
        let {email, id, login} = data.data
        this.props.setAuthUserData(id, login,email)
      }
    })
  }
  onLoginBtnClicked = () => {
    usersAPI.authUser()
    .then(data => {
      if(data.resultCode === 0) {
        let {email, id, login} = data.data
        this.props.setAuthUserData(id, login,email)
      }
    })
  }
  render() {
    return <Header {...this.props} onLoginBtnClicked={this.onLoginBtnClicked}/>
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.auth.login
  }
}


export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)