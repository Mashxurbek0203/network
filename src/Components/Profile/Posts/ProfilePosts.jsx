import Post from './Post/Post';
import './style.css'
const ProfilePosts = (props) => {
  return (
    <div className="profile__posts-wrap">
    <ul className="profile__posts-list">
      {
        props.posts.map(post => <Post img={post.img} text={post.text} likesCount={post.likesCount} id={post.id} key={post.id} />)
      }
    </ul>
    </div>
  );
}

export default ProfilePosts