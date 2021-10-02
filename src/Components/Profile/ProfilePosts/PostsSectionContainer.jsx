import { connect } from 'react-redux';
import { addPostCreator, updatePostTextCreator } from '../../../reducers/profileReducer';
import PostsSection from './PostsSection';

// const PostsSectionContainer = (props) => {
//   let state = props.store.getState()
//   const onBtnClick = (element)=> {
//     props.store.dispatch(addPostCreator())
//     element.current.value = ''
//   }

//   const onInputChange = (text) => { 
//     let action  = updatePostTextCreator(text)
//     props.store.dispatch(action)
//   }

//   return <PostsSection  onBtnClick={onBtnClick} 
//                         onInputChange={onInputChange} 
//                         posts={state.profilePage.posts} 
//                         newPostText={state.profilePage.newPostText}/>

// }

let mapStateToProps = (state) => {
  let profilePage = state.profilePage
  return {
    posts: profilePage.posts,
    newPostText: profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onBtnClick() {
      dispatch(addPostCreator())
    },
    onInputChange(text) {
      let action  = updatePostTextCreator(text)
      dispatch(action)
    }
  }
} 

const PostsSectionContainer = connect(mapStateToProps, mapDispatchToProps)(PostsSection)

export default PostsSectionContainer