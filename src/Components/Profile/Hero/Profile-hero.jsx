import HeroBg from './ProfileInfo/Herobg/HeroBg';
import UserInfo from './ProfileInfo/User/Info';
const ProfileHero = ( props) => {
  return (
    <>
    <div className="profile__hero">
    <HeroBg/>
    <UserInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
    </div>
    </>
  );
}

export default ProfileHero