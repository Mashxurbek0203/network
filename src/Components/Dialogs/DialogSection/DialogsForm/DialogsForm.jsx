import React from "react";
import { reduxForm,Field } from 'redux-form';
import style from "./DialogsForm.module.css"
import { Element } from './../../../common/FormProto/FormProto';
import { required } from './../../../../utils/validators/validators';


const Input  = Element("input")
const NewMessageForm = (props) => {
  return(
    <>
    <form onSubmit={props.handleSubmit} className={style.messageInputForm}>
    <Field
      name="newMessageBody" 
      type="text" 
      component={Input}
      placeholder="Enter your message..." 
      className={style.messageInput} 
      validate={required}
      ></Field>
      <button  
      className={style.messageSubmitBtn}
      >Send</button>
    </form>
    </>
  )
}

export const NewMessageFormRedux = reduxForm({form: 'addMessageForm'})(NewMessageForm)

