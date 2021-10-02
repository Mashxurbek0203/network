let initialState = {
  users: [],
  pageSize: 15,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false
}
const FOLLOW_AT = 'FOLLOW'
const UNFOLLOW_AT = 'UNFOLLOW'
const SET_USERS_AT = 'SET_USERS'
const SET_USERS_COUNT_AT = 'SET_USERS_COUNT'
const SET_PAGE_NUMBER_AT = 'SET_PAGE_NUMBER'
const TOGGLE_IS_FETCHING_AT = 'TOGGLE_IS_FETCHING'

const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case FOLLOW_AT:{
      let stateCopy = {
        ...state,
        users: state.users.map(user => user.id === action.id ? {...user, followed: true} : user)
      }
      return stateCopy;}
    case UNFOLLOW_AT:
      return {
        ...state,
        users: state.users.map(user => user.id === action.id ? {...user, followed: false} : user)
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
    default: return state;
  }
}
export const follow = (id) => ({type: FOLLOW_AT, id})
export const unfollow = (id) => ({type: UNFOLLOW_AT, id})
export const setUsers = (users) => ({type: SET_USERS_AT, users})
export const setUsersCount = (usersCount)=> ({type: SET_USERS_COUNT_AT, usersCount})
export const setPageNumber = (number)=> ({type: SET_PAGE_NUMBER_AT, pageNumber: number})
export const toggleIsFetching = (isFetching)=> ({type: TOGGLE_IS_FETCHING_AT, isFetching})
export default usersReducer








//   {name: 'Dima', 
  //   img: 'https://images.unsplash.com/photo-1543337676-7712b5028449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80', 
  //   id: 1, location: { country: 'Belarus', city: 'Minsk'},
  //   subtext: "Hey I'm a programmer...",
  //   followed:false,
  //   styleClass:'follow'
  // },
  //   {name: 'Sergei', 
  //   img: 'https://images.unsplash.com/photo-1543337676-7712b5028449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80', 
  //   id: 2, location: { country: 'Russia', city: 'Moscow'},
  //   subtext: "Hey I'm a designer...",
  //   followed:false,
  //   styleClass:'follow'
  // },
  //   {name: 'Sasha', 
  //   img: 'https://images.unsplash.com/photo-1543337676-7712b5028449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80', 
  //   id: 3, location: { country: 'Ukraine', city: 'Kiev'},
  //   subtext: "Hey I'm a manager...",
  //   followed:false,
  //   styleClass:'follow'
  // },
  //   {name: 'Vladilen', 
  //   img: 'https://images.unsplash.com/photo-1543337676-7712b5028449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80', 
  //   id: 4, location: { country: 'Russia', city: 'Siberia'},
  //   subtext: "Hey I'm a full-stack programmer...",
  //   followed:false,
  //   styleClass:'follow',
  // }