import { NavLink } from 'react-router-dom'
import './style.css'

function Dialog(props) {
return (
    <li className="dialogs-item" >
      <NavLink  
      to={`/messages/${props.id}`} 
      className="dialog-link"
      data-type={props.dataSet}
      id={props.id}
      >{props.dialog}</NavLink>
    </li>
    )
}

export default Dialog