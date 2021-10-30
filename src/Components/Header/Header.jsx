import './style/style.css'
import { NavLink } from 'react-router-dom';
const Header = (props) => {
  return (
    <>
    <header className="main-header header">
      <div className="header__wrapper">
      <NavLink to="/" className="header__link"><img src="https://www.zilliondesigns.com/images/portfolio/it-firm/Logo-For-Technology-Company-1356860.png" alt="logo" className="header__logo-img"/></NavLink>
        {props.isAuth ? <div className=" "><span>{props.login}</span>  <button onClick={props.onLogoutBtnClicked}>Log Out</button></div> : <button onClick={props.onLoginBtnClicked}>Login</button>}
      </div>
    </header>
    </>
  )
}

export default Header;