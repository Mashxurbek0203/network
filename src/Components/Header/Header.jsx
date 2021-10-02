import './style/style.css'
const Header = (props) => {
  return (
    <>
    <header className="main-header header">
      <div className="header__wrapper">
      <a href="/" className="header__logo-link"><img src="https://www.zilliondesigns.com/images/portfolio/it-firm/Logo-For-Technology-Company-1356860.png" alt="logo" className="header__logo-img"/></a>
        {!props.login ? <button onClick={props.onLoginBtnClicked}>Login</button> : props.login}
      </div>
    </header>
    </>
  )
}

export default Header;