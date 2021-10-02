const  ADD_POST = "ADD-POST"
const  UPDATE_POST_TEXT = "UPDATE-POST-TEXT"
const SET_PROFILE = "SET_PROFILE"

let initialState = {
  posts: [
    {text: 'Lorem ipsum dolor set', id: 1, likesCount: 2, img: 'https://png.pngtree.com/element_our/20190604/ourlarge/pngtree-user-avatar-boy-image_1482937.jpg'},
    {text: 'Lorem ipsum dolor set', id: 2, likesCount: 28, img: 'https://png.pngtree.com/element_our/20190604/ourlarge/pngtree-user-avatar-boy-image_1482937.jpg'},
    {text: 'Lorem ipsum dolor set', id: 3, likesCount: 0, img: 'https://png.pngtree.com/element_our/20190604/ourlarge/pngtree-user-avatar-boy-image_1482937.jpg'},
    {text: 'Lorem ipsum dolor set', id: 4, likesCount: 35, img: 'https://png.pngtree.com/element_our/20190604/ourlarge/pngtree-user-avatar-boy-image_1482937.jpg'},
    {text: 'Lorem ipsum dolor set', id: 5, likesCount: 10, img: 'https://png.pngtree.com/element_our/20190604/ourlarge/pngtree-user-avatar-boy-image_1482937.jpg'},
  ],
  newPostText: ' ',
  profile: null
}

const profileReducer = (state = initialState, action) => {
  const createPost = (postData) => {
    const postsArray = state.posts
    let postId = (postsArray[postsArray.length - 1].id) + 1
    let newPost = {text: postData, id: postId, likesCount: 0, img: 'https://picsum.photos/200/300?random=1'}
    return newPost
  }
  switch(action.type) {
    case ADD_POST:{
      return {
        ...state,
        posts: [...state.posts, createPost(state.newPostText)],
        newPostText: ' '
      }
    // let stateCopy = {...state}
    // stateCopy.posts = [...state.posts]
    // stateCopy.posts.push(createPost(state.newPostText))
    // stateCopy.newPostText = ' '
    //   return stateCopy;
    }
    case UPDATE_POST_TEXT:
      return{
        ...state,
        newPostText: action.newText
      }
    case SET_PROFILE:
      return{
        ...state,
        profile: action.profile
      }
      default: 
      return  state; 
  }
}

export const addPostCreator =  () => (
  {type: ADD_POST}
)
export const updatePostTextCreator = (text) => {
  return {type: UPDATE_POST_TEXT, newText: text}
}
export const setProfile = (profile) => {
  return {type: SET_PROFILE, profile}
}





export default profileReducer