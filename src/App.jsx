import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import './App.css';
// import AuthenticationContainer from './Component
import HeaderContainer from './Components/Header/HeaderContainer';
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Nabar';
import { initialize } from './reducers/appReducer';
import { withRouter } from 'react-router';
import Preloader from './Components/common/Preloader/Preloader';

class App extends React.Component {
  componentDidMount(){
    this.props.initialize()
  }
  render() {
    if(!this.props.isInitialized) {return <Preloader/>}
  return (
    <div className="main-wrapper">
    <HeaderContainer/>
    <Navbar/>
    <Main/>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isInitialized: state.app.isInitialized
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, {initialize})
)(App);
