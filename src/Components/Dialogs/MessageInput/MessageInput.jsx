import { addMessageCreator, updateNewMessageTextCreator } from '../../../redux/state'
import './style.css'

const MessageInput = (props) => {
const messageInputChange = (evt) => {
  props.dispatch(updateNewMessageTextCreator(evt.target.value))
}

const onMessageBtnClick = () => {
  props.dispatch(addMessageCreator())
}

  return (
    <>
    <div className="message__input-wrap">
      <input 
      type="text" 
      placeholder="Enter your message..." 
      className="message__input" 
      value={props.messageText}
      onChange={messageInputChange}
      />
      <button 
      type="button" 
      className="message__submit-btn" 
      onClick={onMessageBtnClick}
      >Send</button>
    </div>
    </>
  )
}

export default MessageInput