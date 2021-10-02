import Dialog from './Dialog/Dialog'
import MessageInput from './MessageInput/MessageInput'
import Messages from './Messages/Messages'
import './style.css'

function Dialogs (props) {
return (
<>
  <section className="dialogs">
    <div className="dialogs-wrap">
      <ul className="dialogs-list">
        {
          props.chatPage.dialogs.map(user => <Dialog dialog={user.name} id={user.id}  key={user.id} dispatch={props.dispatch} dataSet="user"/>)
        }
      </ul>
    </div>
    <div className="messages">
      {
        props.chatPage.messages.map(message => <Messages message={message.text} img={message.img} id={message.id} key={message.id}/>)
      }
      <MessageInput dispatch={props.dispatch} messageText={props.chatPage.newMessageText}/>
    </div>
  </section>
</>
)
}

export default Dialogs