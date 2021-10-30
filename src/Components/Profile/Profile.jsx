import { Redirect } from "react-router"
import Preloader from "../common/Preloader/Preloader"
import ProfileHero from "./Hero/Profile-hero"
import style from './Profile.module.css'
import PostsSectionContainer from "./ProfilePosts/PostsSectionContainer"
const Profile = (props) => {
  if(!props.isAuth) {return <Redirect to="/login"/>}
  if(props.isProfileLoading) { return <Preloader/>}
  return (
    <section className={`${style.profile} ${props.isFetching ? style.sectionStuck : ''}`}>
    <ProfileHero profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
    <PostsSectionContainer/>
    </section>
  )
}

export default Profile