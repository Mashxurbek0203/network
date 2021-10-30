import React from "react"
import { Field, reduxForm } from 'redux-form';
import style from "./ProfileForm.module.css"
import { required } from './../../../utils/validators/validators';
import { Element } from './../../common/FormProto/FormProto';

const TextArea = Element('input')
const NewPostForm = (props) => {
  return(
    <>
    <form onSubmit={props.handleSubmit}>
    <div className="new-post__input-wrap">
    <Field type="text"
          className={style.newPostInput}
          placeholder="New post text..."
          name="newPostText"
          component={TextArea}
          validate={required}
          />
        </div> <br/>
        <button className={style.newPostSubmitBtn}>Submit post</button>
    </form>
    </>
  )
}

export const NewPostReduxForm = reduxForm({form:'addPostForm'})(NewPostForm)