import React from "react";
import {
  connect
} from "react-redux";
import { Redirect } from "react-router";

const withAuthRedirect = (Component) => {

  const mapAuthStateToProps = (state) => {
    return {
      isAuth: state.auth.isAuth
    }
  }


  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) {return <Redirect to="/login"/>}
      return <Component {...this.props}/>
    }
  }


  return connect(mapAuthStateToProps)(RedirectComponent)
}

export default withAuthRedirect