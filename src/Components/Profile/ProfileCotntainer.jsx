import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { usersAPI } from "../../DAL/API"
import { setProfile } from "../../reducers/profileReducer"
import Profile from "./Profile"
import { toggleIsFetching } from "../../reducers/usersReducer"
class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true)
    let userId = this.props.match.params.userId
    usersAPI.userProfile(userId, this.props.personalId)
    .then(response => {
      this.props.setProfile(response.data)
      this.props.toggleIsFetching(true)
    })
  }

  render(){
  return <Profile {...this.props} profile={this.props.profile}/>
}
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    personalId: state.auth.id,
    isFetching: state.users.isFetching
  }
}
let WithRouterProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps,{setProfile, toggleIsFetching})(WithRouterProfileContainer)