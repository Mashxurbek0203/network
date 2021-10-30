import React from 'react'
import { NavLink } from 'react-router-dom';
import UserImgStyle from "./../Users.module.css"
const UserImg = ({user, userDefault}) => {
  return <NavLink to={`/profile/${user.id}`} className={UserImgStyle.userItemLink}>
  <img src={!user.photos.small ? userDefault : user.photos.small} alt={user.name} className={UserImgStyle.userImg} />
  </NavLink>
}


export default UserImg