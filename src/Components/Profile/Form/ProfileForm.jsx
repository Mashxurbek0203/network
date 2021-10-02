import style from './ProfileForm.module.css'
import { createRef } from 'react';
import { addPostCreator, updatePostTextCreator } from '../../../redux/state';
const ProfileForm = (props) => {
  let newPost = createRef()

  const btnClick = ()=> {
    props.dispatch(addPostCreator())
    newPost.current.value = ''
  }
  const inputChange = (evt) => { 
    let action  = updatePostTextCreator(evt.target.value)
    props.dispatch(action)
  }

  

  return (
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
  );
}

export default ProfileForm