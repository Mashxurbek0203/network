import HeroBg from './ProfileInfo/Herobg/HeroBg';
import UserInfo from './ProfileInfo/User/Info';
const ProfileHero = ( props) => {
  return (
    <>
    <div className="profile__hero">
    <HeroBg/>
    <UserInfo profile={props.profile}/>
    </div>
    </>
  );
}

export default ProfileHero