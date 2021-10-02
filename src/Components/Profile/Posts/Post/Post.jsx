import './Post.css'

function Post(props) {
  return(
    <li className="profile__posts-item post">
    <div className="post__wrap" id={props.id}>
      <img src={props.img} alt="user" width="90" className="post__img"/>
      <div className="post__inner">
        <p className="post__text">{props.text}</p>
        <button className="post__like-btn"><span>{props.likesCount}</span> likes</button>
      </div>
    </div>
    </li>
  )
}

export default Post