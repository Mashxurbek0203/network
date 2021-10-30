import React from 'react';
import Post from './Post/Post';
import style from './ProfilePosts.module.css'
import { NewPostReduxForm } from './../Form/ProfileForm';


// class PostsSection extends React.Component{
//   addNewPost = (values) => {
//     this.props.addProfilePost(values.newPostText)
//   }
//   shouldComponentUpdate(nextProps, nextState) {
//     return nextProps === this.props || nextState === this.state
//   }
//   render() {
//     console.log(this.props);
  
//   return (
//     <>
//     <div className={style.profileNewPost}>
//       <NewPostReduxForm onSubmit={this.addNewPost}/>
//     </div>
//     <div className={style.profilePostsWrap}>
//     <ul className={style.profilePostsList}>
//       {
//         this.props.posts.map(post => <Post img={post.img} text={post.text} likesCount={post.likesCount} id={post.id} key={post.id} />)
//       }
//     </ul>
//     </div>
//     </>
//   );}
// }

const PostsSection = React.memo((props) => {
  const addNewPost = (values) => {
    props.addProfilePost(values.newPostText)
  }
  return (
    <>
    <div className={style.profileNewPost}>
      <NewPostReduxForm onSubmit={addNewPost}/>
    </div>
    <div className={style.profilePostsWrap}>
    <ul className={style.profilePostsList}>
      {
        props.posts.map(post => <Post img={post.img} text={post.text} likesCount={post.likesCount} id={post.id} key={post.id} />)
      }
    </ul>
    </div>
    </>
  );
})

export default PostsSection
















