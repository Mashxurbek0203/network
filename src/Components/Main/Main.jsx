import { Route } from 'react-router';
import DialogsSectionContainer from '../Dialogs/DialogSection/DialogsSectionContainer';
import './Main.css'
import UsersSectionContainer from '../Users/UsersSectionContainer'
import ProfileCotntainer from '../Profile/ProfileCotntainer';
const Main = (props) => {

  
  return (
    <>
    <div className="site-content">
      <Route path="/profile/:userId?"
      render={() =>  <ProfileCotntainer 
      // posts={props.state.profilePage.posts} 
      // newPostText={props.state.profilePage.newPostText}
      // dispatch={props.dispatch}
      // store={props.store}
      />} />
      <Route path="/messages" render={() => <DialogsSectionContainer 
      />} />
      <Route path="/users" render={() => <UsersSectionContainer/>}/>
    </div>
    </>
  )
}

export default Main;