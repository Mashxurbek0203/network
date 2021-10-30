import { usersAPI } from './../DAL/API';
import { modifyUserObj } from './../utils/validators/actionsOveruserObj';
let initialState = {
  users: [],
  pageSize: 15,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingIsLoading: [],
  fake:10 
}
const FOLLOW_AT = 'FOLLOW'
const UNFOLLOW_AT = 'UNFOLLOW'
const SET_USERS_AT = 'SET_USERS'
const SET_USERS_COUNT_AT = 'SET_USERS_COUNT'
const SET_PAGE_NUMBER_AT = 'SET_PAGE_NUMBER'
const TOGGLE_IS_FETCHING_AT = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_LOADING = 'TOGGLE_IS_FOLLOWING_LOADING'

const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case "FAKE": 
    return {...state, fake: state.fake + 1}
    case FOLLOW_AT:
      return {
        ...state,
        users: modifyUserObj(state.users, "id", action.id, {followed: true})
      }
      case UNFOLLOW_AT:
        return {
          ...state,
          users: modifyUserObj(state.users, "id", action.id, {followed: false})
      }
    case SET_USERS_AT:
      return{
        ...state,
        users: [...action.users],
      }
    case SET_USERS_COUNT_AT:
      return{
        ...state,
        totalUsersCount: action.usersCount
      }
    case SET_PAGE_NUMBER_AT:
      return{
        ...state,
        currentPage: action.pageNumber
      }
    case TOGGLE_IS_FETCHING_AT:
      return{
        ...state,
        isFetching: action.isFetching
      }
    case TOGGLE_IS_FOLLOWING_LOADING:
      return{
        ...state,
        followingIsLoading: action.isFetching 
                            ? [...state.followingIsLoading, action.userId] 
                            : state.followingIsLoading.filter(id => id !== action.userId) 
      }

    default: return state;
  }
}
export const followSuccess = (id) => ({type: FOLLOW_AT, id})
export const unfollowSuccess = (id) => ({type: UNFOLLOW_AT, id})
export const setUsers = (users) => ({type: SET_USERS_AT, users})
export const setUsersCount = (usersCount)=> ({type: SET_USERS_COUNT_AT, usersCount})
export const setPageNumber = (number)=> ({type: SET_PAGE_NUMBER_AT, pageNumber: number})
export const toggleIsFetching = (isFetching)=> ({type: TOGGLE_IS_FETCHING_AT, isFetching})
export const toggleFollowingIsLoading = (isFetching, userId)=> ({type: TOGGLE_IS_FOLLOWING_LOADING, isFetching, userId})


export const requestUsers = (currentPage, pageSize) => async(dispatch) => {
  dispatch(toggleIsFetching(true))
  const getUsersResponse = await usersAPI.getUsers(currentPage, pageSize)
  dispatch(toggleIsFetching(false))
  dispatch(setUsers(getUsersResponse.items))
  dispatch(setUsersCount(getUsersResponse.totalCount))

}
export const changePage = (currentPage, pageSize) => async(dispatch) => {
  dispatch(toggleIsFetching(true))
  dispatch(setPageNumber(currentPage))
  const getUsersResponse = await usersAPI.getUsers(currentPage, pageSize)
  dispatch(toggleIsFetching(false))
  dispatch(setUsersCount(getUsersResponse.totalCount))
  dispatch(setUsers(getUsersResponse.items))
}


const addUserToFollowedSuperior = async(dispatch, userId, requestApi, actionCreator) => {
  dispatch(toggleFollowingIsLoading(true, userId))
  const actionOverUserResponse = await requestApi(userId)
  if(actionOverUserResponse.resultCode === 0){
    dispatch(actionCreator(userId))
  }
  dispatch(toggleFollowingIsLoading(false, userId))
}

export const follow = (userId) => (dispatch) => {
  addUserToFollowedSuperior(dispatch, userId, usersAPI.followUser.bind(usersAPI), followSuccess)
}



export const unfollow = (userId) => (dispatch)=> {
  addUserToFollowedSuperior(dispatch, userId, usersAPI.unfollowUser.bind(usersAPI), unfollowSuccess)
}

export default usersReducer