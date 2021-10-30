import{createSelector} from "reselect"

const getUsers = (state) => {
  return  state.users.users
}
export const getUsersSuper = createSelector(getUsers, (users) => {
  debugger
  return users.filter(user => user)
})
export const getPageSize = (state) => {
  return  state.users.pageSize
}

export const getTotalUsersCount = (state) => {
  return  state.users.totalUsersCount
}

export const getCurrentPage = (state) => {
  return  state.users.currentPage
}
export const getIsFetching = (state) => {
  return  state.users.isFetching
}

export const getFollowingIsLoading = (state) => {
  return  state.users.followingIsLoading
}