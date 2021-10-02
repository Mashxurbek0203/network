import './App.css';
// import AuthenticationContainer from './Components/Auth/AuthenticationContainer';
// import Header from './Components/Header/Header';
import HeaderContainer from './Components/Header/HeaderContainer';
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Nabar';

function App(props) {
  return (
    <div className="main-wrapper">
    <HeaderContainer/>
    <Navbar/>
    <Main state={props.state} dispatch={props.dispatch} store={props.store}/>
    {/* <AuthenticationContainer/> */}
    </div>
    );
}

export default App;
