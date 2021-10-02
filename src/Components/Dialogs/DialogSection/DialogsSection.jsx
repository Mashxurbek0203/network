import { createRef } from 'react'
import Dialog from '../Dialog/Dialog'
import Messages from '../Messages/Messages'
import './style.css'

function DialogsSection (props) {
  let messageInput = createRef()
  const onMessageInputChange = (evt) => {
    debugger
    props.messageInputChange(evt.target.value)
  }
  const onSendMessage = () => {
    props.sendMessage(messageInput)
  }
return (
<>
  <section className="dialogs">
    <div className="dialogs-wrap">
      <ul className="dialogs-list">
        {
          props.dialogs.dialogs.map(user => <Dialog 
                                                      dialog={user.name} 
                                                      id={user.id}  
                                                      key={user.id} 
                                                      dispatch={props.dispatch} 
                                                      dataSet="user"/>)
        }
      </ul>
    </div>
    <div className="message-section">
      <div className="messages">
        {
          props.dialogs.messages.map(message => <Messages
                                                            message={message.text}
                                                            img={message.img}
                                                            id={message.id}
                                                            key={message.id}/>)
        }
      </div>
      <div className="message__input-wrap">
      <input 
      type="text" 
      placeholder="Enter your message..." 
      className="message__input" 
      value={props.dialogs.newMessageText}
      onChange={onMessageInputChange}
      ref={messageInput}
      />
      <button 
      type="button" 
      className="message__submit-btn" 
      onClick={onSendMessage}
      >Send</button>
    </div>
    </div>
  </section>
</>
)
}

export default DialogsSection