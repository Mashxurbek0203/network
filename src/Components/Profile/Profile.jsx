import ProfileHero from "./Hero/Profile-hero"
import style from './Profile.module.css'
import PostsSectionContainer from "./ProfilePosts/PostsSectionContainer"
const Profile = (props) => {
  return (
    <section className={`${style.profile} ${props.isFetching ? style.sectionStuck : ''}`}>
    <ProfileHero profile={props.profile}/>
    <PostsSectionContainer profile={props.profile}/>
    </section>
  )
}

export default Profile