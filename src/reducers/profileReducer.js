import { profileAPI, usersAPI } from './../DAL/API';
const  ADD_POST = "ADD-POST"
const SET_PROFILE = "SET_PROFILE"
const SET_STATUS = "SET_STATUS"
const IS_PROFILE_LOADING ="IS_PROFILE_LOADING"
const UPDATE_POST_TEXT ="UPDATE_POST_TEXT"

let initialState = {
  posts: [
    {text: 'Lorem ipsum dolor set', id: 1, likesCount: 2, img: 'https://png.pngtree.com/element_our/20190604/ourlarge/pngtree-user-avatar-boy-image_1482937.jpg'},
    {text: 'Lorem ipsum dolor set', id: 2, likesCount: 28, img: 'https://png.pngtree.com/element_our/20190604/ourlarge/pngtree-user-avatar-boy-image_1482937.jpg'},
    {text: 'Lorem ipsum dolor set', id: 3, likesCount: 0, img: 'https://png.pngtree.com/element_our/20190604/ourlarge/pngtree-user-avatar-boy-image_1482937.jpg'},
    {text: 'Lorem ipsum dolor set', id: 4, likesCount: 35, img: 'https://png.pngtree.com/element_our/20190604/ourlarge/pngtree-user-avatar-boy-image_1482937.jpg'},
    {text: 'Lorem ipsum dolor set', id: 5, likesCount: 10, img: 'https://png.pngtree.com/element_our/20190604/ourlarge/pngtree-user-avatar-boy-image_1482937.jpg'},
  ],
  isProfileLoading: false,
  newPostText: ' ',
  profile: null,
  status: ''
}

const profileReducer = (state = initialState, action) => {
  const createPost = (postData) => {
    const postsArray = state.posts
    let postId = (postsArray[postsArray.length - 1].id) + 1
    let newPost = {text: postData, id: postId, likesCount: 0, img: 'https://picsum.photos/200/300?random=1'}
    return newPost
  }
  switch(action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, createPost(action.newPostText)],
        newPostText: ' '
      }
    case SET_PROFILE:
      return{
        ...state,
        profile: action.profile
      }
      case IS_PROFILE_LOADING: 
      return {
        ...state,
        isProfileLoading: action.isProfileLoading
      }
      case SET_STATUS: 
      return {
        ...state,
        status: action.status
      }
      default: 
      return  state; 
  }
}

export const addProfilePost =  (newPostText) => (
  {type: ADD_POST, newPostText}
)
export const updatePostText =  (id, newPostText) => (
  {type: UPDATE_POST_TEXT, id, newPostText}
)
export const setProfile = (profile) => {
  return {type: SET_PROFILE, profile}
}
export const setProfileLoadingStatus = (isProfileLoading) => {
  return {type: IS_PROFILE_LOADING, isProfileLoading}
}
export const setStatus = (status) => {
  return {type: SET_STATUS, status}
}

export const getProfile = (userId) => async(dispatch) => {
    dispatch(setProfileLoadingStatus(true))
    const userProfileResponse = await usersAPI.userProfile(userId)
      dispatch(setProfile(userProfileResponse.data))
      dispatch(setProfileLoadingStatus(false))
}

export const updateStatus = (status) => async(dispatch) => {
  const updateStatusResponse = await profileAPI.updateStatus(status)
      if(updateStatusResponse.data.resultCode === 0) {
      dispatch(setStatus(status))
      }
}
export const getStatus = (userId) => async(dispatch) => {
  const getStatusResponse = await profileAPI.getStatus(userId)
  dispatch(setStatus(getStatusResponse.data))
}



export default profileReducer