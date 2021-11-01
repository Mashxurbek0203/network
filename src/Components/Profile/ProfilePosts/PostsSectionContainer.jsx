import { connect } from 'react-redux';
import { compose } from 'redux';
import { addProfilePost } from '../../../reducers/profileReducer';
import PostsSection from './PostsSection';

let mapStateToProps = (state) => {
  let profilePage = state.profilePage
  return {
    posts: profilePage.posts
  }
}


export default compose(
  connect(mapStateToProps, {addProfilePost})
)(PostsSection)


























































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