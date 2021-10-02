import { createRef } from 'react';
import Post from './Post/Post';
import style from './ProfilePosts.module.css'
const PostsSection = (props) => {
  let newPost  = createRef()
  const btnClick = () => {
    props.onBtnClick(newPost)
  }

  const inputChange = (event) => {
    props.onInputChange(event.target.value)
  }
  return (
    <>
    <div className={style.profileNewPost}>
        <div className="new-post__input-wrap"
        >
          <input type="text"
          className={style.newPostInput}
          placeholder="New post text..."
          ref={newPost}
          value={props.newPostText}
          onChange={inputChange}
          />
        </div> <br/>
        <button type="button" className={style.newPostSubmitBtn} onClick={btnClick}>Submit post</button>
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
}

export default PostsSection