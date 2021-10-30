import Dialog from '../Dialog/Dialog'
import Messages from '../Messages/Messages'
import './Dialogs.css'
import { NewMessageFormRedux } from './DialogsForm/DialogsForm';

function DialogsSection (props) {
  const onSendMessage = (values) => {
    props.addMessage(values.newMessageBody)
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
      <NewMessageFormRedux onSubmit={onSendMessage}/>
    </div>
    </div>
  </section>
</>
)
}




export default DialogsSection