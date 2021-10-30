import React from "react"
import FollowBtnStyle from "./../Users.module.css"
const FollowBtn = ({user, onFollow, onUnfollow, isFollowDisabled}) => {
  return <>
  {user.followed
          ? <button type='button' className={`${FollowBtnStyle.userFollowBtn} ${!user.followed ? FollowBtnStyle.follow : FollowBtnStyle.unfollow}`}
            onClick={()=> {onUnfollow(user.id)}} disabled={isFollowDisabled.some(id => id === user.id)}>Unfollow</button>
          : <button type='button' className={`${FollowBtnStyle.userFollowBtn} ${!user.followed ? FollowBtnStyle.follow : FollowBtnStyle.unfollow} `}
            onClick={()=>{onFollow(user.id)}}disabled={isFollowDisabled.some(id => id === user.id)}>Follow</button>}
  </>
}

export default FollowBtn