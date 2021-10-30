import { Route } from 'react-router';
import DialogsSectionContainer from '../Dialogs/DialogSection/DialogsSectionContainer';
import './Main.css'
import UsersSectionContainer from '../Users/UsersSectionContainer'
import ProfileCotntainer from '../Profile/ProfileCotntainer';
import Login from '../Login/Login';
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
      <Route path="/login" render={() => <Login/>} exact/>
    </div>
    </>
  )
}

export default Main;