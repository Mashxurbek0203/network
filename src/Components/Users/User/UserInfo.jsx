import React from "react"
import UserInfoStyle from "./../Users.module.css"
const UserInfo = ({user}) => {
  return <div className={UserInfoStyle.clientInfo}>
  <div className={UserInfoStyle.clientInfoMain}>
    <h4 className={UserInfoStyle.clientInfoUserName}>{user.name}</h4>
    <p className={UserInfoStyle.clientInfoUserSubtitle}>{user.uniqueUrlName}</p>
  </div>
  <p className={UserInfoStyle.clientInfoLocation}>
    <span className={UserInfoStyle.clientInfoUserCountry}>{'Uzbekistan'},</span>
    <span className={UserInfoStyle.clientInfoUserCity}>{ 'Tashkent'}</span>
  </p>
</div>
}

export default UserInfo