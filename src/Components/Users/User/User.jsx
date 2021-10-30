import React from "react"
import UserStyle from "./../Users.module.css"
import FollowBtn from "./FollowBtn";
import UserInfo from "./UserInfo";
import UserImg from "./UserImg";
const User = ({user, onFollow, onUnfollow, ...props}) => {
  return (
    <li className={UserStyle.userItem} id={user.id} key={user.id}>
        <div className={UserStyle.userItemView}>
          <UserImg user={user} userDefault={props.userDefault}/>
          <FollowBtn user={user} onFollow={onFollow} onUnfollow={onUnfollow} isFollowDisabled={props.isFollowDisabled}/>
        </div>
        <UserInfo user={user}/>
      </li>
  )
}

export default User