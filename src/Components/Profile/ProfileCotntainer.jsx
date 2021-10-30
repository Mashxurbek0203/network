import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import Profile from "./Profile"
import { getProfile, updateStatus, getStatus } from './../../reducers/profileReducer';
import withAuthRedirect from "../HOC/withRedirect";
import { compose } from "redux";
class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if(!userId) {
      userId = this.props.personalId
    }
    this.props.getProfile(userId)
    this.props.getStatus(userId)
  }

  render(){
  return <Profile {...this.props} profile={this.props.profile} 
                  isProfileLoading={this.props.isProfileLoading} 
                  updateStatus={this.props.updateStatus}
                  status={this.props.status}
                  />
}
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    personalId: state.auth.id,
    isProfileLoading: state.profilePage.isProfileLoading,
    status: state.profilePage.status,
  }
}
export default compose(
  withRouter,
  connect(mapStateToProps,{getProfile, updateStatus, getStatus}),
  withAuthRedirect
)(ProfileContainer)