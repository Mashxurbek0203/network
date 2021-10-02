import style from './Users.module.css'
import React from 'react'
import User from '../../assets/images/user.png'
import Preloader from '../common/Preloader/Preloader'
import { NavLink } from 'react-router-dom'
const UsersSection = (props) => {





// ////////
let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for(let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }
return (
<section className={`${style.users} ${props.isFetching ? style.usersStuck : ''}`}>
  <ul className={style.usersPagesPist}>
    {pages.map(page => {
    return <li className={`${style.usersPage} ${props.currentPage === page && style.selectedPage}`} key={page}>
      <button className={style.usersPageBtn} onClick={()=> {
        props.onPageBtnClicked(page)
        }}>{page}</button>
    </li>
    })}
  </ul>
  <span>{`There are ${props.totalUsersCount} of you here`}</span>
  <div className="users-wrapper">
    <ul className={`${style.usersList} ${props.isFetching ? style.usersListStuck : ''}`}>
      {props.isFetching && <Preloader/>}
      {
      props.users.map( user => <li className={style.userItem} id={user.id} key={user.id}>
        <div className={style.userItemView}>
        <NavLink to={`/profile/${user.id}`} className={style.userItemLink}>
          <img src={!user.photos.small ? User : user.photos.small} alt={user.name} className={style.userImg} />
          </NavLink>
          {user.followed
          ? <button type='button' className={`${style.userFollowBtn} ${!user.followed ? style.follow : style.unfollow}`}
            onClick={()=> {props.onUnfollow(user.id)}}>Unfollow</button>
          : <button type='button' className={`${style.userFollowBtn} ${!user.followed ? style.follow : style.unfollow} `}
            onClick={()=>{props.onFollow(user.id)}}>Follow</button>}
        </div>
        <div className={style.clientInfo}>
          <div className={style.clientInfoMain}>
            <h4 className={style.clientInfoUserName}>{user.name}</h4>
            <p className={style.clientInfoUserSubtitle}>{user.uniqueUrlName}</p>
          </div>
          <p className={style.clientInfoLocation}>
            <span className={style.clientInfoUserCountry}>{'Uzbekistan'},</span>
            <span className={style.clientInfoUserCity}>{ 'Tashkent'}</span>
          </p>
        </div>
      </li>
      )
      }
    </ul>
  </div>
</section>
)
}

export default UsersSection