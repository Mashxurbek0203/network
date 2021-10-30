import style from './Info.module.css'
import anonymous from '../../../../../assets/images/user.png'
import Preloader from './../../../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

function UserInfo(props) {
  let profile = props.profile
  if(!props.profile) {
    return <Preloader/>
  }
  return (
    <>
    <div className={style.userWrapper}>
    <img src={profile.photos.large ? profile.photos.large : anonymous} alt="user avatar" className={style.userImg} />
    <div className={style.userInfo}>
      <p className={style.userInfoName}>{profile.fullName}</p>
      <p className={style.userInfoBirth}>Looking for a job: {profile.lookingForAJob ? 'Yes' : 'No'}</p>
      <p className={style.userInfoLocation}>{profile.lookingForAJobDescription ? `Job category: ${profile.lookingForAJobDescription}` : ''}</p>
      <p className={style.userInfoEducation}>{profile.aboutMe ? `About: ${profile.aboutMe}` : ''}</p>
    </div>
    <div className={style.userContactsWrap}>
      <h3 className={style.userContactsTitle}>Contacts</h3>
      <ul className={style.userContactsList}></ul>
    </div>
    </div>
    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
    </>
  )
}

export default UserInfo