import './style.css'

function Messages(props) {
  return (
    <div className="message-wrap">
      <div className="message__author">
        <img src={props.img} alt="user" className="message__author-img" />
      </div>
      <p className="message-text">{props.message}</p>
    </div>

  )
}

export default Messages