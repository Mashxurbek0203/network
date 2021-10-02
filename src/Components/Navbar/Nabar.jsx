import './Navbar.css'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <nav className="site-nav">
      <ul className="site-nav__list">
        <li className="site-nav__item"><NavLink to="/profile" className="site-nav__link">Profile</NavLink></li>
        <li className="site-nav__item"><NavLink to="/users" className="site-nav__link">Users</NavLink></li>
        <li className="site-nav__item"><NavLink to="/messages" className="site-nav__link">Meassages</NavLink></li>
        <li className="site-nav__item"><NavLink to="/news" className="site-nav__link">News</NavLink></li>
        <li className="site-nav__item"><NavLink to="/music" className="site-nav__link">Music</NavLink></li>
        <li className="site-nav__item"><NavLink to="/settings" className="site-nav__link">Settings</NavLink></li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar;