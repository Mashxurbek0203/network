import React from "react"
import { connect } from "react-redux"
import { compose } from "redux"
import { follow, unfollow, requestUsers, changePage} from "../../reducers/usersReducer"
import withAuthRedirect from "../HOC/withRedirect"
import UsersSection from "./UsersSection"
import {  getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingIsLoading, getUsersSuper } from './../../selectors/selectors';

class UsersSectionContainer extends React.Component{
  

  componentDidMount(){
    this.props.requestUsers(this.props.currentPage, this.props.pageSize)
  }  
  onPageBtnClicked = (number) =>{
    this.props.changePage(number, this.props.pageSize)
  }
  onUnfollow = (userId) => {
    this.props.unfollow(userId)
  }
  onFollow = (userId) => {
    this.props.follow(userId)
  }
  
  render() {
    console.log('Render Users');
    return <UsersSection  onPageBtnClicked={this.onPageBtnClicked}
                          users={this.props.users}     
                          totalUsersCount={this.props.totalUsersCount}
                          pageSize={this.props.pageSize}
                          currentPage={this.props.currentPage}
                          isFetching={this.props.isFetching}
                          onFollow={this.onFollow}
                          onUnfollow={this.onUnfollow}
                          isFollowDisabled={this.props.followingIsLoading}
    />
  }
}
let mapStateToProps = (state) => {
  console.log('mapstateTopProps Users');
  return{
    users: getUsersSuper(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingIsLoading: getFollowingIsLoading(state),
  }
}

export default compose(
  connect(mapStateToProps,{follow, unfollow,requestUsers, changePage}),
  withAuthRedirect
)(UsersSectionContainer)
