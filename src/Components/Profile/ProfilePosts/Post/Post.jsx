import style from './Post.module.css'

function Post(props) {
  return(
    <li className="profile__posts-item post">
    <div className={style.postWrap} id={props.id}>
      <img src={props.img} alt="user" width="90" className={style.postImg}/>
      <div className={style.postInner}>
        <p className={style.postText}>{props.text}</p>
        <button className={style.postLikeBtn}><span>{props.likesCount}</span> likes</button>
      </div>
    </div>
    </li>
  )
}

export default Post