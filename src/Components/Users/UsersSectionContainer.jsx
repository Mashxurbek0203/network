import axios from "axios"
import React from "react"
import { connect } from "react-redux"
import { follow, setPageNumber, setUsers, setUsersCount, toggleIsFetching, unfollow } from "../../reducers/usersReducer"
import UsersSection from "./UsersSection"
import { usersAPI } from '../../DAL/API';

class UsersSectionContainer extends React.Component{
  

  componentDidMount(){
    this.props.toggleIsFetching(true)
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
    .then(data => {
      this.props.toggleIsFetching(false)
      this.props.setUsers(data.items)
      this.props.setUsersCount(data.totalCount)
    })
  }  
  onPageBtnClicked = (number) =>{
    debugger
    this.props.toggleIsFetching(true)
    this.props.setPageNumber(number)
    usersAPI.getUsers(number,this.props.pageSize)
    .then(data => {
              this.props.toggleIsFetching(false)
              this.props.setUsers(data.items)
              this.props.setUsersCount(data.totalCount)
            })
  }
  onUnfollow = (userId) => {
    usersAPI.unFollowUser(userId)
              .then(data => {
              if(data.resultCode === 0) {
                this.props.unfollow(userId)
              }
            })
  }
  onFollow = (userId) => {
    usersAPI.followUser(userId)
      .then(data => {
        if(data.resultCode === 0) {
            this.props.follow(userId)
        }
      })
  }
  
  render() {
    return <UsersSection  onPageBtnClicked={this.onPageBtnClicked}
                          users={this.props.users}     
                          totalUsersCount={this.props.totalUsersCount}
                          pageSize={this.props.pageSize}
                          currentPage={this.props.currentPage}
                          isFetching={this.props.isFetching}
                          onFollow={this.onFollow}
                          onUnfollow={this.onUnfollow}
    />
  }
}




let mapStateToProps = (state) => {
  return{
    users: state.users.users,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage,
    isFetching: state.users.isFetching
  }
}
// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => dispatch(follow(userId)),
//     unfollow: (userId) => dispatch(unfollow(userId)),
//     setUsers: (users) => dispatch(setUsers(users)),
//     setUsersCount: (usersCount) => dispatch(setUsersCount(usersCount)),
//     setPageNumber: (pageNumber) => dispatch(setPageNumber(pageNumber)),
//     toggleIsFetching: (isFetching) => dispatch(toggleIsFetching(isFetching))
//   }
// }




export default connect(mapStateToProps,{follow, unfollow, setUsers, setUsersCount, setPageNumber, toggleIsFetching})(UsersSectionContainer)
