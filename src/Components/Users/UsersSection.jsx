import style from './Users.module.css'
import React from 'react'
import UserDefaultImg from '../../assets/images/user.png'
import Preloader from '../common/Preloader/Preloader'
import User from './User/User';
import Paginator from './Paginator/Paginator';
const UsersSection = (props) => {
let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for(let i = 1; i <= pagesCount; i++) {pages.push(i)}
return (
<section className={`${style.users} ${props.isFetching ? style.usersStuck : ''}`}>
  <ul className={style.usersPagesPist}>
    {pages.map(page => {
    return <Paginator page={page} onPageBtnClicked={props.onPageBtnClicked} currentPage={props.currentPage}/>
    })}
  </ul>
  <span>{`There are ${props.totalUsersCount} of you here`}</span>
  <div className="users-wrapper">
    <ul className={`${style.usersList} ${props.isFetching ? style.usersListStuck : ''}`}>
      {props.isFetching && <Preloader/>}
      {
      props.users.map( user => <User user={user} onFollow={props.onFollow} onUnfollow={props.onUnfollow} 
                                userDefault={UserDefaultImg} isFollowDisabled={props.isFollowDisabled}/>
      )
      }
    </ul>
  </div>
</section>
)
}
export default UsersSection